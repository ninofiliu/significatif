<template>
  <div class="Manifesto">
    <div class="bubble big" />
    <div class="bubble small" />
    <div class="center">
      <div class="landing">
        <PicturesSnake />
        <div class="text-desktop">
          <AppearingLine :chars="letMeTell" />
          <AppearingLine :chars="youAStory" :start="-10" />
          <img src="../../assets/arrow-large.svg" />
        </div>
        <div class="text-mobile">
          <AppearingLine :chars="letMe" />
          <AppearingLine :chars="tellYou" :start="-8" />
          <AppearingLine :chars="aStory" :start="-16" />
          <img src="../../assets/arrow-large.svg" />
        </div>
      </div>
      <hr />
      <div class="more">
        <div class="left">
          <div class="text u-comfort">
            {{ manifestoContent.leftText }}
          </div>
          <div class="star">
            <img class="u-rotate" src="../../assets/star.svg" />
          </div>
        </div>
        <div class="right u-comfort">
          <span v-for="(fragment, i) of manifestoContent.rightText" :key="i">
            <span v-if="fragment.type === 'text'">
              {{ fragment.content }}
            </span>
            <span v-if="fragment.type === 'image'">
              <img
                loading="lazy"
                :src="STATIC_BASE + fragment.content"
                class="u-text-img"
              />
            </span>
          </span>
          <p>Bienvenue sur Significatif /</p>
        </div>
      </div>
    </div>
    <NavBar />
    <Footer />
  </div>
</template>

<script>
import AppearingLine from "../../components/AppearingLine.vue";
import NavBar from "../../components/NavBar.vue";
import Footer from "../../components/Footer.vue";
import PicturesSnake from "./PicturesSnake.vue";
import manifestoContent from "../../content/manifesto.json";
import { STATIC_BASE } from "../../globals";

const words = {
  space: { html: "&nbsp;", class: {} },
  let: [
    { html: "L", class: {} },
    { html: "E", class: {} },
    { html: "T", class: {} },
  ],
  me: [
    { html: "M", class: {} },
    { html: "E", class: {} },
  ],
  tell: [
    { html: "T", underline: true },
    { html: "E", underline: true },
    { html: "L", underline: true },
    { html: "L", underline: true },
  ],
  you: [
    { html: "Y", class: {} },
    { html: "O", class: {} },
    { html: "U", class: {} },
  ],
  a: [{ html: "A", class: {} }],
  story: [
    { html: "S", class: {} },
    { html: "T", class: {} },
    { html: "m", class: { "u-font-good-glyphs": true } },
    { html: "R", class: {} },
    { html: "Y", class: {} },
    { html: ".", class: {} },
  ],
};

const letMeTell = [
  ...words.let,
  words.space,
  ...words.me,
  words.space,
  ...words.tell,
];
const youAStory = [
  ...words.you,
  words.space,
  ...words.a,
  words.space,
  ...words.story,
];
const letMe = [...words.let, words.space, ...words.me];
const tellYou = [...words.tell, words.space, ...words.you];
const aStory = [...words.a, words.space, ...words.story];

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
      letMeTell,
      youAStory,
      letMe,
      tellYou,
      aStory,
      STATIC_BASE,
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
    transform: translateX(50px) translateY(50px) translateZ(30px) scale(0);
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
  img {
    transform: translateY(9rem);
  }
}
.text-desktop {
  font-size: 5.5rem;
  pointer-events: none;
  z-index: 100;
}
.text-mobile {
  display: none;
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

@media (max-aspect-ratio: 1/1) {
  .text-desktop {
    display: none;
  }
  .text-mobile {
    display: block;
    font-size: 3.5rem;
    pointer-events: none;
    z-index: 100;
  }
  @keyframes scaleup-big {
    from {
      transform: translateX(-225vw) translateY(-125vh) translateZ(-50px)
        scale(0);
    }
    to {
      transform: translateX(-225vw) translateY(-125vh) translateZ(-50px)
        scale(1);
    }
  }
  .more {
    flex-direction: column;
    .left {
      width: 100%;
    }
    .right {
      width: 100%;
      font-size: 1.7rem;
      margin-top: 3rem;
    }
  }
}
</style>
