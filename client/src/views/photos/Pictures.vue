<template>
  <div class="Pictures">
    <img src="//placekitten.com/300/460">
    <img src="//placekitten.com/300/461">
  </div>
</template>

<style lang="scss" scoped>
.Pictures {
  position: fixed;
  top: 0;
  right: 60%;
  bottom: 0;
  left: 0;
  position: relative;
}
img {
  left: 50%;
  right: 50%;
  transform: translate(-50%, -50%) rotate(-20deg);
}
</style>
