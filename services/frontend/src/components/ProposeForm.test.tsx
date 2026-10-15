// @vitest-environment jsdom
import '@testing-library/jest-dom/vitest';
import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { afterEach, describe, expect, it, vi } from 'vitest';

import ProposeForm from './ProposeForm';

const proposalsMocks = vi.hoisted(() => ({ submitProposal: vi.fn() }));
vi.mock('../lib/proposals', () => proposalsMocks);

afterEach(() => {
  cleanup();
  proposalsMocks.submitProposal.mockReset();
});

const fillRequired = () => {
  fireEvent.change(screen.getByLabelText('Quote text'), { target: { value: 'Simplicity is the final sophistication.' } });
  fireEvent.change(screen.getByLabelText('Section'), { target: { value: 'wisdom' } });
};

describe('ProposeForm', () => {
  it('renders every field with its own label', () => {
    render(<ProposeForm lang="en" />);
    expect(screen.getByLabelText('Quote text')).toBeInTheDocument();
    expect(screen.getByLabelText('Section')).toBeInTheDocument();
    expect(screen.getByLabelText('Source (optional)')).toBeInTheDocument();
    expect(screen.getByLabelText('Level')).toBeInTheDocument();
    expect(screen.getByLabelText(/Tags/)).toBeInTheDocument();
    expect(screen.getByLabelText(/What it teaches/)).toBeInTheDocument();
  });

  it('blocks submission and shows errors when required fields are empty, without calling the network', () => {
    render(<ProposeForm lang="en" />);
    fireEvent.click(screen.getByRole('button', { name: 'Propose' }));
    expect(screen.getAllByRole('alert').length).toBeGreaterThan(0);
    expect(proposalsMocks.submitProposal).not.toHaveBeenCalled();
  });

  it('submits the exact payload the contract expects on valid input', async () => {
    proposalsMocks.submitProposal.mockResolvedValue({ ok: true, id: 'p-1' });
    render(<ProposeForm lang="en" />);
    fillRequired();
    fireEvent.click(screen.getByRole('button', { name: 'Propose' }));
    await waitFor(() => expect(proposalsMocks.submitProposal).toHaveBeenCalledWith({
      text: 'Simplicity is the final sophistication.', section: 'wisdom', lang: 'en',
    }));
  });

  it('shows a disabled "Submitting…" state while the request is in flight', async () => {
    let resolve!: (value: unknown) => void;
    proposalsMocks.submitProposal.mockReturnValue(new Promise((r) => { resolve = r; }));
    render(<ProposeForm lang="en" />);
    fillRequired();
    fireEvent.click(screen.getByRole('button', { name: 'Propose' }));
    const button = await screen.findByRole('button', { name: 'Submitting…' });
    expect(button).toBeDisabled();
    resolve({ ok: true, id: 'p-1' });
  });

  it('announces success with aria-live after a successful submission', async () => {
    proposalsMocks.submitProposal.mockResolvedValue({ ok: true, id: 'p-1' });
    render(<ProposeForm lang="en" />);
    fillRequired();
    fireEvent.click(screen.getByRole('button', { name: 'Propose' }));
    const status = await screen.findByRole('status');
    expect(status).toHaveTextContent('Proposal submitted. Pending review.');
  });

  it('shows a translated error state when the server rejects the proposal', async () => {
    proposalsMocks.submitProposal.mockResolvedValue({ ok: false, reason: 'unauthenticated' });
    render(<ProposeForm lang="en" />);
    fillRequired();
    fireEvent.click(screen.getByRole('button', { name: 'Propose' }));
    expect(await screen.findByText('Your session has expired. Please log in again.')).toBeInTheDocument();
  });

  it('renders in es', () => {
    render(<ProposeForm lang="es" />);
    expect(screen.getByLabelText('Texto de la cita')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Proponer' })).toBeInTheDocument();
  });
});

// Task 6: the Accessibility Definition of Done, driven only by the keyboard (user-event, not fireEvent).
describe('ProposeForm — keyboard and accessible errors', () => {
  it('can be filled and submitted with the keyboard alone', async () => {
    proposalsMocks.submitProposal.mockResolvedValue({ ok: true, id: 'p-1' });
    const user = userEvent.setup();
    render(<ProposeForm lang="en" />);

    await user.tab();
    expect(screen.getByLabelText('Quote text')).toHaveFocus();
    await user.keyboard('Simplicity is the final sophistication.');
    await user.tab();
    expect(screen.getByLabelText('Section')).toHaveFocus();
    await user.keyboard('wisdom');

    // Source, Level, Tags and What it teaches come before the submit button in tab order.
    for (let i = 0; i < 5; i += 1) await user.tab();
    expect(screen.getByRole('button', { name: 'Propose' })).toHaveFocus();
    await user.keyboard('{Enter}');

    await waitFor(() => expect(proposalsMocks.submitProposal).toHaveBeenCalledWith({
      text: 'Simplicity is the final sophistication.', section: 'wisdom', lang: 'en',
    }));
  });

  it.each(['en', 'es'] as const)('%s: an invalid keyboard submit moves focus to the first error and ties the message to its field', async (lang) => {
    const user = userEvent.setup();
    render(<ProposeForm lang={lang} />);
    const text = screen.getByLabelText(lang === 'es' ? 'Texto de la cita' : 'Quote text');

    for (let i = 0; i < 7; i += 1) await user.tab();
    await user.keyboard('{Enter}');

    expect(text).toHaveFocus();
    expect(text).toHaveAttribute('aria-invalid', 'true');
    // The error is text referenced by aria-describedby, not just a colour change.
    const message = document.getElementById(text.getAttribute('aria-describedby') ?? '');
    expect(message).toHaveAttribute('role', 'alert');
    expect(message?.textContent?.trim()).not.toBe('');
    expect(text).toHaveAccessibleDescription(message?.textContent ?? '');
    expect(proposalsMocks.submitProposal).not.toHaveBeenCalled();
  });
});
