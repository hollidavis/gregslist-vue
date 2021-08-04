<template>
  <div class="car-form">
    <form
      class="d-flex justify-content-center mt-4"
      @submit.prevent="createCar"
    >
      <div class="form-group mx-2">
        <input
          type="text"
          name="make"
          v-model="state.newCar.make"
          class="form-control"
          placeholder="Make..."
          required
        />
      </div>
      <div class="form-group mx-2">
        <input
          type="text"
          name="model"
          v-model="state.newCar.model"
          class="form-control"
          placeholder="Model..."
          required
        />
      </div>
      <div class="form-group mx-2">
        <input
          type="number"
          name="year"
          v-model="state.newCar.year"
          class="form-control"
          placeholder="Year..."
          required
          min="1950"
          max="2021"
        />
      </div>
      <div class="form-group mx-2">
        <input
          type="number"
          name="price"
          v-model="state.newCar.price"
          class="form-control"
          placeholder="Price..."
          required
          min="1"
        />
      </div>
      <div class="form-group mx-2">
        <input
          type="text"
          name="imgUrl"
          v-model="state.newCar.imgUrl"
          class="form-control"
          placeholder="Url..."
        />
      </div>
      <div class="form-group mx-2">
        <input
          type="text"
          name="description"
          v-model="state.newCar.description"
          class="form-control"
          placeholder="Description..."
          maxlength="240"
        />
      </div>
      <div class="mx-2">
        <button type="submit" class="btn btn-success">Post</button>
      </div>
    </form>
  </div>
</template>


<script>
import { reactive } from "@vue/reactivity";
import { carsService } from "../services/CarsService";
export default {
  setup() {
    const state = reactive({
      newCar: {},
    });
    return {
      state,
      async createCar() {
        try {
          await carsService.createCar(state.newCar);
          state.newCar = {};
        } catch (error) {
          console.error(error);
        }
      },
    };
  },
};
</script>


<style lang="scss" scoped>
</style>