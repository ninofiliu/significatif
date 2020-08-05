<template>
  <div class="About">
    <div class="bubble left"/>
    <div class="bubble right"/>
    <div class="center">
      <section>
        <div class="big-text">
          <div>Th<span class="font-good-glyphs">h</span>nks for</div>
          <div>your visit!</div>
        </div>
        <div>star</div>
      </section>
      <section>
        <div class="font-ogg-italic">(&nbsp;)</div>
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium obcaecati recusandae facilis architecto optio soluta itaque nobis, nemo asperiores odit porro fugit? Soluta accusantium iste libero pariatur suscipit voluptas? Incidunt!
        </div>
      </section>
      <section>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus voluptatem, voluptates rerum asperiores pariatur earum illum sapiente molestias vero eaque reiciendis.
        </div>
      </section>
      <section>
        <div>
          <hr>
          <div class="big-text">
            <div>Let's</div>
            <div>reach <span class="font-good-glyphs">j</span>ut!</div>
          </div>
          <div class="links">
            <a href="mailto:significatif@gmail.com">significatif@gmail.com</a>
            <a href="tel:+33679131441">+33 6 79 13 14 41</a>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
    <NavBar/>
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
.About {
  background-color: var(--orange);
  perspective: 100px;
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
  overflow-y: auto;
}
.bubble {
  position: absolute;
  border-radius: 50%;
  background-color: var(--white);
  &.left {
    width: 600px;
    height: 600px;
    top: 50%;
    left: -40%;
    transform: translateZ(-100px);
  }
  &.right {
    width: 600px;
    height: 600px;
    top: 0%;
    left: 40%;
    transform: translateZ(-20px);
  }
}
.center {
  width: 90%;
  margin: auto;
}
section {
  display: flex;
  justify-content: space-between;
  text-transform: uppercase;
  font-size: 30px;
  div {
    z-index: 100;
  }
}
.big-text {
  font-size: 100px;
}
section:nth-child(1) {
  padding-top: 140px;
}
section:nth-child(2) {
  margin-top: 40px;
  div:nth-child(1) {
    width: 40%;
    font-size: 110px;
    text-align: right;
  }
  div:nth-child(2) {
    width: 50%;
  }
}
section:nth-child(3) {
  margin-top: 70px;
  div {
    width: 50%;
    margin-left: 20%;
  }
}
section:nth-child(4) {
  margin-top: 100px;
  margin-bottom: 130px;
  > div {
    width: 60%;
    margin-left: 40%;
  }
  .links {
    font-size: 20px;
    display: flex;
    justify-content: space-between;
    a {
      text-decoration: underline;
    }
  }
}
</style>
