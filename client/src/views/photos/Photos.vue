<template>
  <div>
    <div class="pictures">
      <RouterLink to="/photos/cross-the-borders">
        <img v-for="i of 10" :key="i" :src="`${$s}${i}.jpg`">
      </RouterLink>
    </div>
    <div class="text">
      <span style="font-weight: bold">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </span>
      <span>
        In sequi similique tenetur facere ratione sapien tenatus dolor illum nesciunt dolorum
      </span>
      <span class="u-font-ogg">
        non at ab laboriosam pariatur quaerat dolores maxime!
      </span>
      <span>
        impedit tempora numquam necessitatibus corrupti
      </span>
      <img :src="`${$s}6.jpg`" class="u-text-img">
      <span>
        numquam necessitatibus cupiditate?
      </span>
    </div>
    <NavBar/>
    <Footer fixed/>
  </div>
</template>

<script>
import Footer from '../../components/Footer.vue';
import NavBar from '../../components/NavBar.vue';

export default {
  components: {
    Footer,
    NavBar,
  },
};
</script>

<style lang="scss" scoped>
.text {
  position: absolute;
  top: 20%;
  right: 40%;
  left: 10%;
  font-size: 1.5rem;
}
.pictures {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow-y: scroll;
  img {
    display: block;
    width: 40%;
    margin: 0 15% 0 45%;
    &:first-child {
      margin-top: 5%;
    }
    &:last-child {
      margin-bottom: 5%;
    }
    &:nth-child(3n+1) {
      transform: rotate(-10deg);
    }
    &:nth-child(3n+2) {
      transform: rotate(5deg);
    }
    &:nth-child(3n+3) {
      transform: rotate(15deg);
    }
  }
}
</style>
