// @vitest-environment jsdom
import '@testing-library/jest-dom/vitest';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { mount, unmount, type Component } from 'svelte';
import GraphIsland from './GraphIsland.svelte';
import type { GraphNode, WisdomEntry } from '../../types/domain';

const graphNodes: GraphNode[] = [
	{ id: 'arch-001', section: 'architecture', origin: 'human', status: 'active', text: 'Keep boundaries clear.', lang: 'en' },
	{ id: 'wis-001', section: 'wisdom', origin: 'studio', status: 'active', text: 'Question the obvious.', lang: 'en' }
];

const wisdomEntries: WisdomEntry[] = graphNodes.map((node) => ({
	...node,
	level: 'beginner',
	teaches: '',
	tags: [`tag-${node.id}`],
	related: [],
	rights: { license: 'CC-BY-NC-SA-4.0' }
}));

afterEach(() => {
	vi.unstubAllGlobals();
	document.body.replaceChildren();
});

describe('GraphIsland', () => {
	it('renders nodes and updates the accessible details panel when a node is selected', async () => {
		vi.stubGlobal('fetch', vi.fn()
			.mockResolvedValueOnce(new Response(JSON.stringify({ nodes: graphNodes, edges: [] }), { status: 200 }))
			.mockResolvedValueOnce(new Response(JSON.stringify(wisdomEntries), { status: 200 })));

		const target = document.createElement('div');
		document.body.append(target);
		const island = mount(GraphIsland as unknown as Component, { target });

		await vi.waitFor(() => {
			expect(target.querySelectorAll('[data-node-id]')).toHaveLength(graphNodes.length);
		});

		const firstNode = target.querySelector<SVGCircleElement>('[data-node-id="arch-001"]');
		expect(firstNode).not.toBeNull();
		expect(firstNode).toHaveAttribute('role', 'button');
		expect(firstNode).toHaveAttribute('tabindex', '0');
		expect(firstNode).toHaveAttribute(
			'aria-label',
			'arch-001: Keep boundaries clear., tags: tag-arch-001'
		);

		firstNode?.dispatchEvent(new MouseEvent('click', { bubbles: true }));

		await vi.waitFor(() => {
			const details = target.querySelector('aside[aria-label], aside[aria-labelledby]');
			expect(details).toHaveTextContent('Keep boundaries clear.');
		});

		await unmount(island);
	});
});
