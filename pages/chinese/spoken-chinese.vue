<script setup>
useHead({
  title: 'Spoken Chinese',
})

definePageMeta({
  pageTransition: { name: 'fade', mode: 'out-in' },
})
</script>

<template>
  <div class="px-6 py-4">
    <ModuleArticle :module="7" />
  </div>
</template>

