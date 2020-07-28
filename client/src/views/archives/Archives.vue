<template>
  <div class="Archives">
    <NavBar/>
    <div class="content">
      <div class="years">
        <div class="year">2020</div>
        <div class="year">2019</div>
        <div class="year">2018</div>
        <div class="year">2017</div>
      </div>
      <div class="data" ref="data">
        <img :src="src" :style="{ left: `${left}px`, top: `${top}px` }" v-show="show">
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
          <tr v-for="i of 50" :key="i" @mouseenter="src = `//placekitten.com/300/${100+i}`">
            <td>date {{ i }}</td>
            <td>name {{ i }}</td>
            <td>location {{ i }}</td>
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
    };
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
}
.year {
  border: 2px solid var(--red);
  border-radius: 50%;
  padding: 10px 40px;
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
