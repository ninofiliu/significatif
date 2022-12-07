<template>
  <div class="outer" ref="outer">
    <div class="inner">
      <img
        v-for="picture of pictures"
        :key="picture.src"
        v-media="picture.src"
        :style="{
          left: `${25 + 25 * picture.x}%`,
          top: `${50 * picture.y}%`,
        }"
      />
      <img
        v-for="picture of pictures"
        :key="picture.src"
        v-media="picture.src"
        :style="{
          left: `${25 + 25 * picture.x}%`,
          top: `${50 + 50 * picture.y}%`,
        }"
      />
    </div>
  </div>
</template>

<script>
import srcs from "../../content/home.json";

const pictures = srcs.map((src, i) => ({
  src,
  x: Math.random(),
  y: (i + Math.random()) / srcs.length,
}));

export default {
  data() {
    return {
      pictures,
    };
  },
  mounted() {
    const { outer } = this.$refs;
    outer.addEventListener("scroll", this.onScroll);
    console.log(outer.scrollTop, (outer.scrollHeight - window.innerHeight) / 2);
    outer.scrollTop = (outer.scrollHeight - window.innerHeight) / 2;
    console.log(outer.scrollTop);
  },
  beforeDestroy() {
    this.$refts.outer.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    onScroll() {
      const { outer } = this.$refs;
      if (outer.scrollTop / (outer.scrollHeight - window.innerHeight) < 0.25) {
        outer.scrollTop = outer.scrollTop + 0.5 * outer.scrollHeight;
      }
      if (outer.scrollTop / (outer.scrollHeight - window.innerHeight) > 0.75) {
        outer.scrollTop = outer.scrollTop - 0.5 * outer.scrollHeight;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.outer {
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
}
.inner {
  width: 100vh;
  height: 5000vh;
  position: relative;
}
img {
  position: absolute;
  pointer-events: none;
  height: 45vh;
  transform: translate(-50%, -50%);
  max-height: 50vh;
  max-width: 50vw;
  object-fit: contain;
}
</style>
