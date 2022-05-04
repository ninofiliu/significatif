<template>
  <div>
    <NavBar />
    <Scroll />
    <Center />
    <Footer fixed />
  </div>
</template>

<script>
import NavBar from "../../components/NavBar.vue";
import Center from "./Center.vue";
import Scroll from "./Scroll.vue";
import Footer from "../../components/Footer.vue";

export default {
  components: {
    Center,
    Footer,
    NavBar,
    Scroll,
  },
};
</script>
