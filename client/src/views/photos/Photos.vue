<template>
  <div class="Photos">
    <Article/>
    <Pictures/>
    <NavBar/>
    <Footer fixed/>
  </div>
</template>

<script>
import Footer from '../../components/Footer.vue';
import NavBar from '../../components/NavBar.vue';
import Article from './Article.vue';
import Pictures from './Pictures.vue';

export default {
  components: {
    Article,
    Footer,
    NavBar,
    Pictures,
  },
};
</script>
