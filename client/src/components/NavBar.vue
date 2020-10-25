<template>
  <div class="NavBar" :style="{ 'background-color': `rgba(255, 255, 255, ${$features.navBarOpacity}` }">
    <RouterLink to="/">
      significa.tif
    </RouterLink>
    <div>
      <RouterLink to="/photos">photos</RouterLink>
      <RouterLink to="/video">video</RouterLink>
      <RouterLink to="/manifesto">manifesto</RouterLink>
      <RouterLink to="/about">about</RouterLink>
      <RouterLink to="/" class="close">
        <span/>
        <span/>
      </RouterLink>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
.NavBar {
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  border-bottom: 1px solid var(--red);
  padding: 22px 36px;
  display: flex;
  justify-content: space-between;

  font-size: 1rem;
  text-transform: uppercase;
}
a {
  vertical-align: middle;
  margin: 0 16px;
  &:hover {
    opacity: .5;
  }
}
.router-link-exact-active:not(.close) {
  text-decoration: underline;
}
.close {
  width: 25px;
  height: 25px;
  position: relative;
  display: inline-block;
  span {
    height: 1px;
    position: absolute;
    background-color: var(--red);
  }
  span:nth-child(1) {
    width: 30px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
  }
  span:nth-child(2) {
    width: 30px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) rotate(-45deg);
  }
}
</style>>
