<script setup></script>
<template>
  <section class="cuerpo">
    <div class="container-table">
      <table>
        <thead>
          <tr>
            <img src="../assets/logo.jpg" alt="Logo" class="logo" />
            <th>DNI</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Fecha de Nacimiento</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>43616936</td>
            <td>Diego</td>
            <td>Barrios</td>
            <td>16/08/2001</td>
          </tr>
          <tr>
            <td>44616936</td>
            <td>Elian</td>
            <td>Arismendi</td>
            <td></td>
          </tr>
          <tr>
            <td>41616936</td>
            <td>Maximiliano</td>
            <td>Insfran</td>
            <td></td>
          </tr>
          <tr>
            <td>44616936</td>
            <td>Diego</td>
            <td>Barrios</td>
            <td>16/08/2001</td>
          </tr>
          <tr>
            <td>44616936</td>
            <td>Diego</td>
            <td>Barrios</td>
            <td>16/08/2001</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>
<style lang="scss">
.cuerpo {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(#ffff, rgb(155, 154, 154));
}

.container-table {
  border: solid 1px rgb(155, 155, 155, 0.4);
}
table {
  color: black;
  font-size: 15px;
  table-layout: fixed;
  border-collapse: collapse;
}
thead {
  background: #91bdff;
}
.logo {
  max-height: 40px;
  border-radius: 50%;
  float: left;
  margin-top: 12px;
  margin-left: 5px;
  margin-right: 5px;
}

th {
  padding: 20px 15px;
  font-weight: 700;
  text-transform: uppercase;
}
td {
  padding: 15px;
  border-bottom: solid 1px rgb(155, 155, 155, 0.4);
  border-left: solid 1px rgb(155, 155, 155, 0.1);
}

tbody tr:hover {
  transform: scale(1.01);
  transition: 0.2s;
  -webkit-box-shadow: 1px 10px 22px -12px rgba(0, 0, 0, 0.63);
  -moz-box-shadow: 1px 10px 22px -12px rgba(0, 0, 0, 0.63);
  box-shadow: 1px 10px 22px -12px rgba(0, 0, 0, 0.63);
}
</style>
