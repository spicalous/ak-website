<script setup>
import BaseNav from './../components/BaseNav.vue'
import { usePageFrontmatter } from 'vuepress/client'
const pageFrontmatter = usePageFrontmatter();
</script>

<template>
  <BaseNav/>
  <div class="container">
    <div class="row pt-5">
      <div class="col">
        <h1>{{pageFrontmatter.title}}</h1>
      </div>
    </div>
    <div class="row py-5">
      <div class="col">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.</p>
      </div>
    </div>
  </div>
  <Content/>
</template>