<template>
  <div class="outer" ref="outer">
    <div class="inner">
      <template v-for="d in [0, 50]">
        <img
          v-for="picture of pictures"
          :key="picture.src + d"
          :src="picture.src"
          loading="lazy"
          :style="{
            [isPortrait ? 'left' : 'top']: `${50 * picture.u}%`,
            [isPortrait ? 'top' : 'left']: `${d + 50 * picture.v}%`,
          }"
        />
      </template>
    </div>
  </div>
</template>

<script>
import srcs from "../../content/home.json";
import { STATIC_BASE } from "../../globals";

const pictures = srcs.map((src, i) => ({
  src: STATIC_BASE + src,
  u: Math.random(),
  v: (i + Math.random()) / srcs.length,
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
    if (this.isPortrait) {
      outer.scrollTop = (outer.scrollHeight - window.innerHeight) / 2;
    } else {
      outer.scrollLeft = (outer.scrollWidth - window.innerWidth) / 2;
    }
  },
  beforeDestroy() {
    this.$refts.outer.removeEventListener("scroll", this.onScroll);
  },
  computed: {
    isPortrait() {
      return window.innerWidth / window.innerHeight < 1;
    },
  },
  methods: {
    onScroll() {
      const { outer } = this.$refs;
      if (this.isPortrait) {
        if (
          outer.scrollTop / (outer.scrollHeight - window.innerHeight) <
          0.25
        ) {
          outer.scrollTop = outer.scrollTop + 0.5 * outer.scrollHeight;
        }
        if (
          outer.scrollTop / (outer.scrollHeight - window.innerHeight) >
          0.75
        ) {
          outer.scrollTop = outer.scrollTop - 0.5 * outer.scrollHeight;
        }
      } else {
        if (outer.scrollLeft / (outer.scrollWidth - window.innerWidth) < 0.25) {
          outer.scrollLeft = outer.scrollLeft + 0.5 * outer.scrollWidth;
        }
        if (outer.scrollLeft / (outer.scrollWidth - window.innerWidth) > 0.75) {
          outer.scrollLeft = outer.scrollLeft - 0.5 * outer.scrollWidth;
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.outer {
  width: 100vw;
  height: 100vh;
}
.inner {
  position: relative;
}
img {
  position: absolute;
  pointer-events: none;
  width: 50vw;
  height: 50vh;
  object-fit: contain;
}

.outer {
  overflow-y: hidden;
  overflow-x: scroll;
}
.inner {
  height: 100vh;
  width: 5000vh;
}
@media (max-aspect-ratio: 1/1) {
  .outer {
    overflow-x: hidden;
    overflow-y: scroll;
  }
  .inner {
    width: 100vh;
    height: 5000vh;
  }
}
</style>
