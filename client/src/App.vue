<template>
  <div>
    <router-view/>
    <NavigationCover/>
  </div>
</template>

<script>
import NavigationCover from './components/NavigationCover.vue';

export default {
  components: {
    NavigationCover,
  },
};
</script>
