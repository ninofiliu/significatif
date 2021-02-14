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
    object-position: right;
  }
  @for $i from 1 through 100 {
    img:nth-last-child(#{$i}) {
      transform: translate(-10% * (1/$i));
    }
  }
  &:hover {
    cursor: pointer;
    @for $i from 1 through 100 {
      img:nth-last-child(#{$i}) {
        transform: translate(-20% * (1/$i));
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
