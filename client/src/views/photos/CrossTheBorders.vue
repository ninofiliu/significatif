<template>
  <Story
    id="cross-the-borders"
    color="var(--orange)"
    :backgroundPosition="{ left: '50vw' }"
    :picturesPosition="{
      top: '15vh',
      right: '50vw',
      left: '5vw',
      bottom: '15vh',
    }"
    picturesMode="spread"
  >
    <div class="bubble u-appear-scaleup" />
    <div class="u-title cross">
      <AppearingLine :chars="cross" :start="-5" />
    </div>
    <div class="u-title the"><AppearingLine :chars="the" :start="-15" /></div>
    <div class="u-title borders">
      <AppearingLine :chars="borders" :start="-20" />
    </div>
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
      txt: covers["cross-the-borders"].txt,
      cross: [
        { html: "C", class: {} },
        { html: "r", class: {} },
        { html: "q", class: { "u-font-good-glyphs": true } },
        { html: "s", class: {} },
        { html: "s", class: {} },
      ],
      the: [
        { html: "t", class: {} },
        { html: "h", class: {} },
        { html: "e", class: {} },
      ],
      borders: [
        { html: "b", class: { "u-font-ogg": true, "u-italic": true } },
        { html: "o", class: { "u-font-ogg": true, "u-italic": true } },
        { html: "r", class: { "u-font-ogg": true, "u-italic": true } },
        { html: "d", class: {} },
        { html: "e", class: { "u-font-ogg": true, "u-italic": true } },
        { html: "r", class: { "u-font-ogg": true, "u-italic": true } },
        { html: "s", class: { "u-font-ogg": true, "u-italic": true } },
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
.cross {
  position: fixed;
  top: 15vh;
  left: 65vw;
}
.the {
  position: fixed;
  top: 25vh;
  left: 85vw;
}
.borders {
  position: fixed;
  top: 35vh;
  left: 60vw;
}
.u-text-container {
  left: 60vw;
  top: 55vh;
  right: 20vw;
}
@media screen and (max-width: 900px) {
  .cross {
    top: 10vh;
    left: 20vw;
  }
  .the {
    top: 15vh;
    left: 60vw;
  }
  .borders {
    top: 25vh;
    left: 40vw;
  }
}
</style>
