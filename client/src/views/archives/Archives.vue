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
        <table>
          <thead>
            <tr>
              <td>Date</td>
              <td>Name</td>
              <td>Location</td>
            </tr>
            <tr>
              <td><input v-model="searchedDate" placeholder="Filter by date"></td>
              <td><input v-model="searchedName" placeholder="Filter by name"></td>
              <td><input v-model="searchedLocation" placeholder="Filter by location"></td>
            </tr>
          </thead>
          <tbody ref="tbody">
            <tr v-for="image of displayedImages" :key="image.src" @mouseenter="src = image.src">
              <td>{{ image.readableDate }}</td>
              <td>{{ image.name }}</td>
              <td>{{ image.location }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Footer from '../../components/Footer.vue';
import NavBar from '../../components/NavBar.vue';
import Year from './Year.vue';

const images = [
  {
    date: new Date('2020-06-16'),
    name: 'Je bronzee',
    location: 'soleile',
    src: '0.jpg',
  },
  {
    date: new Date('2020-10-15'),
    name: 'Pakpakfleur',
    location: 'Paris',
    src: '1.jpg',
  },
  {
    date: new Date('2017-08-08'),
    name: 'Je fer des doi donneur mdr',
    location: 'Fauteille',
    src: '2.jpg',
  },
  {
    date: new Date('2020-01-01'),
    name: 'Ophélieeee',
    location: 'Chez Ophélieeee',
    src: '3.jpg',
  },
  {
    date: new Date('2019-01-01'),
    name: 'Mh la sexy madame',
    location: 'Sur 1 lit',
    src: '4.jpg',
  },
  {
    date: new Date('2020-06-06'),
    name: 'Orange',
    location: 'Bathtubbe',
    src: '5.jpg',
  },
  {
    date: new Date('2018-10-10'),
    name: 'Voitur',
    location: 'Devant là voitur',
    src: '6.jpg',
  },
];
const moreImages = (new Array(10)).fill()
  .map((_, i) => images.map((image) => ({ ...image, src: `${image.src}?key=${i}` })))
  .flat();
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
      images: moreImages,
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
    max-width: 300px;
    max-height: 300px;
  }
}
table {
  width: 100%;
  border-collapse: collapse;
  position: absolute;
}
td {
  border-bottom: 1px solid var(--red);
  padding: 1em 0;
}
input {
  border: none;
  background-color: transparent;
  color: var(--red);
  font: inherit;
  outline: none;
}
</style>
