<script setup>
import { onMounted, ref } from "vue";

const profile = ref({
  name: "",
  lastName: "",
  birthDate: "",
  role: "",
});
onMounted(async () => {
  try {
    const response = await (
      await fetch(
        "https://sistemadegestioneducarparatransformar-elianarism.b4a.run/api/auth/profile/",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            authorization: localStorage.getItem("x-token-ept"),
          },
        }
      )
    ).json();
    profile.value = response.data;
    console.log(profile.value);
  } catch (error) {
    console.log(error);
  }
});
</script>
<template>
  <section>
    <div class="card mb-7 shadow-lg">
      <img
        src="../assets/perfil.jpg"
        class="card-img-top"
        alt="imagen-sensorial"
      />
      <div class="card-body">
        <h3 class="card-title">Perfil</h3>
        <p class="card-text">Nombre : {{ profile.name }}</p>
        <p class="card-text">Apellido : {{ profile.lastName }}</p>
        <p class="card-text">Nacimiento : {{ profile.birthDate }}</p>
        <p class="card-text">Role : {{ profile.role }}</p>
      </div>
    </div>
  </section>
</template>
<style scoped>
.card {
  width: 70vh;
  margin: auto;
  margin-top: 80px;
}
.card p {
  border-bottom: solid 1px rgb(155, 155, 155, 0.4);
  padding: 2px;
  text-align: start;
}
.card h3 {
  text-transform: uppercase;
}
</style>
