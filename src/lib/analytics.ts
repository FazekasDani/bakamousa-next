type SearchParamLike = { toString(): string } | null | undefined;

export type AnalyticsValue = string | number | boolean;
export type AnalyticsPayload = Record<string, AnalyticsValue | undefined>;

const PAGE_TYPE_PATTERNS = [
  { pattern: /^\/$/, type: "home" },
  { pattern: /^\/about(?:\/|$)/, type: "about" },
  { pattern: /^\/blog(?:\/|$)/, type: "blog" },
  { pattern: /^\/contact(?:\/|$)/, type: "contact" },
  { pattern: /^\/in-house-teams(?:\/|$)/, type: "in_house_teams" },
  { pattern: /^\/science(?:\/|$)/, type: "science" },
  { pattern: /^\/solutions(?:\/|$)/, type: "solutions" },
  { pattern: /^\/technology(?:\/|$)/, type: "technology" },
];

export function buildPagePath(pathname: string, searchParams: SearchParamLike): string {
  const search = searchParams?.toString();
  return search ? `${pathname}?${search}` : pathname;
}

export function getPageType(pathname: string): string {
  const matchedPage = PAGE_TYPE_PATTERNS.find(({ pattern }) => pattern.test(pathname));
  return matchedPage?.type ?? "site_page";
}

export function pushDataLayerEvent(
  eventName: string,
  payload: AnalyticsPayload = {}
): void {
  if (typeof window === "undefined") {
    return;
  }

  const analyticsWindow = window as Window & {
    dataLayer?: Array<Record<string, unknown>>;
  };

  const cleanPayload = Object.fromEntries(
    Object.entries(payload).filter(([, value]) => value !== undefined && value !== "")
  ) as Record<string, AnalyticsValue>;

  analyticsWindow.dataLayer = analyticsWindow.dataLayer || [];
  analyticsWindow.dataLayer.push({ event: eventName, ...cleanPayload });
}

export function throttle<T extends (...args: never[]) => void>(
  callback: T,
  waitMs: number
): T {
  let lastRunAt = 0;

  return ((...args: Parameters<T>) => {
    const now = Date.now();
    if (now - lastRunAt < waitMs) {
      return;
    }

    lastRunAt = now;
    callback(...args);
  }) as T;
}

export function getAnalyticsPayloadFromDataset(element: HTMLElement): Record<string, string> {
  return Object.entries(element.dataset).reduce<Record<string, string>>((payload, [key, value]) => {
    if (!value || !key.startsWith("analytics") || key === "analyticsEvent") {
      return payload;
    }

    const payloadKey = datasetKeyToPayloadKey(key);
    payload[payloadKey] = value;
    return payload;
  }, {});
}

function datasetKeyToPayloadKey(key: string): string {
  const strippedKey = key.replace(/^analytics/, "");
  const normalizedKey = strippedKey.charAt(0).toLowerCase() + strippedKey.slice(1);

  return normalizedKey.replace(/[A-Z]/g, (character) => `_${character.toLowerCase()}`);
}