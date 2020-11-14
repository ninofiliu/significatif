<template>
  <div class="Archives">
    <NavBar/>
    <div class="content">
      <div class="years">
        <div
          class="year-container"
          v-for="year of years"
          :key="year"
          @click="currentYear = year"
        >
          <Year
            :year="year"
            :current="year === currentYear"
          />
        </div>
      </div>
      <div class="data">
        <img v-show="show" :src="`${$s}${src}`" :style="{ left: `${left}px`, top: `${top}px` }">
        <div class="table">
          <div class="row">
            <div>Date</div>
            <div>Name</div>
            <div>Location</div>
          </div>
          <div class="row">
            <div><input v-model="searchedDate" placeholder="Filter by date"></div>
            <div><input v-model="searchedName" placeholder="Filter by name"></div>
            <div><input v-model="searchedLocation" placeholder="Filter by location"></div>
          </div>
          <div ref="tbody">
            <div class="row" v-for="image of displayedImages" :key="image.name" @mouseenter="src = image.src">
              <RouterLink :to="{ path: `/photos/${image.serie}`, query: { current: image.seriePosition } }">
                <div>{{ image.readableDate }}</div>
                <div>{{ image.name }}</div>
                <div>{{ image.location }}</div>
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Footer from '../../components/Footer.vue';
import NavBar from '../../components/NavBar.vue';
import Year from './Year.vue';
import images from './dummyImages';

const years = [...new Set(images.map((image) => image.date.getFullYear()))].sort().reverse();
const currentYear = Math.max(...years);

export default {
  components: {
    Footer,
    NavBar,
    Year,
  },
  data() {
    return {
      left: 0,
      top: 0,
      show: false,
      src: '',
      images,
      years,
      currentYear,
      searchedDate: '',
      searchedName: '',
      searchedLocation: '',
    };
  },
  computed: {
    displayedImages() {
      const matches = (str1, str2) => str1.toLowerCase().includes(str2.toLowerCase());
      return this.images
        .filter((image) => image.date.getFullYear() === this.currentYear)
        .map((image) => ({
          ...image,
          readableDate: Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' }).format(image.date),
        }))
        .filter((image) => matches(image.readableDate, this.searchedDate))
        .filter((image) => matches(image.name, this.searchedName))
        .filter((image) => matches(image.location, this.searchedLocation));
    },
  },
  methods: {
    onMouseMove(evt) {
      this.show = true;
      this.left = evt.clientX;
      this.top = evt.clientY;
    },
    onMouseOut() {
      this.show = false;
    },
  },
  created() {
    for (const image of this.images) {
      (new Image()).src = image.src;
    }
  },
  mounted() {
    this.$refs.tbody.addEventListener('mousemove', this.onMouseMove);
    this.$refs.tbody.addEventListener('mouseout', this.onMouseOut);
  },
  beforeDestroy() {
    this.$refs.tbody.removeEventListener('mousemove', this.onMouseMove);
    this.$refs.tbody.removeEventListener('mouseout', this.onMouseOut);
  },
};
</script>

<style lang="scss" scoped>
.Archives {
  --years-width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow-y: hidden;
  height: 100vh;
}
.content {
  margin-top: 10vh;
  height: 80vh;
  display: flex;
  justify-content: space-around;
}
.years {
  width: var(--years-width);
  overflow-y: auto;
  scrollbar-width: none;
  align-self: center;
  &::-webkit-scrollbar {
    display: none;
  }
}
.year-container {
  animation-name: appear;
  animation-duration: 1s;
  animation-fill-mode: both;
}
@keyframes appear {
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0%);
    opacity: 1;
  }
}
@for $i from 0 to 10 {
  .year-container:nth-child(#{$i+1}) {
    animation-delay: #{0.3 * $i}s;
  }
}
.data {
  width: calc(90vw - var(--years-width));
  position: relative;
  overflow-y: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  img {
    position: fixed;
    transform: translate(-50%, -50%);
    pointer-events: none;
    max-width: 40vh;
    max-height: 40vh;
  }
}
.table {
  width: 100%;
  position: absolute;
}
.row {
  padding: 1em 0;
  border-bottom: 1px solid var(--red);
  display: flex;
  a {
    display: flex;
    width: 100%;
  }
  div {
    width: 33%;
  }
}
input {
  border: none;
  background-color: transparent;
  color: var(--red);
  font: inherit;
  outline: none;
}
</style>
