/* eslint-disable @typescript-eslint/no-explicit-any */
interface Window {
  gtag: (...args: any[]) => void;
  dataLayer: Record<string, any>[];
}
