<template>
  <div
    class="pictures"
    :style="position"
    :class="{
      '--spread': mode === 'spread',
      '--hidden': mode === 'hidden',
      '--horizontal': mode === 'horizontal',
    }"
    @click="$emit('click')"
  >
    <img
      v-for="({ src }, index) of [...(mode === 'hidden' ? pictures : pictures.slice(0,2))].reverse()"
      :key="src"
      v-media="src"
      :class="{
        '--before': current > pictures.length - index - 1,
        '--after': current < pictures.length - index - 1,
      }"
    >
  </div>
</template>

<script>
export default {
  props: [
    'position',
    'mode',
    'pictures',
    'current',
  ],
};
</script>

<style lang="scss" scoped>
.pictures {
  position: fixed;
  top: 10vh;
  right: 25vw;
  bottom: 10vh;
  left: 25vw;
  transition: all .5s;
}
img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  position: absolute;
  transition: all .5s;
}
.--spread {
  img:nth-last-child(1) {
    transform: rotate(-5deg);
  }
  img:nth-last-child(2) {
    transform: rotate(5deg);
  }
  &:hover {
    cursor: pointer;
    img:nth-last-child(1) {
      transform: rotate(5deg);
    }
    img:nth-last-child(2) {
      transform: rotate(-5deg);
    }
  }
}
.--horizontal {
  img {
    object-position: right top;
  }
  img:nth-last-child(1) {
    transform: translate(-5vw)
  }
  &:hover {
    cursor: pointer;
    img:nth-last-child(1) {
      transform: translate(-10vw)
    }
    img:nth-last-child(2) {
      transform: translate(-3vw)
    }
  }
}
.--hidden {
  img.--before {
    transform: translateX(-100vw);
  }
  img.--after {
    transform: translateX(100vw);
  }
}
</style>
