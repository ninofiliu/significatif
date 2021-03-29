<template>
  <Story
    id="self-portraits"
    color="var(--orange)"
    :backgroundPosition="{ left: '50vw' }"
    :picturesPosition="{ top: '15vh', right: '50vw', left: '5vw', bottom: '15vh' }"
    picturesMode="spread"
  >
    <div class="bubble u-appear-scaleup"/>
    <div class="self-portraits"><AppearingLine :chars="selfPortraits" :start="-5"/></div>
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
.self-portraits {
  position: fixed;
  top: 30vh;
  right: 10vw;
  font-size: 4rem;
  font-weight: 300;
}
.text-container {
  position: fixed;
  top: 45vh;
  left: 55vw;
  right: 15vw;
  font-size: .8rem;
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
    transform: translateY(0%)s;
  }
}
</style>
