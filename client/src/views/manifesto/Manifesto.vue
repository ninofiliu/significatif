<template>
  <div class="Manifesto">
    <NavBar/>
    <div class="center">
      <div class="landing">
        <PicturesSnake/>
        <div class="text">
          <AppearingLine :chars="letMeTell"/>
          <AppearingLine :chars="youAStory" :start="-10"/>
          <div style="font-weight: 300">&darr;</div>
        </div>
      </div>
      <hr>
      <div class="more">
        <div class="left">
          <div class="text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis sunt laborum facere id ut aut repudiandae unde quas excepturi impedit. Natus vitae ea, aut ab quod fugit praesentium sequi officiis!
          </div>
          <div class="star">
            star
          </div>
        </div>
        <div class="right">
          Lorem, ipsum <img src="/static/manifesto-text-1.jpg"> sit amet consectetur adipisicing elit. Maiores perferendis inventore hic, quo doloribus a veniam, quisquam vel aut voluptatum <img src="/static/manifesto-text-2.jpg">, corporis sequi exercitationem explicabo illum! Hic saepe necessitatibus beatae!
        </div>
      </div>
    </div>
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
  border: 3px solid var(--red);
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
  }
  .right {
    width: 60%;
    font-size: 40px;
    text-transform: uppercase;
    img {
      height: 1em;
      transform: translateY(.1em);
    }
  }
}
</style>
