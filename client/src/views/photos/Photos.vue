<template>
  <div>
    <NavBar/>
    <div
      class="story pedal-to-the-metal"
      :style="{ transform: `translateX(${translateX[6]}vw)` }"
      @click="current = 6"
    >
      <div>
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <span class="u-italic" style="text-transform: uppercase; font-size: 2rem; padding-bottom: 0.5rem; border-bottom: 2px solid var(--red);">Pedal</span>
          <span class="u-font-good-glyphs" style="font-size: 4rem;">Y</span>
        </div>
        <RouterLink to="/photos/cross-the-borders">
          <img :src="`${$s}8.jpg`" style="height: 25rem;">
        </RouterLink>
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <span class="u-font-good-glyphs" style="font-size: 4rem;">A</span>
          <span class="u-italic" style="text-transform: uppercase; font-size: 2rem; padding-top: 0.5rem; border-top: 2px solid var(--red);">to the metal</span>
        </div>
      </div>
    </div>
    <div
      class="story architecture-silence"
      :style="{ transform: `translateX(${translateX[5]}vw)` }"
      @click="current = 5"
    >
      <div style="text-align: center">
        <div class="u-font-good-glyphs" style="font-size: 3rem">L</div>
        <RouterLink to="/photos/cross-the-borders">
          <img :src="`${$s}septembre2019_rebirth_berlinairport.jpg`" style="height: 30rem;">
        </RouterLink>
        <div>
          Architecture <span class="u-font-ogg">Silence</span>
        </div>
      </div>
    </div>
    <div
      class="story vous-etes-des-animaux"
      :style="{ transform: `translateX(${translateX[4]}vw)` }"
      @click="current = 4"
    >
      <div style="text-align: center; font-size: 2rem; text-transform: uppercase;">
        <div>vous</div>
        <div style="display: flex;">
          <div style="writing-mode: vertical-rl; transform: rotate(180deg);">animaux</div>
          <RouterLink to="/photos/vous-etes-des-animaux">
            <img :src="`${$s}7.jpg`" style="margin: 2rem; width: 25rem; height: 25rem; object-fit: cover;">
          </RouterLink>
          <div style="writing-mode: vertical-rl;">êtes</div>
        </div>
        <div style="transform: rotate(180deg);">des</div>
      </div>
    </div>
    <div
      class="story photo-seduction"
      :style="{ transform: `translateX(${translateX[3]}vw)` }"
      @click="current = 3"
    >
      <div style="display: flex;">
        <img :src="`${$s}star.svg`" class="u-rotate" style="width: 3rem; align-self: flex-end;">
        <RouterLink to="/photos/photo-seduction">
          <img :src="`${$s}4.jpg`" style="height: 30rem; margin: 0 1rem;">
        </RouterLink>
        <div style="font-size: 2rem; text-transform: uppercase; writing-mode: vertical-lr;">
          Photo Seduction
        </div>
      </div>
    </div>
    <div
      class="story taste-of-farniente"
      :style="{ transform: `translateX(${translateX[2]}vw)` }"
      @click="current = 2"
    >
      <div>
        <RouterLink to="/photos/taste-of-farniente">
          <img :src="`${$s}0.jpg`">
        </RouterLink>
        <div style="font-size: 2rem; text-transform: uppercase; margin-top: 1rem;">Taste of farniente</div>
        <hr style="margin: 1rem 0;">
        <div style="font-size: 1.5rem;" class="u-font-ogg">
          J'<span class="u-italic">admire</span> comment on peut <span class="u-italic">mentir</span> en mettant la <span class="u-italic">raison</span> de côté.
        </div>
      </div>
    </div>
    <div
      class="story cross-the-borders"
      :style="{ transform: `translateX(${translateX[1]}vw)` }"
      @click="current = 1"
    >
      <div>
        <div style="font-size: 2rem;">
          <span style="text-decoration: line-through">Cross</span> the Borders
        </div>
        <hr style="margin: 1rem 0;">
        <RouterLink to="/photos/cross-the-borders">
          <img :src="`${$s}1.jpg`">
        </RouterLink>
        <div class="u-font-good-glyphs u-oscillate-x" style="text-align: right; font-size: 7rem;">w</div>
      </div>
    </div>
    <div
      class="story home"
      :style="{ transform: `translateX(${translateX[0]}vw)` }"
      @click="current = 0"
    >
      <div class="container">
        <div class="what">What's your mood today?</div>
        <div class="pick">Pick <span class="u-italic">one</span></div>
        <div class="arrow u-oscillate-x">&rarr;</div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '../../components/NavBar.vue';

export default {
  components: {
    NavBar,
  },
  data() {
    return {
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
    translateX() {
      return (new Array(7))
        .fill()
        .map((_, i) => (2 * i + (
          this.current < i ? -12
            : this.current === i ? -33 : -98
        )));
    },
  },
  methods: {
    onWheel(evt) {
      if (this.scrolling) return;
      if (evt.deltaX > 0) {
        this.scrolling = true;
        setTimeout(() => {
          this.scrolling = false;
        }, 300);
        this.current = Math.min(6, this.current + 1);
      }
      if (evt.deltaX < 1) {
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
.story {
  position: fixed;
  top: 3rem;
  bottom: 0;
  left: 33vw;
  width: 67vw;
  transition: all 1s;
  display: flex;
  justify-content: center;
  align-items: center;
}

.home {
  background-color: #dbdbdb;
  .container {
    max-width: 80%;
  }
  .what {
    font-size: 2rem;
    text-transform: uppercase;
    margin-bottom: 1rem;
  }
  .pick {
    font-size: 2rem;
  }
  .arrow {
    font-size: 5rem;
  }
}
.cross-the-borders {
  background-color: var(--orange);
}
.taste-of-farniente {
  background-color: var(--yellow);
}
.photo-seduction {
  background-color: var(--purple);
}
.vous-etes-des-animaux {
  background-color: var(--orange);
}
.architecture-silence {
  background-color: var(--white);
}
.pedal-to-the-metal {
  background-color: var(--grey);
  width: 90vw;
}
</style>
