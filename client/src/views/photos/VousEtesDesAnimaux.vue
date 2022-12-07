<template>
  <Story
    id="vous-etes-des-animaux"
    color="var(--orange)"
    :backgroundPosition="{}"
    :picturesPosition="{ top: '0', right: '0', bottom: '35vh', left: '50vw' }"
    picturesMode="horizontal"
  >
    <div class="u-title"><AppearingLine :chars="title" /></div>
    <div class="u-text-container">
      <p v-for="t of txt" :key="t">{{ t }}</p>
    </div>
  </Story>
</template>

<script>
import AppearingLine from "../../components/AppearingLine.vue";
import Story from "../../components/story/Story.vue";
import covers from "../../content/covers.json";

export default {
  components: {
    AppearingLine,
    Story,
  },
  data() {
    return {
      txt: covers["vous-etes-des-animaux"].txt,
      title: [
        { html: "V", class: {} },
        { html: "o", class: {} },
        { html: "u", class: {} },
        { html: "G", class: { "u-font-good-glyphs": true } },
        { html: "&nbsp;", class: {} },
        { html: "ê", class: {} },
        { html: "t", class: { "u-font-ogg": true, "u-italic": true } },
        { html: "e", class: {} },
        { html: "s", class: {} },
        { html: "&nbsp;", class: {} },
        { html: "d", class: {} },
        { html: "e", class: {} },
        { html: "s", class: {} },
        { html: "&nbsp;", class: {} },
        {
          html: "a",
          class: { "u-font-ogg": true, "u-italic": true },
          underline: true,
        },
        {
          html: "n",
          class: { "u-font-ogg": true, "u-italic": true },
          underline: true,
        },
        {
          html: "i",
          class: { "u-font-ogg": true, "u-italic": true },
          underline: true,
        },
        {
          html: "m",
          class: { "u-font-ogg": true, "u-italic": true },
          underline: true,
        },
        {
          html: "a",
          class: { "u-font-ogg": true, "u-italic": true },
          underline: true,
        },
        {
          html: "u",
          class: { "u-font-ogg": true, "u-italic": true },
          underline: true,
        },
        {
          html: "x",
          class: { "u-font-ogg": true, "u-italic": true },
          underline: true,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.u-text-container {
  top: 30vh;
  right: 70vw;
  bottom: 50vh;
  left: 10vw;
}
.u-title {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 15vh;
  display: flex;
  justify-content: center;
}
@media (max-aspect-ratio: 1/1) {
  .u-title {
    bottom: auto;
    top: 20vh;
    font-size: 2rem;
  }
}
</style>
