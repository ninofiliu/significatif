<template>
  <Story
    id="pedal-to-the-metal"
    color="var(--grey)"
    :backgroundPosition="{ left: '40vw' }"
    :picturesPosition="{ top: '15vh', right: '55vw', left: '5vw' }"
    picturesMode="spread"
  >
    <div class="bubble u-appear-scaleup"/>
    <div class="pedal"><AppearingLine :chars="pedal" :start="-10"/></div>
    <div class="to-the"><AppearingLine :chars="toThe" :start="-15"/></div>
    <div class="metal"><AppearingLine :chars="metal" :start="-20"/></div>
    <div class="text-container">
      <p v-for="t of txt" :key="t">{{ t }}</p>
    </div>
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
  right: 32vw;
  font-size: 4rem;
  font-weight: 300;
}
.to-the {
  position: fixed;
  top: 28vh;
  right: 15vw;
  font-size: 4rem;
  font-weight: 300;
}
.metal {
  position: fixed;
  top: 42vh;
  right: 30vw;
  font-size: 4rem;
  font-weight: 300;
}
.text-container {
  position: fixed;
  top: 60vh;
  right: 10vw;
  bottom: 10vh;
  left: 65vw;
  overflow: hidden;
}
.text {
  animation-name: appear-up;
  animation-duration: 1s;
  animation-delay: 1.5s;
  animation-fill-mode: both;
}
@keyframes appear-up {
  from {
    transform: translateY(30vh);
  }
  to {
    transform: translateY(0);
  }
}
</style>
