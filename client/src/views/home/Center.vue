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
        { html: "S", class: {} },
        { html: "i", class: {} },
        { html: "g", class: {} },
        { html: "n", class: {} },
        { html: "i", class: {} },
        { html: "f", class: {} },
        { html: "i", class: {} },
        { html: "c", class: {} },
        { html: "a", class: {} },
        { html: ".", class: {} },
        { html: "t", class: { "u-font-ogg": true, "u-italic": true } },
        { html: "i", class: { "u-font-ogg": true, "u-italic": true } },
        { html: "f", class: { "u-font-ogg": true, "u-italic": true } },
        { html: "&nbsp;", class: {} },
        { html: "b", class: {} },
        { html: "y", class: {} },
      ],
      chars1: [
        { html: "V", underline: true },
        { html: "i", underline: true },
        { html: "c", underline: true },
        { html: "t", underline: true },
        { html: "o", underline: true },
        { html: "r", underline: true },
        { html: "&nbsp;", class: {} },
        { html: "R", class: {} },
        { html: "o", class: {} },
        { html: "g", class: {} },
        { html: "e", class: {} },
        { html: "r", class: {} },
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
@media screen and (max-width: 900px) {
  .center {
    font-size: 3rem;
  }
}
</style>
