const VISITOR_TIMESTAMP_KEY = 'portfolio:lastVisit';
const VISITOR_EXPIRY_MS = 24 * 60 * 60 * 1000; // 24 hours

export function isNewVisitor(): boolean {
  if (typeof window === 'undefined') {
    return false;
  }

  try {
    const lastVisit = localStorage.getItem(VISITOR_TIMESTAMP_KEY);
    if (!lastVisit) {
      return true;
    }

    const lastVisitTimestamp = Number(lastVisit);
    if (!Number.isFinite(lastVisitTimestamp) || lastVisitTimestamp <= 0) {
      return true;
    }

    return Date.now() - lastVisitTimestamp >= VISITOR_EXPIRY_MS;
  } catch (error) {
    console.error('[Visitor] Unable to read visit timestamp:', error instanceof Error ? error.message : error);
    return true;
  }
}

export function markVisit(): void {
  if (typeof window === 'undefined') {
    return;
  }

  try {
    localStorage.setItem(VISITOR_TIMESTAMP_KEY, Date.now().toString());
  } catch (error) {
    console.error('[Visitor] Unable to save visit timestamp:', error instanceof Error ? error.message : error);
  }
}
