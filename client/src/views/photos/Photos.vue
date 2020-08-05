<template>
  <div class="Photos">
    <div class="article">
      <div class="article-content">
        <div class="bubble"/>
        <div class="cross">Cross</div>
        <div class="the">the</div>
        <div class="borders">borders</div>
        <img src="//placekitten.com/270/100">
        <div class="desc">
          <div class="text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit itaque reprehenderit molestias? Fugiat porro architecto labore, doloribus aliquid voluptatibus vitae velit provident, itaque consectetur expedita soluta assumenda, magnam asperiores molestias!
          </div>
          <div class="number">
            01.
          </div>
        </div>
      </div>
    </div>
    <NavBar/>
    <Footer fixed/>
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
.article {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 40%;
  background-color: var(--orange);
  display: flex;
  justify-content: center;
  align-items: center;
}
.article-content {
  width: 70%;
  height: 70%;
  position: relative;
  > * {
    position: absolute;
  }
}
.bubble {
  background-color: var(--white);
  width: 300px;
  height: 300px;
  border-radius: 50%;
  left: 10%;
}
.cross, .the, .borders {
  font-size: 70px;
}
.cross {
  top: 10%;
  left: 15%;
}
.the {
  top: 20%;
  right: 20%;
}
.borders {
  top: 40%;
}
img {
  top: 40%;
  right: 0;
}
.desc {
  bottom: 0;
  display: flex;
  .text {
    width: 70%;
  }
  .number {
    width: 30%;
    text-align: right;
  }
}
</style>
