<template>
  <div>
    <span
      v-for="(char, i) in chars"
      :key="i"
      :class="{
        ...char.class,
        hidden: (reversed ? (chars.length - i) : i) > appeared
      }"
      v-html="char.html"
    />
  </div>
</template>

<script>
export default {
  props: {
    /** @type {{html: string, class: string}[]} */
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
}
span {
  display: inline-block;
  transition: all .5s;
  &.hidden {
    transform: translateY(200%);
  }
  // HACK ogg font underline is not at the same height as hevetica
  &.underline.font-ogg-italic {
    transform: translateY(0.025em);
    &.hidden {
      transform: translateY(calc(200% + 0.025em));
    }
  }
}
</style>
