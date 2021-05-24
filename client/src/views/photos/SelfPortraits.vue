<template>
  <Story
    id="self-portraits"
    color="var(--orange)"
    :backgroundPosition="{ left: '50vw' }"
    :picturesPosition="{ top: '15vh', right: '50vw', left: '5vw', bottom: '15vh' }"
    picturesMode="spread"
  >
    <div class="bubble u-appear-scaleup"/>
    <div class="u-title"><AppearingLine :chars="selfPortraits" :start="-5"/></div>
    <div class="u-text-container"><p v-for="t of txt" :key="t">{{ t }}</p></div>
  </Story>
</template>

<script>
import AppearingLine from '../../components/AppearingLine.vue';
import Story from '../../components/story/Story.vue';
import covers from '../../content/covers.json';

export default {
  components: {
    AppearingLine,
    Story,
  },
  data() {
    return {
      txt: covers['self-portraits'].txt,
      selfPortraits: [
        { html: 'S' },
        { html: 'e' },
        { html: 'l' },
        { html: 'f' },
        { html: '&nbsp;' },
        { html: 'P', class: { 'u-font-ogg': true, 'u-italic': true } },
        { html: 'o', class: { 'u-font-ogg': true, 'u-italic': true } },
        { html: 'r', class: { 'u-font-ogg': true, 'u-italic': true } },
        { html: 't', class: { 'u-font-ogg': true, 'u-italic': true } },
        { html: 'r', class: { 'u-font-ogg': true, 'u-italic': true } },
        { html: 'a', class: { 'u-font-ogg': true, 'u-italic': true } },
        { html: 'i', class: { 'u-font-ogg': true, 'u-italic': true } },
        { html: 't', class: { 'u-font-ogg': true, 'u-italic': true } },
        { html: 's', class: { 'u-font-ogg': true, 'u-italic': true } },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.bubble {
  position: fixed;
  top: 18vh;
  right: 12vw;
  width: 25vw;
  height: 25vw;
  background-color: white;
  border-radius: 50%;
}
.u-title {
  position: fixed;
  top: 30vh;
  right: 10vw;
}
.u-text-container {
  top: 45vh;
  left: 55vw;
  right: 15vw;
}
</style>
