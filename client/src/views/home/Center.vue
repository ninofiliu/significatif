<template>
  <div class="center">
    <AppearingLine :chars="chars0" />
    <AppearingLine :chars="chars1" reversed />
  </div>
</template>

<script>
import AppearingLine from "../../components/AppearingLine.vue";

export default {
  components: {
    AppearingLine,
  },
  data() {
    return {
      chars0: [
        { html: "L", class: {} },
        { html: "o", class: {} },
        { html: "c", class: {} },
        { html: "a", class: {} },
        { html: "l", class: {} },
        { html: "&nbsp;", class: {} },
        { html: "d", class: {} },
        { html: "'", class: { "u-font-ogg": true, "u-italic": true } },
        { html: "a", class: { "u-font-ogg": true, "u-italic": true } },
        { html: "r", class: { "u-font-ogg": true, "u-italic": true } },
        { html: "c", class: { "u-font-ogg": true, "u-italic": true } },
        { html: "h", class: { "u-font-ogg": true, "u-italic": true } },
        { html: "i", class: { "u-font-ogg": true, "u-italic": true } },
        { html: "v", class: { "u-font-ogg": true, "u-italic": true } },
        { html: "e", class: { "u-font-ogg": true, "u-italic": true } },
        { html: "s", class: { "u-font-ogg": true, "u-italic": true } },
      ],
      chars1: [
        { html: "&nbsp;" },
        { html: "p", class: { "u-font-ogg": true, "u-italic": true } },
        { html: "a", class: { "u-font-ogg": true, "u-italic": true } },
        { html: "r", class: { "u-font-ogg": true, "u-italic": true } },
        { html: "&nbsp;" },
        { html: "V", underline: true },
        { html: "i", underline: true },
        { html: "c", underline: true },
        { html: "t", underline: true },
        { html: "o", underline: true },
        { html: "r", underline: true },
        { html: "&nbsp;", class: {} },
        { html: "R", class: { "u-font-ogg": true } },
        { html: "&nbsp;" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.center {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-size: 3.5rem;
  font-weight: 300;

  pointer-events: none;
}
div {
  overflow-y: hidden;
}
@media (max-aspect-ratio: 1/1) {
  .center {
    font-size: 3rem;
  }
}
</style>
