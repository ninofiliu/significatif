<template>
  <Story
    id="taste-of-farniente"
    color="var(--yellow)"
    :backgroundPosition="{ }"
    :picturesPosition="{ top: '0', right: '0', bottom: '35vh', left: '50vw' }"
    picturesMode="horizontal"
  >
    <div class="u-title"><AppearingLine :chars="tasteOfFarniente"/></div>
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
      txt: covers['taste-of-farniente'].txt,
      tasteOfFarniente: [
        { html: 'T', class: {}, underline: true },
        { html: 'a', class: {}, underline: true },
        { html: 's', class: {}, underline: true },
        { html: 't', class: {}, underline: true },
        { html: 'e', class: {}, underline: true },
        { html: '&nbsp;', class: {} },
        { html: 'g', class: { 'u-font-good-glyphs': true } },
        { html: 'f', class: {} },
        { html: '&nbsp;', class: {} },
        { html: 'f', class: { 'u-font-ogg': true } },
        { html: 'a', class: { 'u-font-ogg': true } },
        { html: 'r', class: { 'u-font-ogg': true } },
        { html: 'n', class: { 'u-font-ogg': true } },
        { html: 'i', class: { 'u-font-ogg': true } },
        { html: 'e', class: { 'u-font-ogg': true } },
        { html: 'n', class: { 'u-font-ogg': true } },
        { html: 't', class: { 'u-font-ogg': true } },
        { html: 'e', class: { 'u-font-ogg': true } },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.u-text-container {
  top: 25vh;
  right: 65vw;
  bottom: 45vh;
  left: 10vw;
}
.u-title {
  position: fixed;
  right: 0;
  left: 0;
  bottom: 15vh;
  display: flex;
  justify-content: center;
}
</style>
