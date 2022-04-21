<template>
  <div>
    <span
      v-for="(char, i) in chars"
      :key="i"
      :class="{
        ...char.class,
        underline: char.underline,
        hidden: (reversed ? (chars.length - i) : i) > appeared
      }"
      v-html="char.html"
    />
  </div>
</template>

<script>
export default {
  props: {
    chars: {
      required: true,
      type: Array,
    },
    start: {
      default: -1,
      type: Number,
    },
    reversed: {
      default: false,
      type: Boolean,
    },
  },
  data() {
    return {
      appeared: this.start,
      interval: null,
    };
  },
  mounted() {
    this.interval = setInterval(() => {
      this.appeared++;
      if (this.appeared > this.chars.length) {
        clearInterval(this.interval);
      }
    }, 50);
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
};
</script>

<style lang="scss" scoped>
div {
  overflow-y: hidden;
  display: flex;
  align-items: baseline;
}
span {
  position: relative;
  display: inline-block;
  transition: all .5s;
  vertical-align: top;
  &.hidden {
    transform: translateY(200%);
  }
  &.underline::before {
    content: '';
    position: absolute;
    width: 100%;
    height: .04em;
    top: 1.1em;
    background-color: var(--red);
    vertical-align: top;
  }
}
</style>
