<template>
  <div class="Archives">
    <NavBar/>
    <div class="content">
      <div class="years">
        <Year
          v-for="year of years"
          :key="year"
          :year="year"
          :current="year === currentYear"
          @click="currentYear = year"
        />
      </div>
      <div class="data">
        <img v-show="show" :src="src" :style="{ left: `${left}px`, top: `${top}px` }">
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
              <td>{{ image.date.toDateString() }}</td>
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

const images = new Array(100).fill()
  .map((_, i) => ({
    date: new Date(+new Date('2014') + Math.random() * (new Date('2020') - new Date('2014'))),
    name: Math.random().toString(16).substring(2),
    location: Math.random().toString(16).substring(2),
    src: `//placekitten.com/300/${100 + i}`,
  }))
  .sort((a, b) => a.date - b.date);
const years = [...new Set(images.map((image) => image.date.getFullYear()))].reverse();
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
      return this.images
        .filter((image) => image.date.getFullYear() === this.currentYear)
        .filter((image) => image.date.toDateString().toLowerCase().includes(
          this.searchedDate.toLowerCase(),
        ))
        .filter((image) => image.name.toLowerCase().includes(
          this.searchedName.toLowerCase(),
        ))
        .filter((image) => image.location.toLowerCase().includes(
          this.searchedLocation.toLowerCase(),
        ));
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow-y: hidden;
  height: 100vh;
}
.content {
  margin-top: 90px;
  height: calc(100vh - 190px);
  display: flex;
  justify-content: space-around;
}
.years {
  width: 400px;
  overflow-y: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
}
.data {
  width: calc(100% - 400px);
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
