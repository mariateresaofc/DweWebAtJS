<template>
  <div>
    <h1>{{msg}}</h1>
    <router-link :to="{name: 'Profile'}">
      <span>Perfil</span>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "Sobre"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
