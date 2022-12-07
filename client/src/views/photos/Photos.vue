<template>
  <div>
    <NavBar />
    <div class="stories --desktop">
      <RouterLink
        to="/photos/self-portraits"
        class="story"
        :style="{ 'flex-grow': flexGrows[9] }"
      >
        <div class="story-content">
          <img v-media="covers['self-portraits'].img" />
          <div class="title">AUTOPORTRAITS</div>
          <div class="text u-comfort">
            <p v-for="p of covers['self-portraits'].txt" :key="p">{{ p }}</p>
          </div>
        </div>
      </RouterLink>

      <RouterLink
        to="/photos/silent-photography"
        class="story"
        :style="{ 'flex-grow': flexGrows[8] }"
      >
        <div class="story-content">
          <img v-media="covers['silent-photography'].img" />
          <div class="title">SILENT PHOTOGRAPHY</div>
          <div class="text u-comfort">
            <p v-for="p of covers['silent-photography'].txt" :key="p">
              {{ p }}
            </p>
          </div>
        </div>
      </RouterLink>

      <RouterLink
        to="/photos/cross-the-borders"
        class="story"
        :style="{ 'flex-grow': flexGrows[7] }"
      >
        <div class="story-content">
          <img v-media="covers['cross-the-borders'].img" />
          <div class="title">
            CR<span class="u-font-good-glyphs">q</span>SS THE BORDERS
          </div>
          <div class="text u-comfort">
            <p v-for="p of covers['cross-the-borders'].txt" :key="p">{{ p }}</p>
          </div>
        </div>
      </RouterLink>

      <RouterLink
        to="/photos/taste-of-farniente"
        class="story"
        :style="{ 'flex-grow': flexGrows[6] }"
      >
        <div class="story-content">
          <img v-media="covers['taste-of-farniente'].img" />
          <div class="title">
            TASTE <span class="u-font-good-glyphs">g</span>F FARNIENTE
          </div>
          <div class="text u-comfort">
            <p v-for="p of covers['taste-of-farniente'].txt" :key="p">
              {{ p }}
            </p>
          </div>
        </div>
      </RouterLink>

      <RouterLink
        to="/photos/pedal-to-the-metal"
        class="story"
        :style="{ 'flex-grow': flexGrows[5] }"
      >
        <div class="story-content">
          <img v-media="covers['pedal-to-the-metal'].img" />
          <div class="title">
            PEDAL T<span class="u-font-good-glyphs">Y</span> THE METAL
          </div>
          <div class="text u-comfort">
            <p v-for="p of covers['pedal-to-the-metal'].txt" :key="p">
              {{ p }}
            </p>
          </div>
        </div>
      </RouterLink>

      <RouterLink
        to="/photos/ride-shoot-repeat"
        class="story"
        :style="{ 'flex-grow': flexGrows[4] }"
      >
        <div class="story-content">
          <img v-media="covers['ride-shoot-repeat'].img" />
          <div class="title">RIDE, SHOOT, REPEAT</div>
          <div class="text u-comfort">
            <p v-for="p of covers['ride-shoot-repeat'].txt" :key="p">{{ p }}</p>
          </div>
        </div>
      </RouterLink>

      <RouterLink
        to="/photos/vous-etes-des-animaux"
        class="story"
        :style="{ 'flex-grow': flexGrows[3] }"
      >
        <div class="story-content">
          <img v-media="covers['vous-etes-des-animaux'].img" />
          <div class="title">
            VOU<span class="u-font-good-glyphs">G</span> ÊTES DES ANIMAUX
          </div>
          <div class="text u-comfort">
            <p v-for="p of covers['vous-etes-des-animaux'].txt" :key="p">
              {{ p }}
            </p>
          </div>
        </div>
      </RouterLink>

      <RouterLink
        to="/photos/ocular-pleasure"
        class="story"
        :style="{ 'flex-grow': flexGrows[2] }"
      >
        <div class="story-content">
          <img v-media="covers['ocular-pleasure'].img" />
          <div class="title">OCULAR PLEASURE</div>
          <div class="text u-comfort">
            <p v-for="p of covers['ocular-pleasure'].txt" :key="p">{{ p }}</p>
          </div>
        </div>
      </RouterLink>

      <RouterLink
        to="/photos/humans"
        class="story"
        :style="{ 'flex-grow': flexGrows[1] }"
      >
        <div class="story-content">
          <img v-media="covers['humans'].img" />
          <div class="title">HUMANS</div>
          <div class="text u-comfort">
            <p v-for="p of covers['humans'].txt" :key="p">{{ p }}</p>
          </div>
        </div>
      </RouterLink>

      <div class="story home" :style="{ 'flex-grow': flexGrows[0] }">
        <div class="story-content">
          <div class="mood">What's your mood today?</div>
          <div class="pick">
            Pick <span class="one u-font-ogg u-italic">one</span>
          </div>
          <div class="arrow u-oscillate-x">
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
      <RouterLink to="/photos/humans" class="story">
        <div class="story-content">
          <img v-media="covers['humans'].img" />
          <div class="title">HUMANS</div>
          <div class="text u-comfort">
            <p v-for="p of covers['humans'].txt" :key="p">{{ p }}</p>
          </div>
        </div>
      </RouterLink>
      <RouterLink to="/photos/ocular-pleasure" class="story">
        <div class="story-content">
          <img v-media="covers['ocular-pleasure'].img" />
          <div class="title">OCULAR PLEASURE</div>
          <div class="text u-comfort">
            <p v-for="p of covers['ocular-pleasure'].txt" :key="p">{{ p }}</p>
          </div>
        </div>
      </RouterLink>
      <RouterLink to="/photos/vous-etes-des-animaux" class="story">
        <div class="story-content">
          <img v-media="covers['vous-etes-des-animaux'].img" />
          <div class="title">
            VOU<span class="u-font-good-glyphs">G</span> ÊTES DES ANIMAUX
          </div>
          <div class="text u-comfort">
            <p v-for="p of covers['vous-etes-des-animaux'].txt" :key="p">
              {{ p }}
            </p>
          </div>
        </div>
      </RouterLink>
      <RouterLink to="/photos/ride-shoot-repeat" class="story">
        <div class="story-content">
          <img v-media="covers['ride-shoot-repeat'].img" />
          <div class="title">RIDE, SHOOT, REPEAT</div>
          <div class="text u-comfort">
            <p v-for="p of covers['ride-shoot-repeat'].txt" :key="p">{{ p }}</p>
          </div>
        </div>
      </RouterLink>
      <RouterLink to="/photos/pedal-to-the-metal" class="story">
        <div class="story-content">
          <img v-media="covers['pedal-to-the-metal'].img" />
          <div class="title">
            PEDAL T<span class="u-font-good-glyphs">Y</span> THE METAL
          </div>
          <div class="text u-comfort">
            <p v-for="p of covers['pedal-to-the-metal'].txt" :key="p">
              {{ p }}
            </p>
          </div>
        </div>
      </RouterLink>
      <RouterLink to="/photos/taste-of-farniente" class="story">
        <div class="story-content">
          <img v-media="covers['taste-of-farniente'].img" />
          <div class="title">
            TASTE <span class="u-font-good-glyphs">g</span>F FARNIENTE
          </div>
          <div class="text u-comfort">
            <p v-for="p of covers['taste-of-farniente'].txt" :key="p">
              {{ p }}
            </p>
          </div>
        </div>
      </RouterLink>
      <RouterLink to="/photos/cross-the-borders" class="story">
        <div class="story-content">
          <img v-media="covers['cross-the-borders'].img" />
          <div class="title">
            CR<span class="u-font-good-glyphs">q</span>SS THE BORDERS
          </div>
          <div class="text u-comfort">
            <p v-for="p of covers['cross-the-borders'].txt" :key="p">{{ p }}</p>
          </div>
        </div>
      </RouterLink>
      <RouterLink to="/photos/silent-photography" class="story">
        <div class="story-content">
          <img v-media="covers['silent-photography'].img" />
          <div class="title">SILENT PHOTOGRAPHY</div>
          <div class="text u-comfort">
            <p v-for="p of covers['silent-photography'].txt" :key="p">
              {{ p }}
            </p>
          </div>
        </div>
      </RouterLink>
      <RouterLink to="/photos/self-portraits" class="story">
        <div class="story-content">
          <img v-media="covers['self-portraits'].img" />
          <div class="title">AUTOPORTRAITS</div>
          <div class="text u-comfort">
            <p v-for="p of covers['self-portraits'].txt" :key="p">{{ p }}</p>
          </div>
        </div>
      </RouterLink>
    </div>
  </div>
</template>

<script>
import NavBar from "../../components/NavBar.vue";
import covers from "../../content/covers.json";

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
    document.addEventListener("wheel", this.onWheel);
  },
  beforeDestroy() {
    document.removeEventListener("wheel", this.onWheel);
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
  },
  methods: {
    onWheel(evt) {
      if (this.scrolling) return;
      if (evt.deltaY > 0) {
        this.scrolling = true;
        setTimeout(() => {
          this.scrolling = false;
        }, 300);
        this.current = Math.min(9, this.current + 1);
      }
      if (evt.deltaY < 1) {
        this.scrolling = true;
        setTimeout(() => {
          this.scrolling = false;
        }, 300);
        this.current = Math.max(0, this.current - 1);
      }
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
