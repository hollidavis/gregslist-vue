<template>
      <div class="job m-2 bg-light shadow">
        <!-- passing required param ':id' -->
        <router-link :to="{name: 'JobDetails', params: {id: job.id}}">
          <img :src="job.imgUrl" class="w-100" :alt="job.make">
          <div class="p-3">
              <div class="text-center">
                  <p><b>{{job.year}} | {{job.make}} {{job.model}}</b></p>
              </div>
          </div>
        </router-link>
      </div>
</template>


<script>
export default {
  props: {
    // value captured from the parent data
    job: {
      type: Object,
      required: true
    }
  },
  setup(){
    return {}
  }}
</script>


<style lang="scss" scoped>

</style>