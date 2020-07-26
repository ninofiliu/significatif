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
    <div class="footer-container">
      <Footer/>
    </div>
  </div>
</template>

<script>
import NavBar from '../../components/NavBar.vue';
import Center from './Center.vue';
import Footer from '../../components/Footer.vue';

export default {
  components: {
    Center,
    Footer,
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
.footer-container {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
