<template>
  <div class="Contact">
    <div class="left"><div class="bubble u-appear-scaleup" /></div>
    <div class="right"><div class="bubble u-appear-scaleup" /></div>
    <div class="center">
      <section>
        <div class="big-text">
          <div>Th<span class="u-font-good-glyphs">h</span>nks for</div>
          <div>your visit!</div>
        </div>
        <div style="transform: translateY(1.2rem)">
          <img class="u-rotate" src="../../assets/star.svg" />
        </div>
      </section>
      <section>
        <div class="u-font-ogg u-italic u-oscillate-x">(&nbsp;)</div>
        <div class="u-comfort">
          {{ contact.text1 }}
        </div>
      </section>
      <section>
        <div class="u-comfort">
          {{ contact.text2 }}
        </div>
      </section>
      <section>
        <div>
          <hr />
          <div class="big-text let-s-reach-out">
            <div>Let's</div>
            <div>reach <span class="u-font-good-glyphs">j</span>ut!</div>
          </div>
          <div class="links u-underline">
            <a :href="`mailto:${contact.email}`">{{ contact.email }}</a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
    <NavBar />
  </div>
</template>

<script>
import Footer from "../../components/Footer.vue";
import NavBar from "../../components/NavBar.vue";
import contact from "../../content/contact.json";

export default {
  components: {
    Footer,
    NavBar,
  },
  data() {
    return {
      contact,
    };
  },
};
</script>

<style lang="scss" scoped>
.Contact {
  background-color: var(--orange);
  perspective: 100px;
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
  overflow-y: auto;
}
.left {
  position: absolute;
  width: 600px;
  height: 600px;
  top: 50%;
  left: -40%;
  transform: translateZ(-100px);
}
.right {
  position: absolute;
  width: 600px;
  height: 600px;
  top: 0%;
  left: 40%;
  transform: translateZ(-20px);
}
.bubble {
  height: 100%;
  border-radius: 50%;
  background-color: var(--white);
}
.left .bubble {
  animation-delay: 0.6s;
}
.right .bubble {
  animation-delay: 0.3s;
}
.center {
  width: 90%;
  margin: auto;
}
section {
  display: flex;
  justify-content: space-between;
  text-transform: uppercase;
  font-size: 1.5rem;
  div {
    z-index: 100;
  }
}
.big-text {
  font-size: 5rem;
}
section:nth-child(1) {
  padding-top: 15vh;
}
section:nth-child(2) {
  margin-top: 2vh;
  div:nth-child(1) {
    width: 40%;
    font-size: 5.5rem;
    text-align: right;
  }
  div:nth-child(2) {
    width: 50%;
  }
}
section:nth-child(3) {
  margin-top: 7vh;
  div {
    width: 50%;
    margin-left: 20%;
  }
}
section:nth-child(4) {
  margin-top: 10vh;
  margin-bottom: 13vh;
  > div {
    width: 60%;
    margin-left: 40%;
  }
  .links {
    font-size: 1rem;
    display: flex;
    justify-content: space-between;
    a {
      text-decoration: underline;
    }
  }
}
.let-s-reach-out {
  margin-bottom: 3vh;
}

@media (max-aspect-ratio: 1/1) {
  .big-text {
    font-size: 3rem;
  }
  section:nth-child(2) {
    margin-top: 4vh;
    div:nth-child(1) {
      width: 20%;
      font-size: 3rem;
    }
    div:nth-child(2) {
      width: 70%;
    }
  }
  section:nth-child(3) {
    width: initial;
    margin: 5vw;
  }
  section:nth-child(4) {
    > div {
      width: 100%;
      margin-left: 0;
    }
    .links {
      flex-direction: column;
    }
  }
}
</style>
