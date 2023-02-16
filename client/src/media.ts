import { STATIC_BASE } from "./globals";
export default {
  created(el: HTMLImageElement, { value }: { value: string }) {
    const src = STATIC_BASE + value;
    el.loading = "lazy";
    el.src = src;
  },
};
