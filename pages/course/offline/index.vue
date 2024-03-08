<script setup>
// 1 -> News
// 2 -> Chinese Traditional Culture Course
// 3 -> Manual Experience Course
// 4 -> One Sentence A Day
// 5 -> Tongue Twisters
// 6 -> Traditional Culture
// 7 -> Spoken Chinese
useHead({
  title: 'Offline Class',
})

definePageMeta({
  pageTransition: { name: 'fade', mode: 'out-in' },
})
</script>

<template>
  <div class="px-6 py-12 min-h-screen select-none">
    <h3 class="text-xl text-dark-600 text-left font-bold" >
      <UIcon class="text-sky-500 inline-block" name="i-carbon-crowd-report" />
      Chinese traditional culture courses
    </h3>
    <ModuleArticle :module="2" />
    <h3 class="text-xl text-dark-600 text-left font-bold">
      <UIcon class="text-sky-500 inline-block" name="i-carbon-crowd-report"  />
      Manual experience courses
    </h3>
    <ModuleArticle :module="3" />
  </div>
</template>
