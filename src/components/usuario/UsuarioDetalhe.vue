<template>
  <div class="usuario-detalhe">
    <h3>Usuário Detalhe</h3>
    <p><strong>Código: </strong>{{ id }}</p>
  </div>
</template>

<script>
export default {
  props: ["id"],
  //   data() {
  //     return {
  //       id: this.$route.params.id,
  //     };
  //   },
  //   watch: {
  //     // to é a rota nova e from é a rota antiga
  //     $route(to, from) {
  //       this.id = to.params.id;
  //     },
  //   },
};
</script>

<style>
</style>