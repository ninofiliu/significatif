<template>
  <Story
    id="cross-the-borders"
    color="var(--orange)"
    :backgroundPosition="{ left: '40vw' }"
    :picturesPosition="{ top: '15vh', right: '55vw', left: '5vw' }"
    picturesMode="spread"
  >
  <div class="article">
    <div class="content">
      <div class="bubble u-appear-scaleup"/>
      <div class="cross">
        <AppearingLine :chars="cross" :start="-30" />
      </div>
      <div class="the">
        <AppearingLine :chars="the" :start="-35" />
      </div>
      <div class="borders">
        <AppearingLine :chars="borders" :start="-40" />
      </div>
      <div class="image-container">
        <img :src="`${$s}1.jpg`">
      </div>
      <div class="desc">
        <div class="text u-comfort">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit itaque reprehenderit molestias? Fugiat porro architecto labore, doloribus aliquid voluptatibus vitae velit provident, itaque consectetur expedita soluta assumenda, magnam asperiores molestias!
        </div>
        <div class="number">
          01.
        </div>
      </div>
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
      cross: [
        { html: 'C', class: {} },
        { html: 'r', class: {} },
        { html: 'q', class: { 'u-font-good-glyphs': true } },
        { html: 's', class: {} },
        { html: 's', class: {} },
      ],
      the: [
        { html: 't', class: {} },
        { html: 'h', class: {} },
        { html: 'e', class: {} },
      ],
      borders: [
        { html: 'b', class: { 'u-font-ogg': true, 'u-italic': true } },
        { html: 'o', class: { 'u-font-ogg': true, 'u-italic': true } },
        { html: 'r', class: { 'u-font-ogg': true, 'u-italic': true } },
        { html: 'd', class: {} },
        { html: 'e', class: { 'u-font-ogg': true, 'u-italic': true } },
        { html: 'r', class: { 'u-font-ogg': true, 'u-italic': true } },
        { html: 's', class: { 'u-font-ogg': true, 'u-italic': true } },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.article {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.content {
  width: 70%;
  height: 70%;
  position: relative;
  > * {
    position: absolute;
  }
}
.bubble {
  background-color: var(--white);
  width: 300px;
  height: 300px;
  border-radius: 50%;
  left: 10%;
  animation-delay: 1s;
}
.cross, .the, .borders {
  font-size: 3.5rem;
  font-weight: 300;
}
.cross {
  top: 10%;
  left: 15%;
}
.the {
  top: 20%;
  right: 20%;
}
.borders {
  top: 40%;
}
.image-container {
  top: 40%;
  right: 0;
  overflow: hidden;
}
img {
  width: 250px;
  height: 100px;
  object-fit: cover;
  animation-name: appear-up;
  animation-duration: 1s;
  animation-delay: 2.5s;
  animation-fill-mode: both;
}
.desc {
  bottom: 5rem;
  display: flex;
  overflow: hidden;
  .text {
    font-size: .8rem;
    width: 70%;
    animation-name: appear-up;
    animation-duration: 1s;
    animation-delay: 3s;
    animation-fill-mode: both;
  }
  .number {
    width: 30%;
    text-align: right;
    animation-name: appear-up;
    animation-duration: 1s;
    animation-delay: 3.5s;
    animation-fill-mode: both;
  }
}
@keyframes appear-up {
  from {
    transform: translateY(200%);
  }
  to {
    transform: translateY(0%)s;
  }
}
</style>
