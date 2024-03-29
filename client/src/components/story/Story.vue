<template>
  <div class="story" :class="{ '--home': home }">
    <NavBar />
    <div class="swipable" :class="{ '--next': shift < 0, '--prev': shift > 0 }">
      <div
        class="background"
        :style="{ backgroundColor: color, ...(home ? backgroundPosition : {}) }"
      />
      <Pictures
        :mode="home ? picturesMode : 'hidden'"
        :position="home ? picturesPosition : {}"
        :pictures="randStoryPictures"
        :current="randCurrent"
        @click="goPictures"
      />
      <div class="article">
        <slot />
      </div>
      <div class="details" v-if="!home">
        <div class="prev">
          <img @click="scrollPrev" src="../../assets/arrow-small.svg" />
        </div>
        <div class="desktop-title">
          {{ randStoryPictures[randCurrent].title }}
        </div>
        <div class="picture-spacer" />
        <div class="date">
          <div class="mobile-title">
            {{ randStoryPictures[randCurrent].title }}
          </div>
          <div>{{ randStoryPictures[randCurrent].place }}</div>
          <div>
            {{
              randStoryPictures[randCurrent].date.toLocaleString("en", {
                month: "long",
              })
            }}
            {{ randStoryPictures[randCurrent].date.getFullYear() }}
          </div>
        </div>
        <div class="next">
          <img @click="scrollNext" src="../../assets/arrow-small.svg" />
        </div>
        <div class="back">
          <img @click="goHome" src="../../assets/arrow-medium.svg" />
          <div class="u-rotate">
            <span
              v-for="(letter, index) of 'return to the album'.split('')"
              :key="index"
              >{{ letter }}</span
            >
          </div>
        </div>
      </div>
    </div>
    <Footer fixed />
  </div>
</template>

<script>
import stories from "../../content/stories.json";
import pictures from "../../content/pictures.json";
import Footer from "../Footer.vue";
import NavBar from "../NavBar.vue";
import Pictures from "./Pictures.vue";
import { STATIC_BASE } from "../../globals";

let prevShift;

const createRandMap = (size) => {
  const available = new Set(
    Array(size)
      .fill()
      .map((_, i) => i)
  );
  const randMap = {};
  for (let i = 0; i < size; i++) {
    const n = [...available][Math.floor(Math.random() * available.size)];
    available.delete(n);
    randMap[i] = n;
  }
  return randMap;
};
const invertMap = (map) =>
  Object.fromEntries(Object.entries(map).map(([key, value]) => [value, key]));

export default {
  components: {
    Footer,
    NavBar,
    Pictures,
  },
  props: [
    "id",
    "color",
    "backgroundPosition",
    "picturesPosition",
    "picturesMode",
  ],
  data() {
    const story = stories.find(({ id }) => id === this.id);
    const srcs = new Set(story.pictures);
    const storyPictures = pictures
      .filter(({ src }) => srcs.has(src))
      .map((s) => ({ ...s, src: STATIC_BASE + s.src, date: new Date(s.date) }));
    const randMap = createRandMap(storyPictures.length);
    const invertedRandMap = invertMap(randMap);
    const randStoryPictures = Array(storyPictures.length)
      .fill()
      .map((_, i) => storyPictures[invertedRandMap[i]]);
    return {
      storyPictures,
      randStoryPictures,
      randMap,
      invertedRandMap,
      home: true,
      randCurrent: 0,
      scrolling: false,
      xAtStart: null,
      shift: 0,
      goingToStory: false,
    };
  },
  created() {
    this.startListening();
    if (this.$route.query.current) {
      this.randCurrent = this.randMap[+this.$route.query.current];
      this.home = false;
    }
    if (prevShift) {
      this.shift = -prevShift;
      this.goingToStory = true;
      setTimeout(() => {
        this.shift = 0;
        prevShift = undefined;
        this.goingToStory = false;
      }, 250);
    }
  },
  destroyed() {
    this.stopListening();
  },
  computed: {
    current() {
      return this.invertedRandMap[this.randCurrent];
    },
  },
  methods: {
    startListening() {
      document.addEventListener("keyup", this.onkeyup);
      document.addEventListener("touchstart", this.ontouchstart);
      document.addEventListener("touchend", this.ontouchend);
    },
    stopListening() {
      document.removeEventListener("keyup", this.onkeyup);
      document.removeEventListener("touchstart", this.ontouchstart);
      document.removeEventListener("touchend", this.ontouchend);
    },
    updateRoute() {
      this.$router.replace({
        path: this.$route.path,
        query: { current: this.invertedRandMap[this.randCurrent] },
      });
    },
    goPictures(index) {
      if (!this.home) return;
      this.home = false;
      this.randCurrent = index;
      this.updateRoute();
    },
    goHome() {
      this.home = true;
      this.$router.replace({ path: this.$route.path, query: {} });
    },
    onkeyup(evt) {
      if (evt.key === "ArrowRight") {
        if (this.home) {
          this.goToStory(+1);
        } else {
          this.scrollNext();
        }
      }
      if (evt.key === "ArrowLeft") {
        if (this.home) {
          this.goToStory(-1);
        } else {
          this.scrollPrev();
        }
      }
      if (evt.key === "Escape") {
        if (this.home) {
          this.$router.go(-1);
        } else {
          this.home = true;
        }
      }
    },
    ontouchstart(evt) {
      this.xAtStart = evt.touches[0].clientX;
    },
    ontouchend(evt) {
      const xAtEnd = evt.changedTouches[0].clientX;
      if (this.xAtStart < xAtEnd - window.innerWidth / 10) {
        if (this.home) {
          this.goToStory(-1);
        } else {
          this.scrollPrev();
        }
      }
      if (this.xAtStart > xAtEnd + window.innerWidth / 10) {
        if (this.home) {
          this.goToStory(+1);
        } else {
          this.scrollNext();
        }
      }
      this.xAtStart = null;
    },
    scrollNext() {
      this.scrollTo((this.randCurrent + 1) % this.storyPictures.length);
    },
    scrollPrev() {
      this.scrollTo(
        (this.storyPictures.length + this.randCurrent - 1) %
          this.storyPictures.length
      );
    },
    scrollTo(index) {
      if (this.scrolling) return;
      this.scrolling = true;
      setTimeout(() => {
        this.scrolling = false;
      }, 500);
      this.randCurrent = index;
      this.updateRoute();
    },
    goToStory(shift) {
      if (this.goingToStory) return;
      this.stopListening();
      this.goingToStory = true;
      const nextIndex =
        (stories.length +
          stories.findIndex((story) => story.id === this.id) +
          shift) %
        stories.length;
      this.shift = shift;
      setTimeout(() => {
        prevShift = shift;
        this.goingToStory = false;
        this.$router.push(`/photos/${stories[nextIndex].id}`);
      }, 250);
    },
  },
};
</script>

