<template>
  <svg width="240" height="110">
    <text x="120" y="55" text-anchor="middle" dominant-baseline="middle">
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
      interval: setInterval(() => {
        if (this.current && this.progress < 1) this.progress += 1 / 32;
        if (!this.current && this.progress > 0) this.progress -= 1 / 32;
      }, 1000 / 30),
    };
  },
  computed: {
    endX() {
      return 120 + 115 * Math.sin(2 * Math.PI * this.progress);
    },
    endY() {
      return 55 - 50 * Math.cos(2 * Math.PI * this.progress);
    },
    path0D() {
      return this.progress < 0.5
        ? `M 120 5 A 115 50 0 0 1 ${this.endX} ${this.endY}`
        : 'M 120 5 A 115 50 0 0 1 120 105';
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
  font-size: 70px;
  fill: var(--red);
  font-weight: 300;
}
path {
  stroke: var(--red);
  stroke-width: 2;
  fill: none;
}
</style>
