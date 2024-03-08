<script setup lang="ts">
const links = [
  {
    label: 'HSK1~HSK6',
    to: '/course/online/hsk'
  },
  {
    label: 'Customized Courses',
    to: '/course/online/customized-courses'
  },
  {
    label: 'Business Chinese',
    to: '/course/online/business-chinese'
  }
]
</script>

<template>
  <UHorizontalNavigation :links="links" class="border-b border-gray-200 dark:border-gray-800" />
  <NuxtPage></NuxtPage>
</template>
