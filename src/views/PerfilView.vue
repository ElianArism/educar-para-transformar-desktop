<script setup></script>
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
        <p class="card-text">Nombre :</p>
        <p class="card-text">Apellido :</p>
        <p class="card-text">Nacimiento :</p>
        <p class="card-text">Role :</p>
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
