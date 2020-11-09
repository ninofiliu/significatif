<template>
  <div class="NavBar">
    <RouterLink to="/">
      significa.tif
    </RouterLink>
    <div>
      <RouterLink to="/photos">photos</RouterLink>
      <RouterLink to="/video">video</RouterLink>
      <RouterLink to="/manifesto">manifesto</RouterLink>
      <RouterLink to="/contact">contact</RouterLink>
      <RouterLink to="/" class="close">
        <span/>
        <span/>
      </RouterLink>
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

  background-color: var(--white);
  border-bottom: 1px solid var(--red);
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3rem;

  font-size: 1rem;
  text-transform: uppercase;
}
a {
  vertical-align: middle;
  margin: 0 1rem;
  &:hover {
    opacity: .5;
  }
}
.router-link-exact-active:not(.close) {
  text-decoration: underline;
}
.close {
  width: 1rem;
  height: 1rem;
  position: relative;
  display: inline-block;
  span {
    height: 1px;
    position: absolute;
    background-color: var(--red);
  }
  span:nth-child(1) {
    width: 1.3rem;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
  }
  span:nth-child(2) {
    width: 1.3rem;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) rotate(-45deg);
  }
}
</style>>
