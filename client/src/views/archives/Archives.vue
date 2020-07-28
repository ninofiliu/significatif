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
      <div class="data">
        <img src="//placekitten.com/300/200">
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
          <tr v-for="i of 50" :key="i">
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
