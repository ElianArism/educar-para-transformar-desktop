<script setup>
import Nav from "./Nav.vue";
</script>

<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-4 p-0">
        <Nav />
      </div>
      <div class="col p-3">
        <div class="hello">
          <h3>Sistema de gestion educar para transformar - Desktop</h3>
          <h5>Trabajo en proceso</h5>
          <h6>Tecnologias usadas</h6>
          <ul>
            <li>
              <a
                href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel"
                target="_blank"
                rel="noopener"
                >babel</a
              >
            </li>
            <li>
              <a
                href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router"
                target="_blank"
                rel="noopener"
                >router</a
              >
            </li>
            <li>
              <a
                href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex"
                target="_blank"
                rel="noopener"
                >vuex</a
              >
            </li>
            <li>
              <a
                href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint"
                target="_blank"
                rel="noopener"
                >eslint</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
