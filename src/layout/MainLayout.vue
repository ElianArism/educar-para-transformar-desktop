<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.container-fluid {
  min-height: 100%;
  width: 100%;
}

.col {
  min-height: 100%;
}
</style>
