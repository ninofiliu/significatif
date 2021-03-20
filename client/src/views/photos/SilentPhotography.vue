<template>
  <Story
    id="silent-photography"
    color="var(--yellow)"
    :backgroundPosition="{ }"
    :picturesPosition="{ top: '0', right: '0', bottom: '35vh', left: '50vw' }"
    picturesMode="horizontal"
  >
    <div class="bubble u-appear-scaleup"/>
    <div class="silent"><AppearingLine :chars="silent"/></div>
    <div class="photography"><AppearingLine :chars="photography"/></div>
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
      txt: covers['silent-photography'].txt,
      silent: [
        { html: 'S' },
        { html: 'i' },
        { html: 'l' },
        { html: 'e' },
        { html: 'n' },
        { html: 't' },
      ],
      photography: [
        { html: 'P' },
        { html: 'h' },
        { html: 'o' },
        { html: 't' },
        { html: 'o' },
        { html: 'g' },
        { html: 'r' },
        { html: 'a' },
        { html: 'p' },
        { html: 'h' },
        { html: 'y' },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.bubble {
  position: fixed;
  top: 18vh;
  left: 12vw;
  width: 25vw;
  height: 25vw;
  background-color: white;
  border-radius: 50%;
}
.silent, .photography {
  position: fixed;
  font-size: 4.5rem;
  font-weight: 300;
}
.silent {
  top: 10vh;
  left: 15vw;
}
.photography {
  top: 25vh;
  left: 5vw;
}
.text-container {
  position: fixed;
  top: 60vh;
  right: 55vw;
  left: 15vw;
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
