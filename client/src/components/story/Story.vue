<template>
  <div class="story" :class="{ '--home': home }">
    <NavBar/>
    <div class="background" :style="{ backgroundColor: color, ...(home ? backgroundPosition : {}) }"/>
    <Pictures
      :mode="home ? picturesMode : 'hidden'"
      :position="home ? picturesPosition : {}"
      :pictures="pictures"
      :current="current"
      @click="goPictures"
    />
    <div class="article">
      <slot/>
    </div>
    <div class="details">
      <div class="back" @click="goHome">
        &larr;
      </div>
      <div class="title u-italic u-font-ogg">
        {{ pictures[current].title }}
      </div>
      <div class="date">
        {{ pictures[current].date.toLocaleString('en', { month: 'long' }) }}
        {{ pictures[current].date.getFullYear() }}
      </div>
      <div class="place">
        {{ pictures[current].place }}
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
      if (evt.deltaX > 0) this.scrollNext();
      if (evt.deltaX < 0) this.scrollPrev();
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
  top: 3rem;
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
  .back {
    position: fixed;
    top: 10vh;
    left: 10vw;
    font-size: 3rem;
    &:hover {
      cursor: pointer;
      opacity: 0.5;
    }
  }
  .title {
    position: fixed;
    top: 45vh;
    left: 5vw;
    font-size: 2rem;
  }
  .date {
    position: fixed;
    top: 55vh;
    left: 15vw;
  }
  .place {
    position: fixed;
    right: 7vw;
    bottom: 10vh;
    writing-mode: vertical-lr;
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
