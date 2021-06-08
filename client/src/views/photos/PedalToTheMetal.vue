<template>
  <Story
    id="pedal-to-the-metal"
    color="var(--grey)"
    :backgroundPosition="{ left: '40vw' }"
    :picturesPosition="{ top: '15vh', right: '55vw', left: '5vw' }"
    picturesMode="spread"
  >
    <div class="bubble u-appear-scaleup"/>
    <div class="u-title pedal"><AppearingLine :chars="pedal" :start="-10"/></div>
    <div class="u-title to-the"><AppearingLine :chars="toThe" :start="-15"/></div>
    <div class="u-title metal"><AppearingLine :chars="metal" :start="-20"/></div>
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
      txt: covers['pedal-to-the-metal'].txt,
      pedal: [
        { html: 'P', class: {}, underline: true },
        { html: 'e', class: {}, underline: true },
        { html: 'd', class: {}, underline: true },
        { html: 'a', class: {}, underline: true },
        { html: 'l', class: { 'u-font-ogg': true, 'u-italic': true } },
        { html: '&nbsp', class: {} },
        { html: '&nbsp', class: {} },
        { html: '&nbsp', class: {} },
      ],
      toThe: [
        { html: 't', class: {} },
        { html: 'Y', class: { 'u-font-good-glyphs': true } },
        { html: '&nbsp;', class: { } },
        { html: 't', class: {} },
        { html: 'h', class: {} },
        { html: 'e', class: {} },
      ],
      metal: [
        { html: 'm', class: {} },
        { html: 'e', class: { 'u-font-ogg': true } },
        { html: 't', class: { 'u-font-ogg': true } },
        { html: 'a', class: { 'u-font-ogg': true } },
        { html: 'l', class: { 'u-font-ogg': true } },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.bubble {
  position: fixed;
  top: 20vh;
  right: 18vw;
  width: 45vh;
  height: 45vh;
  background-color: var(--white);
  border-radius: 50%;
}
.pedal {
  position: fixed;
  top: 20vh;
  left: 50vw;
}
.to-the {
  position: fixed;
  top: 28vh;
  right: 15vw;
}
.metal {
  position: fixed;
  top: 42vh;
  right: 30vw;
}
.u-text-container {
  top: 60vh;
  right: 30vw;
  bottom: 10vh;
  left: 50vw;
}

@media screen and (max-width: 900px) {
  .pedal { top: 15vh; right: 10vw; }
  .to-the { top: 25vh; right: 20vw; }
  .metal { top: 30vh; right: 50vw; }
  .bubble { top: -5vh; right: -40vw; }
}
</style>
