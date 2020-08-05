<template>
  <div class="Archives">
    <NavBar/>
    <div class="content">
      <div class="years">
        <div
          v-for="year of years"
          :key="year" class="year"
          :class="{ '--current': year === currentYear }"
          @click="currentYear = year"
        >
          {{year}}
        </div>
      </div>
      <div class="data" ref="data">
        <img v-show="show" :src="src" :style="{ left: `${left}px`, top: `${top}px` }">
        <table>
          <tr>
            <td>Date</td>
            <td>Name</td>
            <td>Location</td>
          </tr>
          <tr>
            <td>Search Date</td>
            <td>Search Name</td>
            <td>Search Location</td>
          </tr>
          <tr v-for="image of displayedImages" :key="image.src" @mouseenter="src = image.src">
            <td>{{ image.date.toDateString() }}</td>
            <td>{{image.name}}</td>
            <td>{{image.location}}</td>
          </tr>
        </table>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Footer from '../../components/Footer.vue';
import NavBar from '../../components/NavBar.vue';

const images = new Array(100).fill()
  .map((_, i) => ({
    date: new Date(1483138800000 + Math.random() * 126230400000),
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
    };
  },
  computed: {
    displayedImages() {
      return this.images
        .filter((image) => image.date.getFullYear() === this.currentYear);
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
  mounted() {
    this.$refs.data.addEventListener('mousemove', this.onMouseMove);
    this.$refs.data.addEventListener('mouseout', this.onMouseOut);
  },
  beforeDestroy() {
    this.$refs.data.removeEventListener('mousemove', this.onMouseMove);
    this.$refs.data.removeEventListener('mouseout', this.onMouseOut);
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
  text-align: center;
  font-size: 70px;
  font-weight: 300;
  overflow-y: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
}
.year {
  border: 2px solid transparent;
  border-radius: 50%;
  padding: 10px 40px;
  &.--current {
    border-color: var(--red);
  }
  &:hover {
    cursor: pointer;
  }
}
.data {
  width: 60%;
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
</style>