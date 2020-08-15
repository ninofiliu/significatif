<template>
  <svg width="240" height="110" :class="{ '--current': current }">
    <text x="120" y="55" text-anchor="middle" dominant-baseline="middle">
      {{ year }}
    </text>
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
</style>
