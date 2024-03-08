<script setup>
useHead({
  title: 'Tongue Twist',
})

definePageMeta({
  pageTransition: { name: 'fade', mode: 'out-in' },
})
</script>

<template>
  <div class="px-6 py-4">
    <ModuleArticle :module="5" />
  </div>
</template>

