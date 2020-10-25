<template>
  <div class="Pictures">
    <img :src="`${$s}10.jpg`">
    <img :src="`${$s}3.jpg`">
    <div class="hold-to-enlarge" :style="{ left: `${left}px`, top: `${top}px` }">
      <span>h</span>
      <span>o</span>
      <span>l</span>
      <span>d</span>
      <span> </span>
      <span>t</span>
      <span>o</span>
      <span> </span>
      <span>e</span>
      <span>n</span>
      <span>l</span>
      <span>a</span>
      <span>r</span>
      <span>g</span>
      <span>e</span>
      <div/>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      left: 0,
      top: 0,
    };
  },
  mounted() {
    this.$el.addEventListener('mousemove', (evt) => {
      this.left = evt.clientX;
      this.top = evt.clientY;
    });
  },
};
</script>

<style lang="scss" scoped>
.Pictures {
  position: fixed;
  top: 0;
  right: 60%;
  bottom: 0;
  left: 0;
}
img {
  position: absolute;
  top: 50%;
  max-width: 80%;
  max-height: 80vh;
  animation-name: appear;
  animation-duration: 1s;
  animation-fill-mode: both;
  &:nth-child(1) {
    transform: translate(-50%, -50%) rotate(15deg);
    animation-delay: .5s;
  }
  &:nth-child(2) {
    transform: translate(-50%, -50%) rotate(-15deg);
    animation-delay: 0s;
  }
}
@keyframes appear {
  from {
    left: -50%;
  }
  to {
    left: 50%;
  }
}
.hold-to-enlarge {
  position: fixed;
  opacity: 0;
  text-transform: uppercase;
  pointer-events: none;
  animation: rotate 4s linear infinite;
  font-size: 15px;
  span {
    position: absolute;
    @for $i from 1 to 16 {
      &:nth-child(#{$i}) {
        transform: translate(-50%, -50%) rotate(#{20 * $i}deg) translateY(-35px);
      }
    }
  }
  div {
    position: absolute;
    width: 1em;
    height: 1em;
    background-color: var(--red);
    border-radius: 50%;
    transform: translate(-50%, -50%);
  }
}
@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-360deg);
  }
}
.Pictures:hover {
  cursor: none;
  .hold-to-enlarge {
    opacity: 1;
  }
}
</style>
