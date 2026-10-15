// Simple in-memory rate limiter (CLAUDE.md §9: rate-limit contact, newsletter and auth).
//
// It counts attempts per key (usually the visitor's IP) inside a sliding time window.
// Good enough for one server process, which is how the site runs under PM2.
// If we ever run several processes, move this into PostgreSQL so they share counts.
//
// Privacy: the Privacy Policy promises IP addresses are kept only for a few minutes.
// Expired entries are swept out at least once per window, so nothing lingers longer
// than about two windows. Keep it that way if you change this file.

const hits = new Map<string, number[]>();
let lastSweep = 0;

function sweep(now: number, windowMs: number) {
  for (const [key, times] of hits) {
    if (times.every((t) => now - t >= windowMs)) hits.delete(key);
  }
  lastSweep = now;
}

export function rateLimit(key: string, limit: number, windowMs: number): { ok: boolean } {
  const now = Date.now();
  if (now - lastSweep >= windowMs) sweep(now, windowMs);

  // Keep only the attempts still inside the window
  const recent = (hits.get(key) ?? []).filter((t) => now - t < windowMs);

  if (recent.length >= limit) {
    hits.set(key, recent);
    return { ok: false };
  }

  recent.push(now);
  hits.set(key, recent);
  return { ok: true };
}
