<template>
  <Story
    id="silent-photography"
    color="var(--yellow)"
    :backgroundPosition="{ }"
    :picturesPosition="{ top: '0', right: '0', bottom: '35vh', left: '50vw' }"
    picturesMode="horizontal"
  >
    <div class="u-title"><AppearingLine :chars="silentPhotography"/></div>
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
      txt: covers['silent-photography'].txt,
      silentPhotography: [
        { html: 'S', class: { 'u-font-ogg': true, 'u-italic': true } },
        { html: 'i', class: { 'u-font-ogg': true, 'u-italic': true } },
        { html: 'l', class: { 'u-font-ogg': true, 'u-italic': true } },
        { html: 'e', class: { 'u-font-ogg': true, 'u-italic': true } },
        { html: 'n', class: { 'u-font-ogg': true, 'u-italic': true } },
        { html: 't', class: { 'u-font-ogg': true, 'u-italic': true } },
        { html: '&nbsp;' },
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
.u-text-container {
  top: 25vh;
  right: 75vw;
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
