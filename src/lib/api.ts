export interface ApiError {
  ok: false;
  status: number;
  message: string;
}

export type ApiResult<T> = { ok: true; data: T } | ApiError;

/**
 * Fetch JSON from an API route. Never throws.
 * On failure returns { ok: false } so callers can degrade to static content.
 */
export async function fetchJson<T>(url: string): Promise<ApiResult<T>> {
  try {
    const res = await fetch(url, { headers: { Accept: 'application/json' } });
    if (!res.ok) {
      return { ok: false, status: res.status, message: `HTTP ${res.status}` };
    }
    const data = (await res.json()) as T;
    return { ok: true, data };
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Network error';
    return { ok: false, status: 0, message };
  }
}