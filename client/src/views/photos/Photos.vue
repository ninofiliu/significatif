<template>
  <div>
    <NavBar />
    <div class="stories --desktop">
      <RouterLink
        v-for="(cover, i) of coverArr"
        :key="cover.name"
        :to="cover.isLink ? `/photos/${cover.name}` : $route"
        class="story"
        :style="{ 'flex-grow': cover.flexGrow }"
        @click="current = isLink ? current : coverArr.length - i"
      >
        <div class="story-content">
          <img loading="lazy" :src="STATIC_BASE + cover.img" />
          <div class="title" v-html="cover.html" />
          <div class="text u-comfort">
            <p v-for="p of cover.txt" :key="p">{{ p }}</p>
          </div>
        </div>
      </RouterLink>
      <div class="story home" :style="{ 'flex-grow': flexGrows[0] }">
        <div class="story-content">
          <div class="mood">What's your mood today?</div>
          <div class="pick">
            Pick
            <span class="one u-font-ogg u-italic" @click="current = 1"
              >one</span
            >
          </div>
          <div class="arrow u-oscillate-x" @click="current = 1">
            <img src="../../assets/arrow-medium.svg" />
          </div>
        </div>
      </div>
    </div>

    <div class="stories --mobile" ref="mobileStories">
      <div class="story home" :style="{ 'flex-grow': flexGrows[0] }">
        <div class="story-content">
          <div class="mood">What's your mood today?</div>
          <div class="pick" @click="mobileNext">
            Pick <span class="one u-font-ogg u-italic">one</span>
          </div>
          <div class="arrow u-oscillate-x" @click="mobileNext">
            <img src="../../assets/arrow-medium.svg" />
          </div>
        </div>
      </div>
      <RouterLink
        v-for="cover of coverArr"
        :key="cover.name"
        :to="`/photos/${cover.name}`"
        class="story"
      >
        <div class="story-content">
          <img loading="lazy" :src="STATIC_BASE + cover.img" />
          <div class="title" v-html="cover.html" />
          <div class="text u-comfort">
            <p v-for="p of cover.txt" :key="p">{{ p }}</p>
          </div>
        </div>
      </RouterLink>
    </div>
  </div>
</template>

<script>
import NavBar from "../../components/NavBar.vue";
import covers from "../../content/covers.json";
import { STATIC_BASE } from "../../globals";

export default {
  components: {
    NavBar,
  },
  data() {
    return {
      current: 0,
      STATIC_BASE,
    };
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      document.addEventListener("keydown", vm.onKeyPress);
    });
  },
  beforeRouteLeave(to, from, next) {
    next((vm) => {
      document.removeEventListener("keydown", vm.onKeyPress);
    });
  },
  computed: {
    flexGrows() {
      return [
        [8, 8, 2, 1, 1, 1, 1, 1, 1, 1],
        [5, 8, 4, 2, 1, 1, 1, 1, 1, 1],
        [2, 4, 8, 4, 2, 1, 1, 1, 1, 1],
        [1, 2, 4, 8, 4, 2, 1, 1, 1, 1],
        [1, 1, 2, 4, 8, 4, 2, 1, 1, 1],
        [1, 1, 1, 2, 4, 8, 4, 2, 1, 1],
        [1, 1, 1, 1, 2, 4, 8, 4, 2, 1],
        [1, 1, 1, 1, 1, 2, 4, 8, 4, 2],
        [1, 1, 1, 1, 1, 1, 2, 4, 8, 5],
        [1, 1, 1, 1, 1, 1, 1, 2, 8, 8],
      ][this.current];
    },
    coverArr() {
      return Object.entries(covers)
        .reverse()
        .map(([name, cover], index) => ({
          ...cover,
          name,
          flexGrow: this.flexGrows[index + 1],
          isLink: this.flexGrows[index + 1] === Math.max(...this.flexGrows),
        }))
        .reverse();
    },
  },
  methods: {
    onKeyPress(evt) {
      switch (evt.key) {
        case "ArrowRight":
          this.go(this.current + 1);
          break;
        case "ArrowLeft":
          this.go(this.current - 1);
          break;
      }
    },
    go(i) {
      this.current = Math.max(0, Math.min(9, i));
    },
    mobileNext() {
      this.$refs.mobileStories.scroll({
        top: 0,
        left: window.innerWidth,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.stories {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
}
.story {
  flex-basis: 0;
  transition: flex-grow 0.5s;
  position: relative;
  overflow-y: auto;
  &:nth-child(3n + 1) {
    background-color: var(--orange);
  }
  &:nth-child(3n + 2) {
    background-color: var(--yellow);
  }
  &:nth-child(3n + 3) {
    background-color: var(--purple);
  }
  &:nth-child(2n + 1) {
    text-align: center;
  }
}
.story-content {
  img {
    max-width: 100%;
    max-height: 50vh;
    margin-bottom: 1rem;
  }
  .title {
    font-size: 1.5rem;
    padding-bottom: 1rem;
    border-bottom: 2px solid var(--red);
    margin-bottom: 1rem;
  }
  .text {
    font-size: 0.8rem;
  }
}

.home {
  background-color: var(--orange);
  .mood {
    text-transform: uppercase;
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }
  .pick {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
  .one {
    border: 2px solid var(--red);
    border-radius: 50%;
    padding: 0.15em 0.7em;
  }
  .arrow {
    font-size: 4rem;
    img {
      width: 3rem;
    }
  }
}

@media screen and (min-width: 900px) {
  .stories.--mobile {
    display: none;
  }
  .stories {
    flex-direction: row-reverse;
  }
  .story-content {
    transition: all 0.5s;
    --unit: calc(100vw / 25); // 25 = sum of all flex grows
    position: absolute;
    right: var(--unit);
    top: calc(3rem + var(--unit)); // 3rem = navbar height
    width: calc(6 * var(--unit));
    height: calc(100vh - 3rem - 2 * var(--unit));
  }
  a.story:hover .story-content {
    transform: translateY(1rem);
  }
}
@media (max-aspect-ratio: 1/1) {
  .stories.--desktop {
    display: none;
  }
  .stories {
    display: flex;
    overflow-x: scroll;
    width: 100vw;
    scroll-snap-type: x mandatory;
  }
  .story {
    width: 100vw;
    scroll-snap-align: start;
    flex: none;
    padding: 5rem 3rem;
  }
}
</style>
