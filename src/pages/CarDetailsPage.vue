<template>
  <div class="car-details-page container-fluid">
    <h1 class="text-center">🚙 Car Details 🚗</h1>
    <div class="row mt-3">
      <div class="col-md-7">
        <img :src="car.imgUrl" class="w-100" :alt="car.make" />
      </div>
      <div class="col-md-5 text-center">
        <h3 class="line">{{ car.year }} {{ car.make }} {{ car.model }}</h3>
        <div class="text-left offset-1 lead">
          <p><b>Description:</b> {{ car.description }}</p>
          <p><b>Price:</b> ${{ car.price }}</p>
        </div>
        <div class="d-flex justify-content-around mt-5">
          <button class="btn btn-success w-25">Bid</button>
          <button class="btn btn-danger w-25" @click="destroy">Delete</button>
        </div>
      </div>
    </div>
    <br />
  </div>
</template>


<script>
import { computed, onMounted } from "@vue/runtime-core";
import { AppState } from "../AppState";
import { carsService } from "../services/CarsService";
import { useRoute, useRouter } from "vue-router";

export default {
  setup() {
    const route = useRoute();
    const router = useRouter();
    onMounted(async () => {
      try {
        await carsService.getCarById(route.params.id);
      } catch (error) {
        console.error(error);
      }
    });
    return {
      car: computed(() => AppState.activeCar),
      async destroy() {
        try {
          await carsService.destroy(route.params.id);
          //  navigate user back to home
          router.push({ name: "Home" });
        } catch (error) {
          console.error(error);
        }
      },
    };
  },
};
</script>


<style lang="scss" scoped>
.line {
  border-bottom: 2px solid gray;
}
</style>