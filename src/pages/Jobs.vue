<template>
  <div class="home container-fluid">
    <div class="row">
      <div class="col">
        <JobForm />
      </div>
    </div>
    <div class="card-columns">
      <div class="card" v-for="j in jobs" :key="j.id">
        <JobCard :job="j"/>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import {AppState} from '../AppState.js'
import {jobsService } from '../services/JobsService'
import JobCard from '../components/JobCard.vue'
import JobForm from '../components/JobForm.vue'

export default {
  name: 'Home',
  setup(){
    // state

    // mounted
    onMounted(async ()=>{
      try {
        await jobsService.getJobs()
      } catch (error) {
        console.error(error)
      }
    })
    return {
      // state,
      // computeds
      jobs: computed(() => AppState.jobs)
      // methods
    }
  },
  components: {
    JobCard,
    JobForm
  }
}
</script>
