import { createRouter, createWebHashHistory } from 'vue-router'
import CarDetailsPage from '../pages/CarDetailsPage.vue'
import JobDetailsPage from '../pages/JobDetailsPage.vue'
import HouseDetailsPage from '../pages/HouseDetailsPage.vue'
import Home from '../pages/Home.vue'
import Jobs from '../pages/Jobs.vue'
import Houses from '../pages/Houses.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },{
    path: '/jobs',
    name: 'Jobs',
    component: Jobs
  },{
    path: '/houses',
    name: 'Houses',
    component: Houses
  },{
    // required param ':id'
    path: '/car-details/:id',
    name: 'CarDetails',
    component: CarDetailsPage
  },{
    // required param ':id'
    path: '/job-details/:id',
    name: 'JobDetails',
    component: JobDetailsPage
  },{
    // required param ':id'
    path: '/house-details/:id',
    name: 'HouseDetails',
    component: HouseDetailsPage
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
