<template>
  <Story
    id="humans"
    color="var(--purple)"
    :backgroundPosition="{ }"
    :picturesPosition="{ top: '0', right: '0', bottom: '35vh', left: '50vw' }"
    picturesMode="horizontal"
  >
    <div class="bubble u-appear-scaleup"/>
    <div class="photo">
      <AppearingLine :chars="photo" :start="-10"/>
    </div>
    <div class="seduction">
      <AppearingLine :chars="seduction" :start="-15" reversed/>
    </div>
    <div class="text-container">
      <div class="text u-extracomfort">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quam quaerat exercitationem nemo repellat iure assumenda accusamus deleniti tempore, culpa magni nobis recusandae eaque excepturi perspiciatis et modi porro dolor!
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
      photo: [
        { html: 'P', class: {}, underline: true },
        { html: 'h', class: {}, underline: true },
        { html: 'o', class: {}, underline: true },
        { html: 't', class: {}, underline: true },
        { html: 'o', class: {}, underline: true },
      ],
      seduction: [
        { html: 'S', class: { 'u-font-ogg': true, 'u-italic': true } },
        { html: 'e', class: {} },
        { html: 'd', class: {} },
        { html: 'u', class: {} },
        { html: 'c', class: {} },
        { html: 't', class: {} },
        { html: 'i', class: {} },
        { html: 'B', class: { 'u-font-good-glyphs': true } },
        { html: 'n', class: {} },
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
.photo {
  position: fixed;
  top: 20vh;
  left: 10vw;
  font-size: 4.5rem;
  font-weight: 300;
}
.seduction {
  position: fixed;
  top: 35vh;
  right: 55vw;
  font-size: 4.5rem;
  font-weight: 300;
}
.text-container {
  position: fixed;
  top: 59vh;
  right: 65vw;
  left: 10vw;
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
