<template>
  <Story
    id="ocular-pleasure"
    color="var(--yellow)"
    :backgroundPosition="{ left: '50vw' }"
    :picturesPosition="{ top: '15vh', right: '50vw', left: '5vw' }"
    picturesMode="spread"
  >
    <div class="bubble u-appear-scaleup"/>
    <div class="u-title ocular"><AppearingLine :chars="ocular" :start="-5"/></div>
    <div class="u-title pleasure"><AppearingLine :chars="pleasure" :start="-10"/></div>
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
      txt: covers['ocular-pleasure'].txt,
      ocular: [
        { html: 'Z', class: { 'u-font-good-glyphs': true } },
        { html: 'c', class: { 'u-font-ogg': true, 'u-italic': true } },
        { html: 'u', class: { 'u-font-ogg': true, 'u-italic': true } },
        { html: 'l', class: { 'u-font-ogg': true, 'u-italic': true } },
        { html: 'a', class: { 'u-font-ogg': true, 'u-italic': true } },
        { html: 'r', class: { 'u-font-ogg': true, 'u-italic': true } },
      ],
      pleasure: [
        { html: 'P' },
        { html: 'l' },
        { html: 'e' },
        { html: 'a' },
        { html: 's' },
        { html: 'u' },
        { html: 'r' },
        { html: 'e' },
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
.ocular {
  position: fixed;
  top: 25vh;
  right: 10vw;
}
.pleasure {
  position: fixed;
  bottom: 25vh;
  left: 55vw;
}
.u-text-container {
  top: 40vh;
  left: 55vw;
  right: 20vw;
}
.text {
  animation-name: appear-up;
  animation-fill-mode: both;
  animation-delay: 1.3s;
  animation-duration: 1s;
}
@keyframes appear-up {
  from {
    transform: translateY(40vh);
  }
  to {
    transform: translateY(0%);
  }
}

@media screen and (max-width: 900px) {
  .ocular { top: 15vh; left: 10vw; }
  .pleasure { top: 25vh; left: 30vw; bottom: initial; }
}
</style>
