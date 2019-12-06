<template>
  <div>
    <h1>{{msg}}</h1>
    <router-link to="/">
      <span>Home</span>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "Perfil"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
