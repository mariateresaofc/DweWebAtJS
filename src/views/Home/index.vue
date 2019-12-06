<template>
  <div>
    <h1>{{msg}}</h1>
    <router-link to="/about">
      <span>Sobre</span>
      <br>
    </router-link>

    <router-link to="/Profile">
      <span>Perfil</span>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "Home"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
