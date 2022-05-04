<template>
  <div class="PicturesSnake">
    <img
      v-for="image of images"
      :key="image.key"
      :src="$s + image.src.replace(/\.[^.]*$/, ($0) => `.small${$0}`)"
      :style="{
        left: `${image.left}px`,
        top: `${image.top}px`,
        opacity: image.opacity,
      }"
    />
  </div>
</template>

<script>
import homeContent from "../../content/home.json";

export default {
  data() {
    return {
      images: [],
      step: 0,
    };
  },
  methods: {
    onMouseMove(evt) {
      if (this.step % 5 === 0) {
        const index = this.images.length;
        this.images.push({
          src: homeContent[index % homeContent.length],
          left: evt.clientX,
          top: evt.offsetY,
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
    this.$el.addEventListener("mousemove", this.onMouseMove);
  },
  beforeDestroy() {
    this.$el.removeEventListener("mousemove", this.onMouseMove);
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
  transform: translate(-50%, -50%) scale(1.5);
  position: fixed;
  transition: all 1s;
  pointer-events: none;
  max-width: 250px;
  max-height: 250px;
}
</style>
