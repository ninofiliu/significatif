<template>
  <Story
    id="ride-shoot-repeat"
    color="var(--purple)"
    :backgroundPosition="{ left: '50vw' }"
    :picturesPosition="{ top: '15vh', right: '50vw', left: '5vw', bottom: '15vh' }"
    picturesMode="spread"
  >
    <div class="bubble u-appear-scaleup"/>
    <div class="u-title ride"><AppearingLine :chars="ride" :start="-5"/></div>
    <div class="u-title shoot"><AppearingLine :chars="shoot" :start="-10"/></div>
    <div class="u-title repeat"><AppearingLine :chars="repeat" :start="-15"/></div>
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
      txt: covers['ride-shoot-repeat'].txt,
      ride: [
        { html: 'R' },
        { html: 'i' },
        { html: 'd' },
        { html: 'e' },
        { html: ',' },
      ],
      shoot: [
        { html: 'S' },
        { html: 'h' },
        { html: 'o' },
        { html: 'o' },
        { html: 't' },
        { html: ',' },
      ],
      repeat: [
        { html: 'R', class: { 'u-font-ogg': true, 'u-italic': true } },
        { html: 'e', class: { 'u-font-ogg': true, 'u-italic': true } },
        { html: 'p', class: { 'u-font-ogg': true, 'u-italic': true } },
        { html: 'e', class: { 'u-font-ogg': true, 'u-italic': true } },
        { html: 'a', class: { 'u-font-ogg': true, 'u-italic': true } },
        { html: 't', class: { 'u-font-ogg': true, 'u-italic': true } },
        { html: '.', class: { 'u-font-ogg': true, 'u-italic': true } },
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
.ride {
  position: fixed;
  top: 20vh;
  left: 60vw;
}
.shoot {
  position: fixed;
  top: 30vh;
  left: 60vw;
}
.repeat {
  position: fixed;
  top: 40vh;
  left: 60vw;
}
.u-text-container {
  top: 55vh;
  left: 70vw;
  bottom: 10vh;
  right: 10vw;
}
@media screen and (max-width: 900px) {
  .ride { top: 10vh; left: 20vw;  }
  .shoot { top: 17vh; left: 20vw; }
  .repeat { top: 24vh; left: 20vw; }
  .bubble { top: -5vh; right: -40vw; }
}
</style>
