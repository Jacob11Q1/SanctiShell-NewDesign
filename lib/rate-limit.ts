// Simple in-memory rate limiter (CLAUDE.md §9: rate-limit contact, newsletter and auth).
//
// It counts attempts per key (usually the visitor's IP) inside a sliding time window.
// Good enough for one server process, which is how the site runs under PM2.
// If we ever run several processes, move this into PostgreSQL so they share counts.

const hits = new Map<string, number[]>();

export function rateLimit(key: string, limit: number, windowMs: number): { ok: boolean } {
  const now = Date.now();
  // Keep only the attempts still inside the window
  const recent = (hits.get(key) ?? []).filter((t) => now - t < windowMs);

  if (recent.length >= limit) {
    hits.set(key, recent);
    return { ok: false };
  }

  recent.push(now);
  hits.set(key, recent);

  // Occasionally drop keys that have gone quiet, so the map can't grow forever
  if (hits.size > 5000) {
    for (const [k, times] of hits) {
      if (times.every((t) => now - t >= windowMs)) hits.delete(k);
    }
  }

  return { ok: true };
}
