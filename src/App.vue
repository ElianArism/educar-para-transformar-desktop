<script setup lang="js"></script>
<template>
  <router-view />
</template>

<style lang="scss">
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body,
#app,
html {
  background: linear-gradient(#ffff, rgb(155, 154, 154)) no-repeat;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

@media print {
  /* Hide elements not needed for printing */
  header,
  nav,
  .no-print {
    display: none !important;
  }
}
</style>
