<template>
  <div>
    <img
      v-for="(picture, index) of pictures"
      :key="picture.src"
      :src="`${$s}${picture.src}`"
      :style="{
        left: `${(0.6 + 0.4 * picture.speed) * (50 * index - scrolled)}vw`,
        top: `${30 + 40 * picture.y}vh`,
      }"
    />
  </div>
</template>

<script>
import srcs from '../../content/home.json';

const pictures = srcs.map((src) => ({
  y: Math.random(),
  speed: Math.random(),
  src,
}));

export default {
  data() {
    return {
      pictures,
      scrolled: 0,
    };
  },
  mounted() {
    window.addEventListener('wheel', this.onWheel);
  },
  beforeDestroy() {
    window.removeEventListener('wheel', this.onwheel);
  },
  methods: {
    onWheel(evt) {
      this.scrolled += evt.deltaY;
    },
  },
};
</script>

<style lang="scss" scoped>
img {
  position: fixed;
  pointer-events: none;
  transition: all 0.5s;
  height: 45vh;
  transform: translate(-50%, -50%);
}
</style>