<style lang="scss" scoped>
.swipable {
  transition: all 0.5s;
  height: 100vh;
  &.--next {
    transform: translateX(100vw);
  }
  &.--prev {
    transform: translateX(-100vw);
  }
}
.background {
  position: fixed;
  transition: all 0.5s;
  inset: 0 0 0 0;
}
.article {
  transition: all 0.5s;
  opacity: 0;
}
.details {
  transition: all 0.5s;
  opacity: 1;
  position: fixed;
  display: flex;
  top: 0;
  right: 5vw;
  bottom: 0;
  left: 5vw;
  align-items: center;
  justify-content: space-around;
}

.prev {
  width: 2vw;
  img {
    transform: translateY(0.1rem) rotate(180deg);
    &:hover {
      cursor: pointer;
      opacity: 0.5;
    }
  }
}
.desktop-title {
  width: 15vw;
  text-align: center;
}
.mobile-title {
  display: none;
}
.picture-spacer {
  width: 50vw;
}
.date {
  width: 15vw;
  text-align: center;
}
.next {
  width: 2vw;
  img {
    transform: translateY(0.1rem);
    &:hover {
      cursor: pointer;
      opacity: 0.5;
    }
  }
}
.prev,
.next {
  display: flex;
  justify-content: center;
}

.back {
  position: fixed;
  img {
    width: 2rem;
    transition: all 0.5s;
    position: absolute;
    transform: translate(-50%, -50%) rotate(180deg);
  }
  span {
    text-transform: uppercase;
    position: absolute;
    font-size: 0.6rem;
  }
  @for $i from 1 through 20 {
    span:nth-child(#{$i}) {
      transform: translate(-50%, -50%)
        rotate(#{calc(360 / 22) * $i}deg)
        translateY(-2rem);
    }
  }
  &:hover {
    cursor: pointer;
    img {
      transform: translate(-50%, -50%) rotate(180deg) scale(0.7);
    }
  }
}

.--home {
  .article {
    opacity: 1;
  }
  .details {
    opacity: 0;
  }
}

@media screen and (min-width: 900px) {
  .place {
    position: fixed;
    text-align: right;
    bottom: 20vh;
    right: 5vw;
    transform: rotate(90deg);
  }
  .back {
    top: 15vh;
    left: 15vh;
  }
}
@media (max-aspect-ratio: 1/1) {
  .details {
    top: 60vh;
  }
  .picture-spacer {
    display: none;
  }
  .back {
    top: 15vh;
    left: 15vw;
  }
  .desktop-title {
    display: none;
  }
  .mobile-title {
    display: block;
  }
  .date {
    width: calc(100% - 4vw);
  }
  .background {
    inset: 0 0 0 0 !important;
  }
}
</style>
