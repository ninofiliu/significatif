<template>
  <div class="Footer">
    <router-link to="/archives">
      archives
    </router-link>
    <a href="https://www.instagram.com/victorair_/" target="_blank" rel="noreferrer noopener">
      instagram
    </a>
    <div>
      48°47'45.3"N 1°36'09.9"E
    </div>
  </div>
</template>

<style lang="scss" scoped>
.Footer {
  padding: 36px 0;
  display: flex;

  font-size: 24px;
  text-transform: uppercase;
  text-align: center;

  > * {
    flex-basis: 0;
    flex-grow: 1;
  }
}
</style>
