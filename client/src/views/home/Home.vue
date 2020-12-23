<template>
  <div>
    <NavBar/>
    <div class="scroll">
      <div class="scroll-content">
        <div
          v-for="src of srcs"
          :key="src"
          class="img-container"
        >
          <img :src="`${$s}${src}`">
        </div>
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
import srcs from '../../content/home.json';

export default {
  components: {
    Center,
    Footer,
    NavBar,
  },
  data() {
    return {
      srcs,
    };
  },
};
</script>

<style lang="scss" scoped>
.scroll {
  position: fixed;
  top: 3rem;
  right: 0;
  bottom: 0;
  left: 0;
  overflow-x: auto;
  overflow-y: hidden;
}
.scroll-content {
  display: flex;
  width: calc(30vw * 8);
}
.img-container {
  box-sizing: border-box;
  width: 30vw;
  height: calc(100vh - 3rem);
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
