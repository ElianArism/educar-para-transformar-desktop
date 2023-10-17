<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { RouterLink, useRouter } from "vue-router";
const role = localStorage.getItem("user-role");
const router = useRouter();
const cerrarSesion = () => {
  localStorage.clear();
  router.push({
    name: "login",
  });
};
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
              <RouterLink to="/home" class="link-router"
                ><i class="bi bi-house-fill icons"></i> Home</RouterLink
              >
            </li>
            <li class="nav-link">
              <RouterLink to="/perfil-user" class="link-router"
                ><i class="bi bi-person icons"></i> Perfil</RouterLink
              >
            </li>
            <li v-if="role === 'student' || role === 'parent'" class="nav-link">
              <RouterLink class="link-router" to="/boletin"
                ><i class="bi bi-backpack2 icons"></i> Boletin</RouterLink
              >
            </li>
            <li
              class="nav-link"
              v-if="role === 'personal' || role === 'authority'"
            >
              <RouterLink to="/pay-fee" class="link-router"
                ><i class="bi bi-bank icons"></i> Pagos</RouterLink
              >
            </li>
            <li
              class="nav-link"
              v-if="
                role === 'personal' ||
                role === 'authority' ||
                role === 'professor'
              "
            >
              <a
                class="dropdown-toggle link-router"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i class="bi bi-book icons"></i> Listas
              </a>
              <ul class="dropdown-menu">
                <li v-if="role === 'professor'">
                  <RouterLink
                    to="/list-alumno"
                    class="dropdown-item link-router"
                    >Listado de Alumnos</RouterLink
                  >
                </li>
                <li v-if="role === 'personal' || role === 'authority'">
                  <RouterLink to="/list-profesor" class="dropdown-item"
                    >Profesores</RouterLink
                  >
                </li>

                <li v-if="role === 'personal' || role === 'authority'">
                  <RouterLink to="/cuotas-impagas" class="dropdown-item"
                    >Cuotas Impagas</RouterLink
                  >
                </li>
                <li v-if="role === 'personal' || role === 'authority'">
                  <RouterLink to="/list-parents" class="dropdown-item"
                    >Padres</RouterLink
                  >
                </li>
              </ul>
            </li>
            <li>
              <bottom @click="cerrarSesion" class="btn btn-danger"
                >Cerrar sesión</bottom
              >
            </li>
          </ul>
          <div class="social-media">
            <a
              href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel"
              target="_blank"
              ><i class="bi bi-github icons link-router"></i
            ></a>
            <a href="" target="_blank"
              ><i class="bi bi-linkedin icons link-router"></i
            ></a>
            <a href=""><i class="bi bi-whatsapp icons link-router"></i></a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<style lang="scss" scoped>
.link-router {
  text-decoration: none;
  color: #dbdada;

  &:hover {
    color: white;
    transform: scale(1.05);
    transition: 0.2s;
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
.dropdown-item {
  color: #333;
}
.btn {
  margin-top: 15px;
  height: 50px;
  width: 150px;
  text-align: center;
  padding-top: 12px;
}

// .vertical-nav ul li:hover {
//   background: #71ad80;
// }
</style>
