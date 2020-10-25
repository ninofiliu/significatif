<template>
  <div class="center">
    <AppearingLine :chars="chars0"/>
    <AppearingLine :chars="chars1" reversed/>
  </div>
</template>

<script>
import AppearingLine from '../../components/AppearingLine.vue';

export default {
  components: {
    AppearingLine,
  },
  data() {
    return {
      chars0: [
        { html: 'S', class: { 'font-ogg-roman': true } },
        { html: 'i', class: {} },
        { html: 'g', class: {} },
        { html: 'n', class: {} },
        { html: 'i', class: {} },
        { html: 'f', class: {} },
        { html: 'i', class: {} },
        { html: 'c', class: {} },
        { html: 'a', class: {} },
        { html: '.', class: {} },
        { html: 't', class: { 'font-ogg-italic': true } },
        { html: 'i', class: { 'font-ogg-italic': true } },
        { html: 'f', class: { 'font-ogg-italic': true } },
        { html: '&nbsp;', class: {} },
        { html: 'b', class: {} },
        { html: 'y', class: {} },
      ],
      chars1: [
        { html: 'V', class: { underline: true } },
        { html: 'i', class: { underline: true, 'font-ogg-italic': true } },
        { html: 'c', class: { underline: true } },
        { html: 't', class: { underline: true } },
        { html: 'o', class: { underline: true } },
        { html: 'r', class: { underline: true } },
        { html: '&nbsp;', class: {} },
        { html: 'R', class: {} },
        { html: 'o', class: { 'font-ogg-italic': true } },
        { html: 'g', class: {} },
        { html: 'e', class: {} },
        { html: 'r', class: {} },
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
</style>
