<script setup>
import Swal from "sweetalert2";
import { useRouter } from "vue-router";

const router = useRouter();
const usuariosObject = {
  id: "",
  password: "",
  role: "",
};

async function login(event) {
  event.preventDefault();

  try {
    const response = await (
      await fetch(
        "https://sistemadegestioneducarparatransformar-elianarism.b4a.run/api/auth/login",
        {
          method: "POST",
          body: JSON.stringify(usuariosObject),
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
    ).json();

    if (!response.ok) {
      Swal.fire("Error", response.error.message, "error");
      return;
    }

    localStorage.setItem("x-token-ept", response.data);
    localStorage.setItem("user-id", usuariosObject.id);
    router.push({ path: "home" });
  } catch (error) {
    Swal.fire(
      "Error",
      error?.status === 400
        ? "Credenciales incorrectas"
        : error?.status === 404
        ? "Usuario no encontrado con este DNI o contraseña"
        : "algo salio mal",
      "error"
    );
    console.log(error);
  }
}
</script>
<template>
  <section>
    <div class="formulario">
      <h1>Inicio de Sesión</h1>
      <form @submit="login">
        <div class="username">
          <input type="text" required v-model="usuariosObject.id" />
          <label>Ingrese con su DNI</label>
        </div>
        <div class="username">
          <input type="password" required v-model="usuariosObject.password" />
          <label>Contraseña</label>
        </div>
        <div class="username">
          <label for="grade" class="form-label"></label>
          <select
            name="grade"
            class="form-select"
            v-model="usuariosObject.role"
          >
            <option value="student">Estudiante</option>
            <option value="professor">Profesor</option>
            <option value="parent">Padres</option>
            <option value="Director">Director/Autoridad</option>
            <option value="Admin">Admin</option>
          </select>
        </div>
        <input type="submit" value="Iniciar" />
      </form>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(150deg, #f9f8fa, #0097b8);
}
.formulario {
  width: 90%;
  max-width: 400px;
  border-radius: 10px;
  margin: auto;
  background: linear-gradient(150deg, #888688, #f9f8fa);
  box-shadow: 0 5px 10px -5px rgb(0 0 0 / 30%);
  text-align: center;
  padding: 2px;
}
.formulario h1 {
  color: white;
  text-align: center;
  padding: 10px 0 15px 0;
  border-bottom: 1px solid silver;
}

.formulario form {
  padding: 0 40px;
  box-sizing: border-box;
}
form .username {
  position: relative;
  border-bottom: 2px solid #adadad;
  margin: 30px 0;
}
.username input {
  width: 100%;
  padding: 0 5px;
  height: 40px;
  font-size: 16px;
  border: none;
  background: none;
  outline: none;
}

.username label {
  position: absolute;
  top: 50%;
  left: 5px;
  color: white;
  transform: translateY(-50%);
  font-size: 16px;
  pointer-events: none;
  transition: 0.5s;
}
.username span::before {
  content: "";
  position: absolute;
  top: 40px;
  left: 0;
  width: 100%;
  height: 2px;
  background: #0ca7d6;
  // transition: .5s;
}
.username input:focus ~ label,
.username input:valid ~ label {
  top: -5px;
  color: #d60c89;
}
.username input:focus ~ span::before,
.username input:focus ~ span::before {
  width: 100%;
}

input[type="submit"] {
  width: 100%;
  height: 50px;
  border: 1px solid;
  background: #d60c89;
  border-radius: 25px;
  font-size: 18px;
  color: white;
  cursor: pointer;
  outline: none;
  margin-bottom: 15px;
}

input[type="submit"]:hover {
  border-color: #0ca7d6;
  transition: 0.5s;
}
</style>
