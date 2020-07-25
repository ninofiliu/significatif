<template>
  <div class="Manifesto">
    <NavBar/>
    <div class="landing">
      <div class="text">
        <div>Let me <u>tell</u></div>
        <div>You a s<span class="font-ogg-italic">t</span>ory.</div>
        <div style="font-weight: 300">&darr;</div>
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
.landing {
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  .text {
    width: 80%;
    font-size: 110px;
    text-transform: uppercase;
  }
}
</style>
