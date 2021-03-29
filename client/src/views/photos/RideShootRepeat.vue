<template>
  <Story
    id="ride-shoot-repeat"
    color="var(--purple)"
    :backgroundPosition="{ left: '50vw' }"
    :picturesPosition="{ top: '15vh', right: '50vw', left: '5vw', bottom: '15vh' }"
    picturesMode="spread"
  >
    <div class="bubble u-appear-scaleup"/>
    <div class="ride"><AppearingLine :chars="ride" :start="-5"/></div>
    <div class="shoot"><AppearingLine :chars="shoot" :start="-10"/></div>
    <div class="repeat"><AppearingLine :chars="repeat" :start="-15"/></div>
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
  font-size: 4rem;
  font-weight: 300;
  left: 60vw;
  top: 20vh;
}
.shoot {
  position: fixed;
  font-size: 4rem;
  font-weight: 300;
  left: 60vw;
  top: 30vh;
}
.repeat {
  position: fixed;
  font-size: 4rem;
  font-weight: 300;
  left: 60vw;
  top: 40vh;
}
.text-container {
  position: fixed;
  top: 55vh;
  left: 70vw;
  bottom: 10vh;
  right: 10vw;
  overflow: hidden;
  font-size: .8rem;
  text-align: justify;
}
</style>
