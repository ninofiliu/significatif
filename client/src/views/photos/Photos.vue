<template>
  <div>
    <NavBar/>
    <div class="stories">
      <div class="story pedal-to-the-metal" :style="{ 'flex-grow': flexGrows[6] }">
        <div class="story-content">
          content
        </div>
      </div>
      <div class="story vous-etes-des-animaux" :style="{ 'flex-grow': flexGrows[5] }">
        <div class="story-content">
          content
        </div>
      </div>
      <div class="story cross-the-borders" :style="{ 'flex-grow': flexGrows[4] }">
        <div class="story-content">
          content
        </div>
      </div>
      <div class="story silent-photography" :style="{ 'flex-grow': flexGrows[3] }">
        <div class="story-content">
          content
        </div>
      </div>
      <div class="story humans" :style="{ 'flex-grow': flexGrows[2] }">
        <div class="story-content">
          content
        </div>
      </div>
      <div class="story taste-of-farniente" :style="{ 'flex-grow': flexGrows[1] }">
        <div class="story-content">
          content
        </div>
      </div>
      <div class="story home" :style="{ 'flex-grow': flexGrows[0] }">
        <div class="story-content">
          content
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '../../components/NavBar.vue';
import covers from '../../content/covers.json';

export default {
  components: {
    NavBar,
  },
  data() {
    return {
      covers,
      current: 0,
      scrolling: false,
    };
  },
  created() {
    document.addEventListener('wheel', this.onWheel);
  },
  beforeDestroy() {
    document.removeEventListener('wheel', this.onWheel);
  },
  computed: {
    flexGrows() {
      return [
        [16, 5, 3, 1, 1, 1, 1],
        [5, 12, 5, 3, 1, 1, 1],
        [3, 5, 10, 5, 3, 1, 1],
        [1, 3, 5, 10, 5, 3, 1],
        [1, 1, 3, 5, 10, 5, 3],
        [1, 1, 1, 3, 5, 12, 5],
        [1, 1, 1, 1, 3, 5, 16],
      ][this.current];
    },
  },
  methods: {
    onWheel(evt) {
      if (this.scrolling) return;
      if (evt.deltaY > 0) {
        this.scrolling = true;
        setTimeout(() => {
          this.scrolling = false;
        }, 300);
        this.current = Math.min(6, this.current + 1);
      }
      if (evt.deltaY < 1) {
        this.scrolling = true;
        setTimeout(() => {
          this.scrolling = false;
        }, 300);
        this.current = Math.max(0, this.current - 1);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.stories {
  position: fixed;
  top: 3rem;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: row-reverse;
}
.story {
  flex-basis: 0;
  transition: flex-grow .5s;
  position: relative;
}
.story-content {
  --unit: calc(100vw / 28); // 28 = sum of all flex grows
  position: absolute;
  right: var(--unit);
  top: var(--unit);
  width: calc(8 * var(--unit));
  height: calc(100vh - 3rem - 2 * var(--unit));
}

.home {
  background-color: var(--orange);
}
.taste-of-farniente {
  background-color: var(--yellow);
}
.humans {
  background-color: var(--purple);
}
.cross-the-borders {
  background-color: var(--orange);
}
.silent-photography {
  background-color: var(--white);
}
.vous-etes-des-animaux {
  background-color: var(--yellow);
}
.pedal-to-the-metal {
  background-color: var(--purple);
}
</style>
