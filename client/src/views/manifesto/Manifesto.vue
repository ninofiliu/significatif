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
          <div style="font-weight: 300">
            <!-- TODO use a pretty arrow -->
            &darr;
          </div>
        </div>
      </div>
      <hr>
      <div class="more">
        <div class="left">
          <div class="text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis sunt laborum facere id ut aut repudiandae unde quas excepturi impedit. Natus vitae ea, aut ab quod fugit praesentium sequi officiis!
          </div>
          <div class="star">
            <img src="../../assets/star.svg">
          </div>
        </div>
        <div class="right">
          Lorem, ipsum <img :src="`${$s}17.jpg`" class="text-img"> sit amet consectetur adipisicing elit. Maiores perferendis inventore hic, quo doloribus a veniam, quisquam vel aut voluptatum <img :src="`${$s}15.jpg`" class="text-img">, corporis sequi exercitationem explicabo illum! Hic saepe necessitatibus beatae!
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

export default {
  components: {
    AppearingLine,
    Footer,
    NavBar,
    PicturesSnake,
  },
  data() {
    return {
      letMeTell: [
        { html: 'L', class: {} },
        { html: 'e', class: {} },
        { html: 't', class: {} },
        { html: '&nbsp;', class: {} },
        { html: 'm', class: {} },
        { html: 'e', class: {} },
        { html: '&nbsp;', class: {} },
        { html: 't', class: { underline: true } },
        { html: 'e', class: { underline: true } },
        { html: 'l', class: { underline: true } },
        { html: 'l', class: { underline: true } },
      ],
      youAStory: [
        { html: 'y', class: {} },
        { html: 'o', class: {} },
        { html: 'u', class: {} },
        { html: '&nbsp;', class: {} },
        { html: 'a', class: {} },
        { html: '&nbsp;', class: {} },
        { html: 's', class: {} },
        { html: 't', class: { 'font-ogg-italic': true } },
        { html: 'o', class: {} },
        { html: 'r', class: {} },
        { html: 'y', class: {} },
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
    transform: translateX(-1200px) translateY(-800px) translateZ(-50px);
  }
  &.small {
    width: 180px;
    height: 180px;
    transform: translateX(50px) translateY(50px) translateZ(30px);
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
    font-size: 110px;
    text-transform: uppercase;
    pointer-events: none;
    z-index: 100;
  }
}
hr {
  margin-top: 0;
  margin-bottom: 50px;
  position: relative;
  z-index: 100;
}
.more {
  margin-bottom: 230px;
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 100;
  .left {
    width: 30%;
    .star {
      margin-top: 16px;
      text-align: right;
      img {
        height: 38px;
      }
    }
  }
  .right {
    width: 60%;
    font-size: 40px;
    text-transform: uppercase;
  }
}
</style>
