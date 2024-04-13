<script setup>
import { useSiteData } from 'vuepress/client'
import BaseNav from './../components/BaseNav.vue'

const site = useSiteData();

</script>

<template>
  <BaseNav/>
  <div class="container">
    <div class="row">
      <div class="col-12 col-md-6 position-relative pt-4">
        <a :href="$withBase('/projects/project-1')">
          <span class="position-absolute top-50 start-50 translate-middle h1 text-white">Project 1</span>
          <img class="img-fluid" :src="$withBase('/home-1.png')"/>
        </a>
      </div>
      <div class="col-12 col-md-6 position-relative pt-4">
        <a :href="$withBase('/projects/project-2')">
          <span class="position-absolute top-50 start-50 translate-middle h1 text-white">Project 2</span>
          <img class="img-fluid" :src="$withBase('/home-2.png')"/>
        </a>
      </div>
    </div>
    <div class="row pt-4">
      <div class="col position-relative">
        <a :href="$withBase('/projects/project-345')">
          <span class="position-absolute top-50 start-50 translate-middle h1 text-white">Project 3</span>
          <img class="img-fluid w-100" src="https://placehold.co/1000x500"/>
        </a>
      </div>
    </div>
    <div class="row pb-5">
      <div class="col-12 col-md-6 position-relative pt-4">
        <a :href="$withBase('/projects/project-345')">
          <span class="position-absolute top-50 start-50 translate-middle h1 text-white">Project 4</span>
          <img class="img-fluid" src="https://placehold.co/1000x700"/>
        </a>
      </div>
      <div class="col-12 col-md-6 position-relative pt-4">
        <a :href="$withBase('/projects/project-345')">
          <span class="position-absolute top-50 start-50 translate-middle h1 text-white">Project 5</span>
          <img class="img-fluid" src="https://placehold.co/1000x700"/>
        </a>
      </div>
    </div>
  </div>
  <Content/>
</template>