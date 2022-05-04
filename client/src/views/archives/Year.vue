<template>
  <svg width="240" height="110">
    <text x="120" y="60" text-anchor="middle" dominant-baseline="middle">
      {{ year }}
    </text>
    <path :d="path0D" />
    <path v-if="progress > 0.5" :d="path1D" />
  </svg>
</template>

<script>
export default {
  props: {
    year: {
      required: true,
      type: Number,
    },
    current: {
      required: true,
      type: Boolean,
    },
  },
  data() {
    return {
      progress: 0,
      isDestroyed: false,
    };
  },
  created() {
    const update = () => {
      if (this.isDestroyed) return;
      if (this.current && this.progress < 1 && this.progress + 1 / 50 >= 1)
        this.$emit("done");
      if (this.current && this.progress < 1) this.progress += 1 / 50;
      if (!this.current && this.progress > 0) this.progress -= 1 / 50;
      requestAnimationFrame(update);
    };
    update();
  },
  destroyed() {
    this.isDestroyed = true;
  },
  computed: {
    easedProgress() {
      return this.progress < 0.5
        ? 0.5 * (2 * this.progress) ** 4
        : 1 - 0.5 * (2 * (1 - this.progress)) ** 4;
    },
    endX() {
      return 120 + 115 * Math.sin(2 * Math.PI * this.easedProgress);
    },
    endY() {
      return 55 - 50 * Math.cos(2 * Math.PI * this.easedProgress);
    },
    path0D() {
      return this.easedProgress < 0.5
        ? `M 120 5 A 115 50 0 0 1 ${this.endX} ${this.endY}`
        : "M 120 5 A 115 50 0 0 1 120 105";
    },
    path1D() {
      return `M 120 105 A 115 50 0 0 1 ${this.endX} ${this.endY}`;
    },
  },
};
</script>

<style lang="scss" scoped>
svg {
  display: block;
  margin: auto;
  &:hover {
    cursor: pointer;
  }
}
text {
  font-size: 65px;
  fill: var(--red);
  font-weight: 300;
}
path {
  stroke: var(--red);
  stroke-width: 2;
  fill: none;
}
</style>
