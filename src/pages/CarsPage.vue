<template>
  <div class="container">

    <CarForm />

    <section class="row mt-2 g-3">

      <div v-for="car in cars" :key="car.id" class="col-12 col-md-6">
        <!-- {{ car.make }} {{ car.model }} -->
        <CarCard :car="car" />
      </div>

    </section>
  </div>
</template>


<script>
import { computed, onMounted } from 'vue';
import Pop from '../utils/Pop.js';
import { carsService } from '../services/CarsService.js';
import { AppState } from '../AppState.js'
import { logger } from '../utils/Logger.js';

export default {
  setup() {
    onMounted(() => {
      getCars();
      // ... any other functions you need to run too
    });
    async function getCars() {
      try {
        await carsService.getCars();
      }
      catch (error) {
        Pop.error(error);
      }
    }
    return {
      cars: computed(() => AppState.cars)
    };
  }
}
</script>


<style lang="scss" scoped></style>
