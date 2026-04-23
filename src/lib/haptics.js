// Subtle haptic micro-feedback. No-op where unsupported (desktop).
// Durations intentionally small (6–20ms) so feedback is felt, not heard.
export const haptic = (ms = 8) => {
  if (typeof navigator !== 'undefined' && navigator.vibrate) {
    try { navigator.vibrate(ms); } catch {}
  }
};
