<template>
  <div :class="$store.state.cover"/>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
div {
  z-index: 200;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: var(--orange);
  transition: all .5s;
}
.left {
  right: 100vw;
}
.right {
  left: 100vw;
}
</style>
