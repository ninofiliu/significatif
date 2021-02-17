<template>
  <Story
    id="silent-photography"
    color="var(--grey)"
    :backgroundPosition="{ left: '40vw' }"
    :picturesPosition="{ top: '15vh', right: '55vw', left: '5vw' }"
    picturesMode="spread"
  >
    <div class="bubble u-appear-scaleup"/>
    <div class="architecture">
      <AppearingLine :chars="architecture" :start="-10" :style="{ 'align-items': 'flex-start' }"/>
    </div>
    <div class="silence">
      <AppearingLine :chars="silence" :start="-20"/>
    </div>
    <div class="text-container">
      <div class="text u-comfort">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia, laboriosam commodi? Earum adipisci odit ducimus nemo? Quibusdam earum nam accusamus quia voluptatibus amet aperiam molestiae. Ut error obcaecati reiciendis fugit. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      </div>
    </div>
  </Story>
</template>

<script>
import AppearingLine from '../../components/AppearingLine.vue';
import Story from '../../components/story/Story.vue';

export default {
  components: {
    AppearingLine,
    Story,
  },
  data() {
    return {
      architecture: [
        { html: 'A', class: {}, underline: true },
        { html: 'r', class: {}, underline: true },
        { html: 'c', class: {}, underline: true },
        { html: 'h', class: {}, underline: true },
        { html: 'i', class: {}, underline: true },
        { html: 't', class: {}, underline: true },
        { html: 'e', class: {}, underline: true },
        { html: 'c', class: {}, underline: true },
        { html: 't', class: { 'u-font-good-glyphs': true }, underline: true },
        { html: 'u', class: {}, underline: true },
        { html: 'r', class: {}, underline: true },
        { html: 'e', class: {}, underline: true },
      ],
      silence: [
        { html: 'S', class: { 'u-font-ogg': true, 'u-italic': true } },
        { html: 'i', class: { 'u-font-ogg': true, 'u-italic': true } },
        { html: 'l', class: { 'u-font-ogg': true, 'u-italic': true } },
        { html: 'e', class: { 'u-font-ogg': true, 'u-italic': true } },
        { html: 'n', class: { 'u-font-ogg': true, 'u-italic': true } },
        { html: 'c', class: {} },
        { html: 'e', class: {} },
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
.architecture {
  position: fixed;
  top: 25vh;
  right: 10vw;
  font-size: 4rem;
  font-weight: 300;
}
.silence {
  position: fixed;
  top: 40vh;
  right: 30vw;
  font-size: 4rem;
  font-weight: 300;
}
.text-container {
  position: fixed;
  top: 60vh;
  left: 65vw;
  bottom: 10vh;
  right: 10vw;
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
