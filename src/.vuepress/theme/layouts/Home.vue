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
        <span class="position-absolute top-50 start-50 translate-middle h1 text-white">Project 1</span>
        <image class="img-fluid" src="/home-1.png"/>
      </div>
      <div class="col-12 col-md-6 position-relative pt-4">
        <span class="position-absolute top-50 start-50 translate-middle h1 text-white">Project 2</span>
        <image class="img-fluid" src="/home-2.png"/>
      </div>
    </div>
    <div class="row pt-4">
      <div class="col position-relative">
        <span class="position-absolute top-50 start-50 translate-middle h1 text-white">Project 3</span>
        <image class="img-fluid w-100" src="https://placehold.co/1000x500"/>
      </div>
    </div>
    <div class="row pb-5">
      <div class="col-12 col-md-6 position-relative pt-4">
        <span class="position-absolute top-50 start-50 translate-middle h1 text-white">Project 4</span>
        <image class="img-fluid" src="https://placehold.co/1000x700"/>
      </div>
      <div class="col-12 col-md-6 position-relative pt-4">
        <span class="position-absolute top-50 start-50 translate-middle h1 text-white">Project 5</span>
        <image class="img-fluid" src="https://placehold.co/1000x700"/>
      </div>
    </div>
  </div>
  <Content/>
</template>