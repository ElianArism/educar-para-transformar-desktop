<script setup></script>

<template>
  <div class="container-fluid">
    <h2>Listado de alumnos</h2>

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
            John doe
          </button>
        </h2>
        <!-- Accordion Body -->
        <div
          id="collapse1"
          aria-labelledby="heading1"
          class="accordion-collapse collapse"
        >
          <div class="accordion-body">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            repellat ipsam inventore eaque consequuntur saepe amet, odio
            asperiores esse, accusantium distinctio natus! Excepturi quam non
            placeat fuga dolore temporibus iusto!
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss"></style>
