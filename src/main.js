import { createApp } from 'vue'
import router from './router'
import store from './store'
import './style.css'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUser, faClock, faBars, faTimes, faStar, faHeart, faArrowRight, faArrowLeft, faPlus } from '@fortawesome/free-solid-svg-icons'

library.add(faUser, faClock, faBars, faTimes, faStar, faHeart, faArrowRight, faArrowLeft, faPlus)

createApp(App)
  .use(router)
  .use(store)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')
