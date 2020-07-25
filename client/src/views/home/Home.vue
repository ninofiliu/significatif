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
    <Center/>
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
import Center from './Center.vue';

export default {
  components: {
    Center,
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
    filter: brightness(.5);
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
