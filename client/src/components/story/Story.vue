<template>
  <div class="story" :class="{ '--home': home }">
    <NavBar/>
    <div class="background" :style="{ backgroundColor: color, ...(home ? backgroundPosition : {}) }"/>
    <div class="article">
      <slot/>
    </div>
    <div class="details">
      <div class="prev">
        <img @click="scrollPrev" :src="`${$s}assets/arrow.svg`"/>
      </div>
      <div class="title">
        {{ pictures[current].title }}
      </div>
      <div class="picture-spacer"/>
      <div class="date">
        {{ pictures[current].date.toLocaleString('en', { month: 'long' }) }}
        {{ pictures[current].date.getFullYear() }}
      </div>
      <div class="next">
        <img @click="scrollNext" :src="`${$s}assets/arrow.svg`"/>
      </div>
      <img class="back" @click="goHome" :src="`${$s}assets/arrow.svg`"/>
      <div class="place">
        {{ pictures[current].place }}
      </div>
    </div>
    <Pictures
      :mode="home ? picturesMode : 'hidden'"
      :position="home ? picturesPosition : {}"
      :pictures="pictures"
      :current="current"
      @click="goPictures"
    />
    <Footer fixed/>
  </div>
</template>

<script>
import stories from '../../content/stories.json';
import pictures from '../../content/pictures.json';
import Footer from '../Footer.vue';
import NavBar from '../NavBar.vue';
import Pictures from './Pictures.vue';

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
    return {
      pictures: storyPictures,
      home: true,
      current: 0,
      scrolling: false,
    };
  },
  created() {
    document.addEventListener('keyup', this.onkeyup);
    document.addEventListener('wheel', this.onwheel);
    if (this.$route.query.current) {
      this.current = +this.$route.query.current;
      this.home = false;
    }
  },
  destroyed() {
    document.removeEventListener('keyup', this.onkeyup);
    document.removeEventListener('wheel', this.onwheel);
  },
  methods: {
    goPictures() {
      this.home = false;
      this.current = 0;
      this.$router.replace({ path: this.$route.path, query: { current: 0 } });
    },
    goHome() {
      this.home = true;
      this.$router.replace({ path: this.$route.path, query: {} });
    },
    onkeyup(evt) {
      if (evt.key === 'ArrowRight') this.scrollNext();
      if (evt.key === 'ArrowLeft') this.scrollPrev();
    },
    onwheel(evt) {
      if (this.home) return;
      if (evt.deltaY > 0) this.scrollNext();
      if (evt.deltaY < 0) this.scrollPrev();
    },
    scrollNext() {
      this.scrollTo((this.current + 1) % this.pictures.length);
    },
    scrollPrev() {
      this.scrollTo((this.pictures.length + this.current - 1) % this.pictures.length);
    },
    scrollTo(index) {
      if (this.scrolling) return;
      this.scrolling = true;
      setTimeout(() => { this.scrolling = false; }, 500);
      this.current = index;
      this.$router.replace({ path: this.$route.path, query: { current: index } });
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
      transform: translateY(.1rem) rotate(90deg);
      width: 1rem;
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
      transform: translateY(.1rem) rotate(-90deg);
      width: 1rem;
      &:hover {
        cursor: pointer;
        opacity: 0.5;
      }
    }
  }

  .back {
    position: fixed;
    top: 10vh;
    left: 10vw;
    transform: rotate(90deg);
    width: 2rem;
    &:hover {
      cursor: pointer;
      opacity: 0.5;
    }
  }
  .place {
    position: fixed;
    text-align: right;
    bottom: 20vh;
    right: 5vw;
    transform: rotate(90deg);
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
</style>
