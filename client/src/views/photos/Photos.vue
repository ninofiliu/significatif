<template>
  <div>
    <div class="text">
      <span style="font-weight: bold">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </span>
      <span>
        In sequi similique tenetur facere ratione sapien tenatus dolor illum nesciunt dolorum
      </span>
      <span class="font-ogg-roman">
        non at ab laboriosam pariatur quaerat dolores maxime!
      </span>
      <span>
        impedit tempora numquam necessitatibus corrupti
      </span>
      <img :src="`${$s}6.jpg`" class="text-img">
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
  font-size: 30px;
}
</style>
