<script setup>
import { UserService } from "@/services/user.service";
import { countUnpaidFees } from "@/utils/count-unpaid-fees";
import Swal from "sweetalert2";
import { ref, onMounted } from "vue";

const userService = new UserService();
const role = localStorage.getItem("user-role");
const id = localStorage.getItem("user-id");
const user = ref({});

onMounted(async () => {
  if (role === "student" || role === "parent") {
    await checkLastPaidFee(role);
  }
  user.value = await userService.getByRoleAndId(role, id);
});

const alertUnpaidFees = (student) => {
  const unpaid = countUnpaidFees(student);
  if (unpaid > -1) {
    Swal.fire(
      "Cuota impaga",
      `Tiene un total de  ${unpaid} couta/s impaga/s\nPor favor acerquese al centro educativo para abonarlas`,
      "info"
    );
    return;
  }
};

const checkLastPaidFee = async (role) => {
  //const id = localStorage.getItem("user-id");
  //const user = await userService.getByRoleAndId(role, id);

  if (role === "parent") {
    user.value.son = await userService.getByRoleAndId(
      "student",
      user.value.son
    );
    alertUnpaidFees(user.value.son);
  } else {
    alertUnpaidFees(user.value);
  }
};
</script>

<template>
  <section class="container-fluid">
    <h1 class="mt-4">Bienvenido, {{ user.name }} {{ user.lastName }}</h1>

    <div v-if="role === 'student'">
      <p class="p-3">
        En el Centro Educativo "Educar para transformar" queremos que nuestros
        estudiantes tengan la mejor experiencia. Por eso les damos las
        herramientas necesarias para que puedan hacer un seguimiento total de su
        rendimiento académico.
      </p>
      <img class="logo" src="../assets/logo.jpg" alt="Logo" />
      <div>
        <router-link to="/boletin"
          ><button class="btn btn-primary">Ver Boletín</button></router-link
        >
        <router-link to="/perfil-user"
          ><button class="btn btn-primary">Ver Perfil</button></router-link
        >
      </div>
    </div>

    <div v-else-if="role === 'parent'">
      <p class="p-3">
        En el Centro Educativo "Educar para transformar" queremos que los padres
        de nuestros estudiantes tengan la mejor experiencia. Por eso les damos
        las herramientas necesarias para que puedan hacer un seguimiento total
        de su rendimiento académico.
      </p>
      <img class="logo" src="../assets/logo.jpg" alt="Logo" />
      <div>
        <router-link to="'/boletin' + user.son.id"
          ><button class="btn btn-primary">
            Ver boletin de su hijo
          </button></router-link
        >
      </div>
    </div>

    <div v-else-if="role === 'professor'">
      <p class="p-3">
        En el Centro Educativo "Educar para transformar" queremos que nuestros
        profesores tengan la mejor experiencia. Por eso les damos las
        herramientas necesarias para que puedan hacer un seguimiento total del
        rendimiento académico de sus alumnos.
      </p>
      <img class="logo" src="../assets/logo.jpg" alt="Logo" />
      <div>
        <router-link to="/list-alumno"
          ><button class="btn btn-primary">
            Lista de Alumnos
          </button></router-link
        >
      </div>
    </div>

    <div v-else-if="role === 'authority'">
      <p class="p-3">
        En el Centro Educativo "Educar para transformar" queremos que nuestras
        autoridades tengan la mejor experiencia. Por eso les damos las
        herramientas necesarias para que puedan hacer un seguimiento total del
        centro educativo.
      </p>
      <img class="logo" src="../assets/logo.jpg" alt="Logo" />
    </div>

    <div v-else-if="role === 'personal'">
      <p class="p-3">
        En el Centro Educativo "Educar para transformar" queremos que nuestros
        empleados tengan la mejor experiencia. Por eso les damos las
        herramientas necesarias para que puedan hacer su trabajo de la mejor
        forma posible.
      </p>
      <img class="logo" src="../assets/logo.jpg" alt="Logo" />
      <div>
        <router-link to="/pay-fee"
          ><button class="btn btn-primary">
            Registrar pago de cuota de estudiante
          </button></router-link
        >
      </div>
    </div>
  </section>
</template>

<style scoped="scss">
.logo {
  height: 360px;
  width: auto;
  margin: auto;
}

.btn {
  margin: 25px 15px 15px 15px;
}
</style>
