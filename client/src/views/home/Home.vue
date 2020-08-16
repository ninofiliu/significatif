<template>
  <div>
    <NavBar/>
    <div class="scroll">
      <div class="scroll-content">
        <div class="img-container"><img :src="`${$s}18.jpg`"></div>
        <div class="img-container"><img :src="`${$s}14.jpg`"></div>
        <div class="img-container"><img :src="`${$s}12.jpg`"></div>
        <div class="img-container"><img :src="`${$s}7.jpg`"></div>
        <div class="img-container"><img :src="`${$s}1.jpg`"></div>
        <div class="img-container"><img :src="`${$s}2.jpg`"></div>
        <div class="img-container"><img :src="`${$s}6.jpg`"></div>
        <div class="img-container"><img :src="`${$s}13.jpg`"></div>
        <div class="img-container"><img :src="`${$s}11.jpg`"></div>
      </div>
    </div>
    <Center/>
    <Footer fixed/>
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
  overflow-x: auto;
}
.scroll-content {
  display: flex;
  width: calc(30vw * 8);
}
.img-container {
  box-sizing: border-box;
  width: 30vw;
  height: 100vh;
  padding: 3vw;
  display: flex;
  &:nth-child(4n+1) {
    align-items: flex-end;
  }
  &:nth-child(2n) {
    align-items: center;
  }
  &:nth-child(4n+3) {
    align-items: flex-start;
  }
}
img {
  width: 100%;
}
</style>
