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
  const id = localStorage.getItem("user-id");
  const user = await userService.getByRoleAndId(role, id);

  if (role === "parent") {
    user.son = await userService.getByRoleAndId("student", user.son);
    alertUnpaidFees(user.son);
  } else {
    alertUnpaidFees(user);
  }
};
</script>

<template>
  <div>
    <header>
      <h1>Bienvenido, {{ user.name }} {{ user.lastName }}</h1>
    </header>
  </div>
  <div v-if="role === 'student'">
    <p>
      En el Centro Educativo "Educar para transformar" queremos que nuestros
      estudiantes tengan la mejor experiencia. Por eso les damos las
      herramientas necesarias para que puedan hacer un seguimiento total de su
      rendimiento académico.
    </p>
    <img src="../assets/logo.jpg" alt="Logo" />
    <router-link to="/boletin">Ver Boletín</router-link>
    <router-link to="/profile">Ver Perfil</router-link>
  </div>

  <div v-else-if="role === 'parent'">
    <p>
      En el Centro Educativo "Educar para transformar" queremos que nuestros
      estudiantes tengan la mejor experiencia. Por eso les damos las
      herramientas necesarias para que puedan hacer un seguimiento total de su
      rendimiento académico.
    </p>
    <img src="../assets/logo.jpg" alt="Logo" />
    <router-link to="'/boletin' + user.son.id"
      >Ver boletin de su hijo</router-link
    >
  </div>

  <div v-else-if="role === 'professor'">
    <p>
      En el Centro Educativo "Educar para transformar" queremos que nuestros
      estudiantes tengan la mejor experiencia. Por eso les damos las
      herramientas necesarias para que puedan hacer un seguimiento total de su
      rendimiento académico.
    </p>
    <img src="../assets/logo.jpg" alt="Logo" />
    <router-link to="/list-alumno">Lista de Alumnos</router-link>
    <router-link to="/notasAlumnos-alumno-id">Ver Notas de Alumnos</router-link>
  </div>

  <div v-else-if="role === 'authority'"></div>

  <div v-else-if="role === 'personal'">
    <p>
      En el Centro Educativo "Educar para transformar" queremos que nuestros
      estudiantes tengan la mejor experiencia. Por eso les damos las
      herramientas necesarias para que puedan hacer un seguimiento total de su
      rendimiento académico.
    </p>
    <img src="../assets/logo.jpg" alt="Logo" />
    <router-link to="/pay-fee"
      >Registrar pago de cuota de estudiante</router-link
    >
  </div>
</template>

<style scoped="scss">
.content {
  text-align: center;
  margin-top: 20px;
}

.image-container img {
  display: block;
  margin: 0 auto;
  width: 150px;
}

.router-links {
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
}

.router-link {
  text-decoration: none;
  padding: 5px 10px;
  background-color: #007bff;
  color: white;
  border-radius: 5px;
}

.router-link:hover {
  background-color: #0056b3;
}
</style>
