<script setup>
useHead({
  title: 'Traditional Culture',
})

definePageMeta({
  pageTransition: { name: 'fade', mode: 'out-in' },
})
</script>

<template>
  <div class="px-6 py-4">
    <ModuleArticle :module="6" />
  </div>
</template>
