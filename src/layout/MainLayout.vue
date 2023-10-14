<template>
  <div class="container-fluid p-0">
    <Nav />
    <div class="row w-100">
      <div class="col">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script setup>
import Nav from "../components/Nav.vue";
</script>

<style lang="scss" scoped>
.container-fluid {
  min-height: 100%;
  width: 100%;
}

.col {
  min-height: 100%;
}
</style>
