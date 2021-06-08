<template>
  <div>
    <div class="navbar --desktop">
      <RouterLink to="/">
        significa.tif
      </RouterLink>
      <div>
        <RouterLink to="/photos">photos</RouterLink>
        <RouterLink to="/manifesto">manifesto</RouterLink>
        <RouterLink to="/contact">contact</RouterLink>
      </div>
    </div>
    <div class="navbar --mobile">
      <RouterLink to="/">significa.tif</RouterLink>
      <button @click="closed = !closed">☰</button>
      <div class="menu" :class="{ '--closed': closed }">
        <RouterLink to="/photos">photos</RouterLink>
        <RouterLink to="/manifesto">manifesto</RouterLink>
        <RouterLink to="/contact">contact</RouterLink>
        <RouterLink to="/archives">archives</RouterLink>
        <a href="https://www.instagram.com/significa.tif/" target="_blank" rel="noreferrer noopener">instagram</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      closed: true,
    };
  },
};
</script>

<style lang="scss" scoped>
.navbar {
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

.--desktop {
  > div a {
    margin-left: 2rem;
  }
}
.--mobile {
  display: none;
}
@media screen and (max-width: 900px) {
  .--desktop {
    display: none;
  }
  .--mobile {
    display: flex;
  }
  button {
    border: none;
    color: inherit;
    font: inherit;
    width: 5vw;
    padding: 0;
  }
  .menu {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0vw;
    right: 15vw;
    background: var(--red);
    color: white;
    display: flex;
    flex-direction: column;
    transition: all .5s;
    font-size: 2.5rem;
    &.--closed {
      transform: translateX(-100%);
    }
    a {
      display: flex;
      align-items: center;
      padding: 5vw 0 0 5vw;
    }
  }
}
</style>>
