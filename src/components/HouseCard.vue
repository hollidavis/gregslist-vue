<template>
      <div class="house m-2 bg-light shadow">
        <router-link :to="{name: 'HouseDetails', params: {id: house.id}}">
          <img :src="house.imgUrl" class="w-100" :alt="house.bedrooms + house.bathrooms">
          <div class="p-3">
              <div class="text-center">
                  <p><b>{{ house.bedrooms }} beds {{ house.bathrooms }} baths | ${{house.price}}</b></p>
              </div>
          </div>
        </router-link>
      </div>
</template>


<script>
export default {
  props: {
    // value captured from the parent data
    house: {
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