<script setup>
// 1 -> News
// 2 -> Chinese Traditional Culture Course
// 3 -> Manual Experience Course
// 4 -> One Sentence A Day
// 5 -> Tongue Twisters
// 6 -> Traditional Culture
// 7 -> Spoken Chinese
// 8 -> News in Hangzhou
useHead({
  title: 'News in Hangzhou',
})

</script>

<template>
  <div class="px-6 py-12 min-h-screen select-none">
    <ModuleArticle :module="8" />
  </div>
</template>
