/* eslint-disable no-param-reassign */
import Vue from 'vue';

Vue.directive('media', {
  inserted(el, { value }) {
    const src = STATIC_BASE + value;
    const smallSrc = src.replace(/\.[^.]*$/, ($0) => `.small${$0}`);
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
  },
});
