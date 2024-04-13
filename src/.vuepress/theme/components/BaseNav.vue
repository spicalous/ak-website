<script setup>
import { usePageData } from 'vuepress/client'
import { useThemeData } from '@vuepress/plugin-theme-data/client'
const pageData = usePageData()
const themeData = useThemeData()
</script>

<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container">
      <a class="navbar-brand" :href="$withBase('/')">AK</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <template v-for="item in themeData.nav" :key="item.text">
            <li class="nav-item">
              <a class="nav-link" :class="{ active: pageData.path == item.link }" :href="$withBase(item.link)">{{item.text}}</a>
            </li>
          </template>
        </ul>
      </div>
    </div>
  </nav>
  <slot />
</template>