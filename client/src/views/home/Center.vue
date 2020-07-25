<template>
  <div class="center">
    <div>
      <span
        v-for="(char, i) in line0"
        :key="i"
        :class="{ ...char.class, hidden: i > appeared }"
        v-html="char.letter"
      />
    </div>
    <div>
      <span
        v-for="(char, i) in line1"
        :key="i"
        :class="{ ...char.class, hidden: (15 - i) > appeared }"
        v-html="char.letter"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      line0: [
        { letter: 'S', class: { 'font-ogg-roman': true } },
        { letter: 'i', class: {} },
        { letter: 'g', class: {} },
        { letter: 'n', class: {} },
        { letter: 'i', class: {} },
        { letter: 'f', class: {} },
        { letter: 'i', class: {} },
        { letter: 'c', class: {} },
        { letter: 'a', class: {} },
        { letter: '.', class: {} },
        { letter: 't', class: { 'font-ogg-italic': true } },
        { letter: 'i', class: { 'font-ogg-italic': true } },
        { letter: 'f', class: { 'font-ogg-italic': true } },
        { letter: '&nbsp;', class: {} },
        { letter: 'b', class: {} },
        { letter: 'y', class: {} },
      ],
      line1: [
        { letter: 'V', class: { underline: true } },
        { letter: 'i', class: { underline: true, 'font-ogg-italic': true } },
        { letter: 'c', class: { underline: true } },
        { letter: 't', class: { underline: true } },
        { letter: 'o', class: { underline: true } },
        { letter: 'r', class: { underline: true } },
        { letter: '&nbsp;', class: {} },
        { letter: 'R', class: {} },
        { letter: 'o', class: { 'font-ogg-italic': true } },
        { letter: 'g', class: {} },
        { letter: 'e', class: {} },
        { letter: 'r', class: {} },
      ],
      appeared: -1,
      interval: null,
    };
  },
  mounted() {
    this.interval = setInterval(() => {
      this.appeared++;
      if (this.appeared === 15) clearInterval(this.interval);
    }, 50);
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
};
</script>

<style lang="scss" scoped>
.center {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-size: 70px;
  font-weight: 300;

  pointer-events: none;
}
div {
  overflow-y: hidden;
}
span {
  display: inline-block;
  transition: all .5s;
  &.hidden {
    transform: translateY(100%);
  }
}
</style>
