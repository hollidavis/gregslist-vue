<template>
  <div class="house-details-page container-fluid">
    <h1 class="text-center">🏡 House Details 🏡</h1>
    <div class="row mt-3">
      <div class="col-md-7">
        <img :src="house.imgUrl" class="w-100" :alt="house.bedrooms + house.bathrooms" />
      </div>
      <div class="col-md-5 text-center">
        <h3 class="line">{{ house.bedrooms }} beds {{ house.bathrooms }} baths - ${{house.price}}</h3>
        <div class="text-left offset-1 lead">
          <p><b>Year Built:</b> {{ house.year }}</p>
          <p><b>Floors:</b> {{ house.levels }}</p>
          <p><b>Description:</b> {{ house.description }}</p>
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
import { housesService } from "../services/HousesService";
import { useRoute, useRouter } from "vue-router";

export default {
  setup() {
    const route = useRoute();
    const router = useRouter();
    onMounted(async () => {
      try {
        await housesService.getHouseById(route.params.id);
      } catch (error) {
        console.error(error);
      }
    });
    return {
      house: computed(() => AppState.activeHouse),
      async destroy() {
        try {
          await housesService.destroy(route.params.id);
          router.push({ name: "Houses" });
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