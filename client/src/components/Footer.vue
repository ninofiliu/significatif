<template>
  <div class="Footer" :class="{ '--fixed': fixed }">
    <RouterLink to="/archives">
      archives
    </RouterLink>
    <a href="https://www.instagram.com/victorair_/" target="_blank" rel="noreferrer noopener">
      instagram
    </a>
    <div>
      48°47'45.3"N 1°36'09.9"E
    </div>
  </div>
</template>

<script>
export default {
  props: {
    fixed: {
      default: false,
      type: Boolean,
    },
  },
};
</script>

<style lang="scss" scoped>
.Footer {
  padding: 36px 0;
  display: flex;

  font-size: 20px;
  text-transform: uppercase;
  text-align: center;

  > * {
    flex-basis: 0;
    flex-grow: 1;
  }

  &.--fixed {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
  }
}
.RouterLink-exact-active {
  color: var(--white);
  text-shadow:
    1px 1px 0 var(--red),
    1px -1px 0 var(--red),
    -1px 1px 0 var(--red),
    -1px -1px 0 var(--red),
  ;
}
</style>
