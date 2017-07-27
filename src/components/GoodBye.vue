<template lang="html">
  <div>
    <h3>Goodbye {{$route.params.message}}!</h3>
    <router-link :to="{ name: 'home' }">Hello</router-link>
    <router-link :to="{ name: 'wat' }">Wat</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'GoodBye',
  mounted() {
    console.log(this.$route.params);
  },
};
</script>

<style lang="css">
</style>
