<template>
  <div class="story" :class="{ '--home': home }">
    <NavBar/>
    <div class="background" :style="{ backgroundColor: color, ...(home ? backgroundPosition : {}) }"/>
    <Pictures
      :mode="home ? picturesMode : 'hidden'"
      :position="home ? picturesPosition : {}"
      :pictures="randStoryPictures"
      :current="randCurrent"
      @click="goPictures"
    />
    <div class="article">
      <slot/>
    </div>
    <div class="details">
      <div class="prev">
        <img @click="scrollPrev" src="../../assets/arrow-small.svg"/>
      </div>
      <div class="title">
        {{ storyPictures[current].title }}
      </div>
      <div class="picture-spacer"/>
      <div class="place">
        {{ storyPictures[current].place }}
      </div>
      <div class="date">
        {{ storyPictures[current].date.toLocaleString('en', { month: 'long' }) }}
        {{ storyPictures[current].date.getFullYear() }}
      </div>
      <div class="next">
        <img @click="scrollNext" src="../../assets/arrow-small.svg"/>
      </div>
      <div class="back">
        <img @click="goHome" src="../../assets/arrow-medium.svg"/>
        <div class="u-rotate">
          <span v-for="(letter, index) of 'return to the album'.split('')" :key="index">{{ letter }}</span>
        </div>
      </div>
    </div>
    <Footer fixed/>
  </div>
</template>

<script>
import stories from '../../content/stories.json';
import pictures from '../../content/pictures.json';
import Footer from '../Footer.vue';
import NavBar from '../NavBar.vue';
import Pictures from './Pictures.vue';

const createRandMap = (size) => {
  const available = new Set(Array(size).fill().map((_, i) => i));
  const randMap = {};
  for (let i = 0; i < size; i++) {
    const n = [...available][Math.floor(Math.random() * available.size)];
    available.delete(n);
    randMap[i] = n;
  }
  return randMap;
};
const invertMap = (map) => Object.fromEntries(Object.entries(map).map(([key, value]) => [value, key]));

export default {
  components: {
    Footer,
    NavBar,
    Pictures,
  },
  props: [
    'id',
    'color',
    'backgroundPosition',
    'picturesPosition',
    'picturesMode',
  ],
  data() {
    const story = stories.find(({ id }) => id === this.id);
    const srcs = new Set(story.pictures);
    const storyPictures = pictures
      .filter(({ src }) => srcs.has(src))
      .map((s) => ({ ...s, date: new Date(s.date) }));
    const randMap = createRandMap(storyPictures.length);
    const invertedRandMap = invertMap(randMap);
    const randStoryPictures = Array(storyPictures.length).fill().map((_, i) => storyPictures[invertedRandMap[i]]);
    return {
      storyPictures,
      randStoryPictures,
      randMap,
      invertedRandMap,
      home: true,
      randCurrent: 0,
      scrolling: false,
    };
  },
  created() {
    document.addEventListener('keyup', this.onkeyup);
    document.addEventListener('wheel', this.onwheel);
    if (this.$route.query.current) {
      this.randCurrent = this.randMap[+this.$route.query.current];
      this.home = false;
    }
  },
  destroyed() {
    document.removeEventListener('keyup', this.onkeyup);
    document.removeEventListener('wheel', this.onwheel);
  },
  computed: {
    current() {
      return this.invertedRandMap[this.randCurrent];
    },
  },
  methods: {
    updateRoute() {
      this.$router.replace({
        path: this.$route.path,
        query: { current: this.invertedRandMap[this.randCurrent] },
      });
    },
    goPictures() {
      this.home = false;
      this.randCurrent = 0;
      this.updateRoute();
    },
    goHome() {
      this.home = true;
      this.$router.replace({ path: this.$route.path, query: {} });
    },
    onkeyup(evt) {
      if (evt.key === 'ArrowRight') this.scrollNext();
      if (evt.key === 'ArrowLeft') this.scrollPrev();
      if (evt.key === 'Escape') {
        if (this.home) {
          this.$router.go(-1);
        } else {
          this.home = true;
        }
      }
    },
    onwheel(evt) {
      if (this.home) return;
      if (evt.deltaY > 0) this.scrollNext();
      if (evt.deltaY < 0) this.scrollPrev();
    },
    scrollNext() {
      this.scrollTo((this.randCurrent + 1) % this.storyPictures.length);
    },
    scrollPrev() {
      this.scrollTo((this.storyPictures.length + this.randCurrent - 1) % this.storyPictures.length);
    },
    scrollTo(index) {
      if (this.scrolling) return;
      this.scrolling = true;
      setTimeout(() => { this.scrolling = false; }, 500);
      this.randCurrent = index;
      this.updateRoute();
    },
  },
};
</script>

<style lang="scss" scoped>
.background {
  position: fixed;
  transition: all .5s;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.article {
  transition: all .5s;
  opacity: 0;
}
.details {
  transition: all .5s;
  opacity: 1;
  position: fixed;
  display: flex;
  top: 0;
  right: 5vw;
  bottom: 0;
  left: 5vw;
  align-items: center;
  justify-content: space-around;

  .prev {
    width: 2vw;
    img {
      transform: translateY(.1rem) rotate(180deg);
      &:hover {
        cursor: pointer;
        opacity: 0.5;
      }
    }
  }
  .title {
    width: 15vw;
    text-align: center;
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
      transform: translateY(.1rem);
      &:hover {
        cursor: pointer;
        opacity: 0.5;
      }
    }
  }

  .back {
    position: fixed;
    img {
      width: 2rem;
      transition: all .5s;
      position: absolute;
      transform: translate(-50%, -50%) rotate(180deg);
    }
    span {
      text-transform: uppercase;
      position: absolute;
      font-size: .6rem;
    }
    @for $i from 1 through 20 {
      span:nth-child(#{$i}) {
        transform: translate(-50%, -50%) rotate(#{360 / 22 * $i}deg) translateY(-2rem);
      }
    }
    &:hover {
      cursor: pointer;
      img {
        transform: translate(-50%, -50%) rotate(180deg) scale(.7);
      }
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
@media screen and (max-width: 900px) {
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
}
</style>
