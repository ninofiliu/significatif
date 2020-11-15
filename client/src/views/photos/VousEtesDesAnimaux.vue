<template>
  <Story
    id="vous-etes-des-animaux"
    color="var(--orange)"
    :backgroundPosition="{ right: '20vw' }"
    :picturesPosition="{ right: '55vw', bottom: '30vh', left: '5vw' }"
    picturesMode="horizontal"
  >
    <div class="text-container">
      <div class="text u-comfort">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia non expedita quibusdam omnis aliquam, voluptatum qui. Ipsa est ad ab repellat distinctio, expedita rerum veniam assumenda nobis asperiores consequuntur porro.
      </div>
    </div>
    <div class="title">
      <AppearingLine :chars="title"/>
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
      title: [
        { html: 'V', class: {} },
        { html: 'o', class: {} },
        { html: 'u', class: {} },
        { html: 'G', class: { 'u-font-good-glyphs': true } },
        { html: '&nbsp;', class: {} },
        { html: 'ê', class: {} },
        { html: 't', class: { 'u-font-ogg': true, 'u-italic': true } },
        { html: 'e', class: {} },
        { html: 's', class: {} },
        { html: '&nbsp;', class: {} },
        { html: 'd', class: {} },
        { html: 'e', class: {} },
        { html: 's', class: {} },
        { html: '&nbsp;', class: {} },
        { html: 'a', class: { 'u-font-ogg': true, 'u-italic': true }, underline: true },
        { html: 'n', class: { 'u-font-ogg': true, 'u-italic': true }, underline: true },
        { html: 'i', class: { 'u-font-ogg': true, 'u-italic': true }, underline: true },
        { html: 'm', class: { 'u-font-ogg': true, 'u-italic': true }, underline: true },
        { html: 'a', class: {}, underline: true },
        { html: 'u', class: {}, underline: true },
        { html: 'x', class: {}, underline: true },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.text-container {
  position: fixed;
  top: 20vh;
  right: 10vw;
  bottom: 50vh;
  left: 60vw;
}
.title {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 10vh;
  display: flex;
  justify-content: center;
  font-weight: 300;
  font-size: 4.5rem;
}
</style>
