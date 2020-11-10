<template>
  <Story
    color="var(--yellow)"
    :backgroundPosition="{ right: '30vh' }"
    :picturesPosition="{ top: '4rem', right: '0', bottom: '35vh', left: '50vw' }"
    :pictures="pictures"
    picturesMode="horizontal"
  >
    <div class="text-container">
      <div class="text u-comfort">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus aut ab quam cumque, aliquid delectus eum iure, assumenda, placeat mollitia impedit deserunt? Unde placeat harum suscipit. Inventore cupiditate beatae sapiente!
      </div>
    </div>
    <div class="title">
      <AppearingLine :chars="tasteOfFarniente"/>
    </div>
  </Story>
</template>

<script>
import AppearingLine from '../../components/AppearingLine.vue';
import Story from '../../components/story/Story.vue';
import dummyPictures from './dummyPictures';

export default {
  components: {
    AppearingLine,
    Story,
  },
  data() {
    return {
      pictures: dummyPictures,
      tasteOfFarniente: [
        { html: 'T', class: { 'u-underline': true } },
        { html: 'a', class: { 'u-underline': true } },
        { html: 's', class: { 'u-underline': true } },
        { html: 't', class: { 'u-underline': true } },
        { html: 'e', class: { 'u-underline': true } },
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
  right: 70vw;
  bottom: 45vh;
  left: 5vw;
  overflow: hidden;
}
.text {
  width: 100%;
  height: 100%;
  animation-name: text-appear;
  animation-duration: .5s;
  animation-delay: 1s;
  animation-fill-mode: both;
}
@keyframes text-appear {
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0%);
  }
}
.title {
  position: fixed;
  right: 0;
  left: 0;
  bottom: 15vh;
  text-align: center;
  font-size: 4rem;
}
</style>
