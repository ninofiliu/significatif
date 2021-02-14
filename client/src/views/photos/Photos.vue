<template>
  <div>
    <NavBar/>
    <div class="stories">
      <RouterLink
        to="/photos/pedal-to-the-metal"
        class="story pedal-to-the-metal"
        :style="{ 'flex-grow': flexGrows[6] }"
      >
        <div class="story-content">
          <img :src="`${$s}${covers['pedal-to-the-metal']}`">
          <div class="title">PEDAL T<span class="u-font-good-glyphs">Y</span> THE METAL</div>
          <div class="text u-comfort">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia sequi tenetur aliquid dignissimos autem corrupti nulla deleniti aspernatur id quod tempore commodi sint, ad eaque veritatis ut rerum unde obcaecati?</div>
        </div>
      </RouterLink>
      <RouterLink
        to="/photos/vous-etes-des-animaux"
        class="story vous-etes-des-animaux"
        :style="{ 'flex-grow': flexGrows[5] }"
      >
        <div class="story-content">
          <img :src="`${$s}${covers['vous-etes-des-animaux']}`">
          <div class="title">VOU<span class="u-font-good-glyphs">G</span> ÊTES DES ANIMAUX</div>
          <div class="text u-comfort">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia sequi tenetur aliquid dignissimos autem corrupti.</div>
        </div>
      </RouterLink>
      <RouterLink
        to="/photos/cross-the-borders"
        class="story cross-the-borders"
        :style="{ 'flex-grow': flexGrows[4] }"
      >
        <div class="story-content">
          <img :src="`${$s}${covers['cross-the-borders']}`">
          <div class="title">CR<span class="u-font-good-glyphs">q</span>SS THE BORDERS</div>
          <div class="text u-comfort">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia sequi tenetur aliquid dignissimos autem corrupti nulla deleniti aspernatur id quod tempore commodi sint, ad eaque veritatis ut rerum unde obcaecati?</div>
        </div>
      </RouterLink>
      <RouterLink
        to="/photos/silent-photography"
        class="story silent-photography"
        :style="{ 'flex-grow': flexGrows[3] }"
      >
        <div class="story-content">
          <img :src="`${$s}${covers['silent-photography']}`">
          <div class="title">SILENT PHOTOGRAPHY</div>
          <div class="text u-comfort">Architecture silence Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque itaque ab, culpa adipisci autem voluptates reiciendis laudantium accusamus a quia dicta nulla labore eos nemo vitae cupiditate nisi ipsam nesciunt.</div>
        </div>
      </RouterLink>
      <RouterLink
        to="/photos/humans"
        class="story humans"
        :style="{ 'flex-grow': flexGrows[2] }"
      >
        <div class="story-content">
          <img :src="`${$s}${covers['humans']}`">
          <div class="title">PHOTO SEDUCTI<span class="u-font-good-glyphs">B</span>N</div>
          <div class="text u-comfort">J’<i>admire</i> comme on peut <i>mentir</i> en mettant la <i>raison</i> de côté.</div>
        </div>
      </RouterLink>
      <RouterLink
        to="/photos/taste-of-farniente"
        class="story taste-of-farniente"
        :style="{ 'flex-grow': flexGrows[1] }"
      >
        <div class="story-content">
          <img :src="`${$s}${covers['taste-of-farniente']}`">
          <div class="title">TASTE <span class="u-font-good-glyphs">g</span>F FARNIENTE</div>
          <div class="text u-comfort">J’<i>admire</i> comme on peut <i>mentir</i> en mettant la <i>raison</i> de côté. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
        </div>
      </RouterLink>
      <div class="story home" :style="{ 'flex-grow': flexGrows[0] }">
        <div class="story-content">
          <div class="mood">What's your mood today?</div>
          <div class="pick">Pick <span class="one u-font-ogg u-italic">one</span></div>
          <div class="arrow u-oscillate-x"><img :src="`${$s}assets/arrow.svg`"></div>
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
        [10, 10, 4, 1, 1, 1, 1],
        [7, 10, 5, 3, 1, 1, 1],
        [3, 5, 10, 5, 3, 1, 1],
        [1, 3, 5, 10, 5, 3, 1],
        [1, 1, 3, 5, 10, 5, 3],
        [1, 1, 1, 3, 5, 10, 7],
        [1, 1, 1, 1, 4, 10, 10],
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
  top: 0;
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
  top: calc(3rem + var(--unit)); // 3rem = navbar height
  width: calc(8 * var(--unit));
  height: calc(100vh - 3rem - 2 * var(--unit));
  transition: all .5s;
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
a.story:hover .story-content {
  transform: translateY(1rem)
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
    padding: .15em .7em;
  }
  .arrow {
    font-size: 4rem;
    img {
      width: 3rem;
      transform: rotate(-90deg);
    }
  }
}
.taste-of-farniente {
  background-color: var(--yellow);
}
.humans {
  background-color: var(--purple);
  text-align: center;
}
.cross-the-borders {
  background-color: var(--orange);
}
.silent-photography {
  background-color: var(--white);
}
.vous-etes-des-animaux {
  background-color: var(--yellow);
  text-align: center;
}
.pedal-to-the-metal {
  background-color: var(--purple);
}
</style>
