import { expect, test } from '@playwright/test';
import { joinTags, radialLayout } from '../src/components/graph/layout';
import type { GraphNode, WisdomEntry } from '../src/types/domain';

test.use({ serviceWorkers: 'block' });

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

test('radialLayout assigns deterministic coordinates without a DOM', () => {
	const positionedNodes = radialLayout(joinTags(graphNodes, wisdomEntries), 1000, 600);

	expect(positionedNodes.map((node) => node.id)).toEqual(['arch-001', 'wis-001']);
	expect(positionedNodes[0].x).toBeCloseTo(532.4, 1);
	expect(positionedNodes[0].y).toBeCloseTo(114, 0);
	expect(positionedNodes[1].x).toBeCloseTo(532.4, 1);
	expect(positionedNodes[1].y).toBeCloseTo(486, 0);
});

test('renders labelled nodes and updates the selected-node aside', async ({ page }) => {
	await page.route('**/api/v1/graph', (route) => route.fulfill({
		status: 200,
		contentType: 'application/json',
		body: JSON.stringify({ nodes: graphNodes, edges: [] })
	}));
	await page.route('**/api/v1/wisdom/sample', (route) => route.fulfill({
		status: 200,
		contentType: 'application/json',
		body: JSON.stringify(wisdomEntries)
	}));

	await page.goto('/en/graph');

	const graph = page.getByRole('group', { name: 'Knowledge graph with 2 nodes and 0 edges' });
	const firstNode = page.getByRole('button', {
		name: 'arch-001: Keep boundaries clear., tags: tag-arch-001'
	});
	const details = page.getByRole('complementary', { name: 'Selected node' });

	// The unit test verifies layout math; this rendered check verifies DOM binding and accessibility.
	await expect(graph).toBeVisible();
	await expect(page.locator('[data-node-id]')).toHaveCount(graphNodes.length);
	await expect(firstNode).toHaveAttribute('role', 'button');
	await expect(firstNode).toHaveAttribute('tabindex', '0');
	await expect(firstNode).toHaveAttribute('aria-label');
	await firstNode.click();
	await expect(details).toContainText('Keep boundaries clear.');
});
