<template>
  <div class="usuario">
    <h2>Usuários</h2>
    <hr />
    <p><strong>Código: </strong>{{ id }}</p>
    <button sucesso @click="irParaInicio">Voltar</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
    };
  },
  watch: {
    // to é a rota nova e from é a rota antiga
    $route(to, from) {
      this.id = to.params.id;
    },
  },
  methods: {
    irParaInicio() {
      this.$router.push("/");
      // this.$router.push({ path: "/" });
    },
  },
};
</script>

<style>
</style>