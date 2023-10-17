<script setup>
import { UserService } from "@/services/user.service";
import { countUnpaidFees } from "@/utils/count-unpaid-fees";
import Swal from "sweetalert2";
import { onMounted } from "vue";

const userService = new UserService();
const role = localStorage.getItem("user-role");

onMounted(async () => {
  if (role === "student" || role === "parent") {
    await checkLastPaidFee(role);
  }
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
  <div class="container-fluid">
    <div class="row">
      <div class="col"></div>
    </div>
  </div>
</template>

<style></style>
