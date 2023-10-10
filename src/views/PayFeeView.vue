<script setup>
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <div
          class="mb-5 d-flex flex-column align-items-center justify-content-center"
        >
          <h5 class="m-0">Pagar cuota</h5>
          <hr class="m-0 w-25" />
        </div>
      </div>
    </div>

    <div class="row mb-3">
      <div class="col-12">
        <div class="d-flex">
          <select class="form-select">
            <option value="Curso 1">Curso 1</option>
            <option value="Curso 2">Curso 2</option>
            <option value="Curso 3">Curso 3</option>
            <option value="Curso 4">Curso 4</option>
          </select>
          <button class="mx-2 btn btn-primary">Buscar</button>
        </div>
      </div>
      <div class="col">
        <div class="w-50 d-flex my-3">
          <input
            type="text"
            class="form-control"
            placeholder="Buscar por DNI"
          />
          <button class="mx-2 btn btn-primary">Buscar</button>
        </div>
      </div>
    </div>

    <div class="accordion-cont border rounded mx-auto p-3">
      <div class="accordion" id="accordionStudents">
        <!--Accordion header   -->
        <div class="accordion-item">
          <h2 class="accordion-header" id="heading1">
            <button
              data-bs-toggle="collapse"
              data-bs-target="#collapse1"
              aria-labelledby="studentsList"
              data-bs-parent="#accordionStudents"
              class="accordion-button collapsed"
              aria-expanded="false"
              aria-controls="collapse1"
            >
              <span
                class="d-flex justify-content-between w-100"
                style="padding-right: 10px"
              >
                <span> John Doe </span>
                <span> DNI: 266762 </span>
              </span>
            </button>
          </h2>
          <!-- Accordion Body -->
          <div
            id="collapse1"
            aria-labelledby="heading1"
            class="accordion-collapse collapse"
          >
            <!-- Here must be another list -->
            <div class="accordion-body">
              <div class="w-100 d-flex">
                <button
                  class="btn w-75 m-auto mb-3 btn-info"
                  style="color: white"
                  @click="router.push('/pay-fee/:studentId')"
                >
                  Registrar pago
                </button>
              </div>
              <ul class="list-group">
                <div
                  class="list-group-item list-group-item-info d-flex align-items-center"
                >
                  <span class="badge bg-success"> Pagado </span>
                  &nbsp;
                  <span>
                    {{
                      format(
                        new Date(),
                        "'Cuota pagada el dia' eeee mm 'de' LLLL 'del' yyyy",
                        {
                          locale: es,
                        }
                      )
                    }}
                  </span>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.accordion-cont {
  width: 95%;
}
</style>
