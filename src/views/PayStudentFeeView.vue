<script setup>
import { format, sub } from "date-fns";
import Swal from "sweetalert2";
import { useRoute, useRouter } from "vue-router";
import { StudentService } from "../services/student.service";

const router = useRouter();
const studentId = useRoute().params.studentId;
const studentsService = new StudentService();
const minDate = new Date(
  format(sub(new Date(), { years: 10, days: 7 }), "yyyy'-'MM'-'dd") + "T00:00"
);
const maxDate = new Date(format(new Date(), "yyyy'-'MM'-'dd") + "T00:00");

const paidFee = {
  value: 5000,
  paymentDate: format(new Date(), "yyyy'-'MM'-'dd"),
};

const validateDate = (event) => {
  const date = new Date(event.target.value + "T00:00");

  if (date < minDate || date > maxDate)
    event.target.value = format(new Date(), "yyyy'-'MM'-'dd");

  paidFee.paymentDate = date.toISOString();
};

const submitForm = async (event) => {
  event.preventDefault();

  if (paidFee.paymentDate === "") return;

  const response = await studentsService.payStudentFee(studentId, paidFee);

  if (!response.ok) {
    Swal.fire("Error", "", "error");
    console.log("error", response);
    return;
  }

  router.push({ path: "/pay-fee" });
};
</script>

<template>
  <div class="container-fluid p-3">
    <h4>Pagar cuota de estudiante</h4>

    <form
      @submit="submitForm"
      class="bg-secondary rounded w-75 mx-auto p-3 my-5 text-white"
    >
      <div class="mb-3">
        <label for="fee-value" class="form-label">Monto de la cuota</label>
        <div class="input-group">
          <span class="input-group-text">$</span>
          <input
            name="fee-value"
            type="number"
            min="1000"
            class="form-control"
            v-model="paidFee.value"
            placeholder="Ingrese el monto de la cuota a pagar"
          />
        </div>
      </div>

      <div class="mb-3">
        <label for="payment-date" class="form-label">Fecha de pago</label>
        <input
          name="payment-date"
          type="date"
          class="form-control"
          v-model="paidFee.paymentDate"
          placeholder="Ingrese el monto de la cuota a pagar"
          min="{{ minDate }}"
          max="{{ maxDate }}"
          @change="validateDate"
        />
      </div>

      <div class="mb-3">
        <button class="btn btn-primary" type="submit">Confirmar</button>
      </div>
    </form>
  </div>
</template>

<style lang="scss" scoped></style>
