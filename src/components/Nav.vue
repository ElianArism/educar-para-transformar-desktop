<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { RouterLink } from "vue-router";
</script>
<template>
  <nav class="navbar bg-body-tertiary shadow-sm">
    <div class="container-fluid">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <img src="../assets/logo.jpg" alt="Logo" class="logo" />
      <div
        class="offcanvas offcanvas-start vertical-nav"
        tabindex="-1"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div class="offcanvas-header">
          <img src="../assets/logo.jpg" alt="Logo" class="logo" />
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
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
              <RouterLink to=""
                ><i class="bi bi-backpack2 icons"></i> Boletin</RouterLink
              >
            </li>
            <li class="nav-link">
              <RouterLink to="/pay-fee"
                ><i class="bi bi-bank icons"></i> Pagos</RouterLink
              >
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i class="bi bi-book icons"></i> Listas
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Alumnos</a></li>
                <li><a class="dropdown-item" href="#">Profesores</a></li>
                <li>
                  <a class="dropdown-item" href="#">otra cosa</a>
                </li>
              </ul>
            </li>
          </ul>
          <div class="social-media">
            <a
              href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel"
              target="_blank"
              ><i class="bi bi-github icons"></i
            ></a>
            <a href="" target="_blank"><i class="bi bi-linkedin icons"></i></a>
            <a href=""><i class="bi bi-whatsapp icons"></i></a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<style lang="scss" scoped>
a {
  text-decoration: none;
  color: black;

  &:hover {
    color: aquamarine;
    transform: scale(1.05);
    transition: 0.2s;
    // Holasg
  }
}
.vertical-nav {
  text-decoration: none;
  background: linear-gradient(150deg, #999697, #0097b8);
  list-style: none;
}
.vertical-nav h2 {
  color: aquamarine;
  text-transform: uppercase;
  text-align: start;
  margin-bottom: 20px;
}
.vertical-nav .nav-link {
  padding: 15px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  border-top: 1px solid rgba(151, 151, 151, 0.05);
  text-align: start;
}
.vertical-nav ul li a {
  display: block;
}
.vertical-nav ul li a .icons {
  width: 25px;
}
.logo {
  max-height: 50px;
  border-radius: 50%;
}
.vertical-nav .social-media {
  bottom: 0;
  position: absolute;
  display: flex;
  left: 50%;
  transform: translateX(-50%);
}
.vertical-nav .social-media a {
  display: block;
  width: 40px;
  height: 40px;
}

// .vertical-nav ul li:hover {
//   background: #71ad80;
// }
</style>
