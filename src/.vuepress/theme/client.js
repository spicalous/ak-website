import { defineClientConfig } from 'vuepress/client'
import Contact from './layouts/Contact.vue'
import Home from './layouts/Home.vue'
import NotFound from './layouts/NotFound.vue'
import 'bootstrap/js/index.esm.js'
import './styles/index.css'

export default defineClientConfig({
  layouts: {
    Contact,
    Home,
    NotFound,
  },
})