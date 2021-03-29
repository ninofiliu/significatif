<template>
  <Story
    id="taste-of-farniente"
    color="var(--yellow)"
    :backgroundPosition="{ }"
    :picturesPosition="{ top: '0', right: '0', bottom: '35vh', left: '50vw' }"
    picturesMode="horizontal"
  >
    <div class="text-container">
      <p v-for="t of txt" :key="t">{{ t }}</p>
    </div>
    <div class="title">
      <AppearingLine :chars="tasteOfFarniente"/>
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
.text-container {
  position: fixed;
  top: 25vh;
  right: 65vw;
  bottom: 45vh;
  left: 10vw;
  overflow: hidden;
  font-size: .8rem;
  text-align: justify;
}
.title {
  position: fixed;
  right: 0;
  left: 0;
  bottom: 15vh;
  font-size: 4rem;
  font-weight: 300;
  display: flex;
  justify-content: center;
}
</style>
