
import { STATIC_BASE } from './globals';
export default {
  created(el: HTMLImageElement, { value }: {value: string}) {
    const src = STATIC_BASE + value;
    const smallSrc = src.replace(/\.[^.]*$/, ($0) => `.small${$0}`);
    el.loading = 'lazy';
    el.src = smallSrc;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      const img = new Image();
      img.src = src;
      img.addEventListener('load', () => {
        el.src = src;
      });
      observer.unobserve(el);
    });
    observer.observe(el);
  }
}
