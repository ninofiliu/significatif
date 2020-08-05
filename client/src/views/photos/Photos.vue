<template>
  <div class="Photos">
    <Article/>
    <NavBar/>
    <Footer fixed/>
  </div>
</template>

<script>
import Footer from '../../components/Footer.vue';
import NavBar from '../../components/NavBar.vue';
import Article from './Article.vue';

export default {
  components: {
    Article,
    Footer,
    NavBar,
  },
};
</script>
