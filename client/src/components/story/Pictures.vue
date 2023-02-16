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
      v-for="(picture, index) of [...pictures].reverse()"
      :key="picture.src"
      loading="lazy"
      :src="picture.src"
      :class="{
        '--before': current > pictures.length - index,
        '--just-before': current === pictures.length - index,
        '--just-after': current === pictures.length - index - 2,
        '--after': current < pictures.length - index - 2,
      }"
      @click.stop="$emit('click', index)"
    />
  </div>
</template>

<script>
export default {
  props: ["position", "mode", "pictures", "current"],
};
</script>

<style lang="scss" scoped>
.pictures {
  position: fixed;
  top: 10vh;
  right: 25vw;
  bottom: 10vh;
  left: 25vw;
  transition: all 0.5s;
}
img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  position: absolute;
  transition: all 0.5s;
}
.--hidden {
  img.--before {
    display: none;
  }
  img.--just-before {
    transform: translateX(-100vw);
  }
  img.--just-after {
    transform: translateX(100vw);
  }
  img.--after {
    display: none;
  }
}

@media screen and (min-width: 900px) {
  .--spread {
    img:nth-last-child(1) {
      transform: rotate(-5deg);
    }
    img:nth-last-child(2) {
      transform: rotate(5deg);
    }
    img:nth-last-child(1n + 3) {
      display: none;
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
      transform: translate(-5vw);
    }
    img:nth-last-child(1n + 3) {
      display: none;
    }
    &:hover {
      cursor: pointer;
      img:nth-last-child(1) {
        transform: translate(-10vw);
      }
      img:nth-last-child(2) {
        transform: translate(-3vw);
      }
    }
  }
}

@media (max-aspect-ratio: 1/1) {
  .--hidden {
    inset: 6vh 5vw;
  }
  .pictures:not(.--hidden) {
    inset: 45vh 5vw 10vh 50vw !important;
    overflow-y: scroll;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
    img {
      height: initial;
      position: initial;
    }
  }
}
</style>
