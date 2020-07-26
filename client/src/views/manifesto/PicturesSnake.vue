<template>
  <div class="PicturesSnake">
    <img
      v-for="image of images"
      :key="image.key"
      :src="image.src"
      :style="{
        left: `${image.left}px`,
        top: `${image.top}px`,
        opacity: image.opacity
      }"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [],
      step: 0,
    };
  },
  methods: {
    onMouseMove(evt) {
      const srcs = [
        'https://placekitten.com/200/300',
        'https://placekitten.com/200/301',
        'https://placekitten.com/200/302',
        'https://placekitten.com/200/303',
        'https://placekitten.com/200/304',
        'https://placekitten.com/200/305',
      ];
      if (this.step % 5 === 0) {
        const index = this.images.length;
        this.images.push({
          src: srcs[index % srcs.length],
          left: evt.clientX,
          top: evt.clientY,
          key: this.step,
          opacity: 1,
        });
        setTimeout(() => {
          this.images[index].opacity = 0;
        }, 200);
      }
      this.step++;
    },
  },
  mounted() {
    this.$el.addEventListener('mousemove', this.onMouseMove);
  },
  beforeDestroy() {
    this.$el.removeEventListener('mousemove', this.onMouseMove);
  },
};
</script>

<style lang="scss" scoped>
.PicturesSnake {
  width: 100%;
  height: 100vh;
  position: absolute;
}
img {
  transform: translate(-50%, -50%);
  position: fixed;
  transition: all 1s;
  pointer-events: none;
}
</style>
