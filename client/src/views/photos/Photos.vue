<template>
  <div>
    <NavBar/>
    <div class="stories">
      <div v-for="i of 7" :key="i" class="story" :style="{ 'flex-grow': flexGrows[i-1] }"/>
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
}
.story {
  flex-basis: 0;
  background-color: black;
  transition: flex-grow .5s;
  @for $i from 1 through 7 {
    &:nth-child(#{$i}) {
      opacity: $i / 7;
    }
  }
}
</style>
