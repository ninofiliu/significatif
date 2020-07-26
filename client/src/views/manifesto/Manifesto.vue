<template>
  <div class="Manifesto">
    <NavBar/>
    <div class="landing">
      <div class="text">
        <AppearingLine :chars="letMeTell"/>
        <AppearingLine :chars="youAStory" :start="-10"/>
        <div style="font-weight: 300">&darr;</div>
      </div>
    </div>
  </div>
</template>

<script>
import AppearingLine from '../../components/AppearingLine.vue';
import NavBar from '../../components/NavBar.vue';

export default {
  components: {
    AppearingLine,
    NavBar,
  },
  data() {
    return {
      letMeTell: [
        { html: 'L', class: {} },
        { html: 'e', class: {} },
        { html: 't', class: {} },
        { html: '&nbsp;', class: {} },
        { html: 'm', class: {} },
        { html: 'e', class: {} },
        { html: '&nbsp;', class: {} },
        { html: 't', class: { underline: true } },
        { html: 'e', class: { underline: true } },
        { html: 'l', class: { underline: true } },
        { html: 'l', class: { underline: true } },
      ],
      youAStory: [
        { html: 'y', class: {} },
        { html: 'o', class: {} },
        { html: 'u', class: {} },
        { html: '&nbsp;', class: {} },
        { html: 'a', class: {} },
        { html: '&nbsp;', class: {} },
        { html: 's', class: {} },
        { html: 't', class: { 'font-ogg-italic': true } },
        { html: 'o', class: {} },
        { html: 'r', class: {} },
        { html: 'y', class: {} },
        { html: '.', class: {} },
      ],
    };
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
