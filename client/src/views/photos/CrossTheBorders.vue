<template>
  <Story
    id="cross-the-borders"
    color="var(--orange)"
    :backgroundPosition="{ left: '50vw' }"
    :picturesPosition="{ top: '15vh', right: '50vw', left: '5vw' }"
    picturesMode="spread"
  >
    <div class="bubble u-appear-scaleup"/>
    <div class="cross"><AppearingLine :chars="cross" :start="-30" /></div>
    <div class="the"><AppearingLine :chars="the" :start="-35" /></div>
    <div class="borders"><AppearingLine :chars="borders" :start="-40" /></div>
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
      txt: covers['cross-the-borders'].txt,
      cross: [
        { html: 'C', class: {} },
        { html: 'r', class: {} },
        { html: 'q', class: { 'u-font-good-glyphs': true } },
        { html: 's', class: {} },
        { html: 's', class: {} },
      ],
      the: [
        { html: 't', class: {} },
        { html: 'h', class: {} },
        { html: 'e', class: {} },
      ],
      borders: [
        { html: 'b', class: { 'u-font-ogg': true, 'u-italic': true } },
        { html: 'o', class: { 'u-font-ogg': true, 'u-italic': true } },
        { html: 'r', class: { 'u-font-ogg': true, 'u-italic': true } },
        { html: 'd', class: {} },
        { html: 'e', class: { 'u-font-ogg': true, 'u-italic': true } },
        { html: 'r', class: { 'u-font-ogg': true, 'u-italic': true } },
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
.cross, .the, .borders {
  position: fixed;
  font-size: 4.5rem;
  font-weight: 300;
}
.cross {
  top: 15vh;
  left: 65vw;
}
.the {
  top: 25vh;
  left: 85vw;
}
.borders {
  top: 40vh;
  left: 60vw;
}
.text-container {
  position: fixed;
  font-size: .8rem;
  left: 55vw;
  top: 70vh;
  right: 10vw;
}
</style>
