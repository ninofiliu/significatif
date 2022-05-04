<template>
  <Story
    id="humans"
    color="var(--purple)"
    :backgroundPosition="{}"
    :picturesPosition="{ top: '0', right: '0', bottom: '35vh', left: '50vw' }"
    picturesMode="horizontal"
  >
    <div class="bubble u-appear-scaleup" />
    <div class="u-title"><AppearingLine :chars="humans" /></div>
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
      txt: covers.humans.txt,
      humans: [
        { html: "H", class: { "u-font-ogg": true, "u-italic": true } },
        { html: "u", class: { "u-font-ogg": true, "u-italic": true } },
        { html: "m", class: { "u-font-ogg": true, "u-italic": true } },
        { html: "a", class: { "u-font-ogg": true, "u-italic": true } },
        { html: "n", class: { "u-font-ogg": true, "u-italic": true } },
        { html: "s", class: {} },
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
.u-title {
  position: fixed;
  top: 30vh;
  left: 10vw;
}
.u-text-container {
  top: 45vh;
  right: 70vw;
  left: 10vw;
}
</style>
