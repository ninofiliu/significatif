<template>
  <div>
    <NavBar/>
    <div class="scroll">
      <div class="scroll-content">
        <img src="https://placekitten.com/300/370">
        <img src="https://placekitten.com/300/370">
        <img src="https://placekitten.com/300/370">
        <img src="https://placekitten.com/300/370">
        <img src="https://placekitten.com/300/370">
        <img src="https://placekitten.com/300/370">
      </div>
    </div>
    <div class="center">
      <div>
        <span class="font-ogg-roman">S</span>ignifica.<span class="font-ogg-italic">tif</span>
        by
      </div>
      <div>
        <u>V<span class="font-ogg-italic">i</span>ctor</u>
        R<span class="font-ogg-italic">o</span>ger
      </div>
    </div>
    <div class="footer">
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
  </div>
</template>

<script>
import NavBar from '../../components/NavBar.vue';

export default {
  components: {
    NavBar,
  },
};
</script>

<style lang="scss" scoped>
.scroll {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  overflow-x: auto;
}
.scroll-content {
  height: 80vh;
  display: flex;
  img {
    margin: 0 32px;
    &:nth-child(2n) {
      align-self: center;
    }
    &:nth-child(4n+1) {
      align-self: flex-end;
    }
    &:nth-child(4n+3) {
      align-self: flex-start;
    }
  }
}
.center {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-size: 70px;
  font-weight: 300;

  pointer-events: none;
}
.footer {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;

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
