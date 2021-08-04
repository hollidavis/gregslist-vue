<template>
  <div class="home container-fluid">
    <div class="row">
      <div class="col">
        <HouseForm />
      </div>
    </div>
    <div class="card-columns">
      <div class="card" v-for="c in houses" :key="c.id">
        <HouseCard :house="c"/>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import {AppState} from '../AppState.js'
import {housesService } from '../services/HousesService'
import HouseCard from '../components/HouseCard.vue'
import HouseForm from '../components/HouseForm.vue'

export default {
  name: 'Home',
  setup(){
    // state

    // mounted
    onMounted(async ()=>{
      try {
        await housesService.getHouses()
      } catch (error) {
        console.error(error)
      }
    })
    return {
      // state,
      // computeds
      houses: computed(() => AppState.houses)
      // methods
    }
  },
  components: {
    HouseCard,
    HouseForm
  }
}
</script>
