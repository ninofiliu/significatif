<template>
  <div class="Manifesto">
    <div class="bubble big"/>
    <div class="bubble small"/>
    <div class="center">
      <div class="landing">
        <PicturesSnake/>
        <div class="text">
          <AppearingLine :chars="letMeTell"/>
          <AppearingLine :chars="youAStory" :start="-10"/>
          <img src="../../assets/arrow-large.svg"/>
        </div>
      </div>
      <hr>
      <div class="more">
        <div class="left">
          <div class="text u-extracomfort">
            {{ manifestoContent.leftText }}
          </div>
          <div class="star">
            <img class="u-rotate" src="../../assets/star.svg">
          </div>
        </div>
        <div class="right u-comfort">
          <span v-for="(fragment, i) of manifestoContent.rightText" :key="i">
            <span v-if="fragment.type==='text'">
              {{fragment.content}}
            </span>
            <span v-if="fragment.type==='image'">
              <img :src="`${$s}${fragment.content}`" class="u-text-img">
            </span>
          </span>
        </div>
      </div>
    </div>
    <NavBar/>
    <Footer/>
  </div>
</template>

<script>
import AppearingLine from '../../components/AppearingLine.vue';
import NavBar from '../../components/NavBar.vue';
import Footer from '../../components/Footer.vue';
import PicturesSnake from './PicturesSnake.vue';
import manifestoContent from '../../content/manifesto.json';

export default {
  components: {
    AppearingLine,
    Footer,
    NavBar,
    PicturesSnake,
  },
  data() {
    return {
      manifestoContent,
      letMeTell: [
        { html: 'L', class: {} },
        { html: 'E', class: {} },
        { html: 'T', class: {} },
        { html: '&nbsp;', class: {} },
        { html: 'M', class: {} },
        { html: 'E', class: {} },
        { html: '&nbsp;', class: {} },
        { html: 'T', underline: true },
        { html: 'E', underline: true },
        { html: 'L', underline: true },
        { html: 'L', underline: true },
      ],
      youAStory: [
        { html: 'Y', class: {} },
        { html: 'O', class: {} },
        { html: 'U', class: {} },
        { html: '&nbsp;', class: {} },
        { html: 'A', class: {} },
        { html: '&nbsp;', class: {} },
        { html: 'S', class: {} },
        { html: 'T', class: {} },
        { html: 'm', class: { 'u-font-good-glyphs': true } },
        { html: 'R', class: {} },
        { html: 'Y', class: {} },
        { html: '.', class: {} },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.Manifesto {
  perspective: 100px;
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
  overflow-y: auto;
}
.bubble {
  position: absolute;
  left: 50vw;
  top: 50vh;
  border-radius: 50%;
  background-color: var(--orange);
  &.big {
    width: 1000px;
    height: 1000px;
    animation: scaleup-big;
    animation-duration: 1s;
    animation-delay: 1s;
    animation-fill-mode: both;
  }
  &.small {
    width: 180px;
    height: 180px;
    animation: scaleup-small;
    animation-duration: 1s;
    animation-delay: 0.5s;
    animation-fill-mode: both;
  }
}
@keyframes scaleup-big {
  from {
    transform: translateX(-1200px) translateY(-800px) translateZ(-50px) scale(0);
  }
  to {
    transform: translateX(-1200px) translateY(-800px) translateZ(-50px) scale(1);
  }
}
@keyframes scaleup-small {
  from {
    transform: translateX(50px) translateY(50px) translateZ(30px) scale(0)
  }
  to {
    transform: translateX(50px) translateY(50px) translateZ(30px) scale(1);
  }
}
.center {
  width: 90%;
  margin: auto;
}
.landing {
  display: flex;
  height: 100vh;
  align-items: center;
  position: relative;
  .text {
    font-size: 5.5rem;
    pointer-events: none;
    z-index: 100;
  }
  img {
    transform: translateY(9rem);
  }
}
hr {
  margin-top: 0;
  margin-bottom: 5vh;
  position: relative;
  z-index: 100;
}
.more {
  margin-bottom: 23vh;
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 100;
  .left {
    width: 30%;
    .star {
      margin-top: 1.5vh;
      img {
        height: 4vh;
      }
    }
  }
  .right {
    width: 60%;
    font-size: 2rem;
  }
}
</style>
