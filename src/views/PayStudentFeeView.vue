<script setup>
import { format } from "date-fns";
import { useRouter } from "vue-router";
const router = useRouter();

const paidFee = {
  value: 1000,
  paymentDate: "",
};

const validateDate = (event) => {
  const minDate = new Date(format(new Date(), "yyyy'-'MM'-'dd") + "T00:00");
  const date = new Date(event.target.value + "T00:00");
  if (date < minDate) {
    event.target.value = format(new Date(), "yyyy'-'MM'-'dd");
    return;
  }
};

const submitForm = (event) => {
  event.preventDefault();
  router.push({ path: "/pay-fee" });
};
</script>

<template>
  <div class="container-fluid">
    <h2>Pagar cuota de estudiante</h2>

    <form @submit="submitForm" class="bg-secondary rounded p-3 text-white">
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
          min="{{ new Date() }}"
          @change="validateDate"
        />
      </div>

      <div class="mb-3">
        <button class="btn btn-primary" type="submit">Confirmar</button>
      </div>
    </form>
  </div>
</template>

<style scoped="scss"></style>
