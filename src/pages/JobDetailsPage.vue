<template>
  <div class="job-details-page container-fluid">
    <h1 class="text-center">🏢 Job Details 🏢</h1>
    <div class="mt-3">
      <h3 class="line">{{ job.jobTitle }} | {{ job.company }}</h3>
      <div class="text-left offset-1 lead">
        <p><b>Description:</b> {{ job.description }}</p>
        <p><b>Hours:</b> {{ job.hours }}hrs/week</p>
        <p><b>Price:</b> ${{ job.rate }}/hr</p>
      </div>
      <div class="d-flex justify-content-around mt-5">
        <button class="btn btn-success w-25">Apply</button>
        <button class="btn btn-danger w-25" @click="destroy">Delete</button>
      </div>
    </div>
    <br />
  </div>
</template>


<script>
import { computed, onMounted } from "@vue/runtime-core";
import { AppState } from "../AppState";
import { jobsService } from "../services/JobsService";
import { useRoute, useRouter } from "vue-router";

export default {
  setup() {
    const route = useRoute();
    const router = useRouter();
    onMounted(async () => {
      try {
        await jobsService.getJobById(route.params.id);
      } catch (error) {
        console.error(error);
      }
    });
    return {
      job: computed(() => AppState.activeJob),
      async destroy() {
        try {
          await jobsService.destroy(route.params.id);
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