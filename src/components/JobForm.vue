<template>
  <div class="job-form">
    <form
      class="d-flex justify-content-center mt-4"
      @submit.prevent="createJob"
    >
      <div class="form-group mx-2">
        <input
          type="text"
          name="jobTitle"
          class="form-control"
          placeholder="Job Title..."
          required
        />
      </div>
      <div class="form-group mx-2">
        <input
          type="text"
          name="company"
          class="form-control"
          placeholder="Company..."
          required
        />
      </div>
      <div class="form-group mx-2">
        <input
          type="number"
          name="rate"
          class="form-control"
          placeholder="Rate..."
          required
        />
      </div>
      <div class="form-group mx-2">
        <input
          type="number"
          name="hours"
          class="form-control"
          placeholder="Hours..."
          required
        />
      </div>
      <div class="form-group mx-2">
        <input
          type="text"
          name="description"
          class="form-control"
          placeholder="Description..."
          maxlength="350"
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
import { jobsService } from "../services/JobsService";
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    const state = reactive({
      newJob: {},
    });
    return {
      state,
      async createJob() {
        try {
          const newId = await jobsService.createJob(state.newJob);
          // NOTE clears the form
          state.newJob = {};
          router.push({ name: "JobDetails", params: { id: newId } });
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