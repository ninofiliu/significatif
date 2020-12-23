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
      v-for="({ src }, index) of [...pictures].reverse()"
      :key="src"
      :src="`${$s}${src}`"
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
  right: 10vw;
  bottom: 10vh;
  left: 35vw;
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
  img:nth-child(2n) {
    transform: rotate(5deg);
  }
  img:nth-child(2n+1) {
    transform: rotate(-5deg);
  }
  &:hover {
    cursor: pointer;
    img:nth-child(2n) {
      transform: rotate(8deg);
    }
    img:nth-child(2n+1) {
      transform: rotate(-8deg);
    }
  }
}
.--horizontal {
  img {
    object-position: right;
  }
  @for $i from 1 through 100 {
    img:nth-last-child(#{$i}) {
      transform: translate(-3% * ($i - 1));
    }
  }
  &:hover {
    cursor: pointer;
    @for $i from 1 through 100 {
      img:nth-last-child(#{$i}) {
        transform: translate(-5% * ($i - 1));
      }
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
