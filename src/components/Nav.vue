<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { RouterLink } from "vue-router";
</script>
<template>
  <div class="wrapper">
    <div class="vertical-nav shadow-lg">
      <img src="../assets/logo.jpg" alt="Logo" class="logo" />
      <h2>Menu</h2>
      <ul>
        <li class="nav-link">
          <RouterLink to=""
            ><i class="bi bi-house-fill icons"></i> Home</RouterLink
          >
        </li>
        <li class="nav-link">
          <RouterLink to=""
            ><i class="bi bi-person icons"></i> Perfil</RouterLink
          >
        </li>
        <li class="nav-link">
          <RouterLink to=""><i class="bi bi-book icons"></i> Listas</RouterLink>
        </li>
        <li class="nav-link">
          <RouterLink to=""
            ><i class="bi bi-backpack2 icons"></i> Boletin</RouterLink
          >
        </li>
        <li class="nav-link">
          <RouterLink to=""><i class="bi bi-bank icons"></i> Pagos</RouterLink>
        </li>
        <li class="nav-link">
          <RouterLink to="/login"
            ><i class="bi bi-house-fill icons"></i> Iniciar Sesión</RouterLink
          >
        </li>
      </ul>
    </div>
    <div class="down-nav">
      <div class="title-down">
        <p></p>
      </div>
      <div class="p-4"></div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
template {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
a {
  text-decoration: none;
  color: black;

  &:hover {
    color: aquamarine;
    transform: scale(1.05);
    transition: 0.2s;
  }
}
.wrapper {
  display: flex;
  position: relative;
  box-sizing: border-box;
}
.wrapper .vertical-nav {
  text-decoration: none;
  position: fixed;
  width: 300px;
  height: 100%;
  background: linear-gradient(150deg, #f18597, #0097b8);
  padding: 30px 0;
}
.wrapper .vertical-nav h2 {
  color: aquamarine;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 20px;
}
.wrapper .vertical-nav ul .nav-link {
  list-style: none;
  padding: 15px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  text-align: start;
}
.wrapper .vertical-nav ul li a {
  display: block;
}
.wrapper .vertical-nav ul li a .icons {
  width: 25px;
}
.logo {
  max-height: 50px;
  border-radius: 50%;
  justify-content: start;
}
// .wrapper .vertical-nav ul li:hover {
//   // background: #594f8d;
// }
</style>
