<template>
  <div class="house-form">
    <form
      class="d-flex justify-content-center mt-4"
      @submit.prevent="createHouse"
    >
      <div class="form-group mx-2">
        <input
          type="number"
          name="bedrooms"
          v-model="state.newHouse.bedrooms"
          class="form-control"
          placeholder="Bedrooms..."
          required
        />
      </div>
      <div class="form-group mx-2">
        <input
          type="number"
          name="bathrooms"
          v-model="state.newHouse.bathrooms"
          class="form-control"
          placeholder="Bathrooms..."
          required
        />
      </div>
      <div class="form-group mx-2">
        <input
          type="number"
          name="levels"
          v-model="state.newHouse.levels"
          class="form-control"
          placeholder="Levels..."
          required
        />
      </div>
      <div class="form-group mx-2">
        <input
          type="number"
          name="year"
          v-model="state.newHouse.year"
          class="form-control"
          placeholder="Year Built..."
          required
        />
      </div>
      <div class="form-group mx-2">
        <input
          type="number"
          name="price"
          v-model="state.newHouse.price"
          class="form-control"
          placeholder="Price..."
          required
        />
      </div>
      <div class="form-group mx-2">
        <input
          type="text"
          name="imgUrl"
          v-model="state.newHouse.imgUrl"
          class="form-control"
          placeholder="URL..."
        />
      </div>
      <div class="form-group mx-2">
        <input
          type="text"
          name="description"
          v-model="state.newHouse.description"
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
import { housesService } from "../services/HousesService";
export default {
  setup() {
    const state = reactive({
      newHouse: {},
    });
    return {
      state,
      async createHouse() {
        try {
          await housesService.createHouse(state.newHouse);
          state.newHouse = {};
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