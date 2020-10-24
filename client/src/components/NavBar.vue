<template>
  <div class="NavBar">
    <RouterLink to="/">
      significa.tif
    </RouterLink>
    <div>
      <RouterLink to="/photos">photos</RouterLink>
      <RouterLink to="/video">video</RouterLink>
      <RouterLink to="/manifesto">manifesto</RouterLink>
      <RouterLink to="/about">about</RouterLink>
      <RouterLink to="/" class="close">&Cross;</RouterLink>
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

  font-size: 20px;
  text-transform: uppercase;
}
a {
  margin: 0 16px;
  &:hover {
    opacity: .5;
  }
}
.router-link-exact-active:not(.close) {
  text-decoration: underline;
}
</style>>
