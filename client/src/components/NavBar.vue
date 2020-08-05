<template>
  <div class="NavBar">
    <router-link to="/">
      significa.tif
    </router-link>
    <div>
      <router-link to="/photo">photo</router-link>
      <router-link to="/video">video</router-link>
      <router-link to="/manifesto">manifesto</router-link>
      <router-link to="/about">about</router-link>
      <a href="#" class="close">&Cross;</a>
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
}
.router-link-exact-active {
  color: var(--white);
  text-shadow:
    1px 1px 0 var(--red),
    1px -1px 0 var(--red),
    -1px 1px 0 var(--red),
    -1px -1px 0 var(--red),
  ;
}
</style>>
