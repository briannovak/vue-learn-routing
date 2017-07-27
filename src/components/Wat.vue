<template lang="html">
  <div>
    <h3>WAT</h3>
    <router-link :to="{ name: 'goodbye', params: { message: 'wat' } }">Goodbye</router-link>
  </div>
</template>

<script>
export default {
  name: 'Wat',
  mounted() {
    console.log(this.$route.params);
  },
};
</script>

<style lang="css">
</style>
