<template>
  <div class="NavBar">
    <RouterLink to="/">
      significa.tif
    </RouterLink>
    <div>
      <RouterLink to="/photos">photos</RouterLink>
      <RouterLink to="/manifesto">manifesto</RouterLink>
      <RouterLink to="/contact">contact</RouterLink>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.NavBar {
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  border-bottom: 1px solid var(--red);
  padding: 0 5vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3rem;

  font-size: 1rem;
  text-transform: uppercase;
  > div a {
    margin-left: 2rem;
  }
}
a {
  vertical-align: middle;
  &:hover {
    opacity: .5;
  }
}
.router-link-exact-active:not(.close) {
  text-decoration: underline;
}
</style>>
