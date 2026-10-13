export interface UrlState {
  tag: string;
  node: string;
}

export function parseUrlState(search: string): UrlState {
  const params = new URLSearchParams(search);
  return { tag: params.get('tag') ?? '', node: params.get('node') ?? '' };
}

// Returns path + query + hash with `tag`/`node` set (or removed when empty); other params are kept.
export function buildUrl(href: string, state: Partial<UrlState>): string {
  const url = new URL(href, 'http://localhost');
  for (const key of ['tag', 'node'] as const) {
    const value = state[key];
    if (value === undefined) continue;
    if (value) url.searchParams.set(key, value);
    else url.searchParams.delete(key);
  }
  return `${url.pathname}${url.search}${url.hash}`;
}

// Invalid values fall back to the default (no filter / no selection).
export function resolveUrlState(
  state: UrlState,
  knownTags: string[],
  visibleNodeIds: (tag: string) => string[]
): UrlState {
  const tag = state.tag && knownTags.includes(state.tag) ? state.tag : '';
  const node = state.node && visibleNodeIds(tag).includes(state.node) ? state.node : '';
  return { tag, node };
}

export function writeUrlState(state: Partial<UrlState>, mode: 'push' | 'replace' = 'push') {
  const next = buildUrl(window.location.href, state);
  const current = `${window.location.pathname}${window.location.search}${window.location.hash}`;
  if (next === current) return;
  if (mode === 'push') window.history.pushState({}, '', next);
  else window.history.replaceState({}, '', next);
}
