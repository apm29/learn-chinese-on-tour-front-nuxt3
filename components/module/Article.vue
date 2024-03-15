<script setup>
const props = defineProps({
  module: {
    type: Number,
    required: true,
  },
})
const { data: modules, pending } = await useLazyFetch(`/api/module-article/${props.module}`)
</script>

<template>
  <div class="py-6">
    <div class="flex items-center space-x-4" v-if="pending">
      <USkeleton class="h-12 w-12" :ui="{ rounded: 'rounded-full' }" />
      <div class="space-y-2">
        <USkeleton class="h-4 w-[250px]" />
        <USkeleton class="h-4 w-[200px]" />
      </div>
    </div>
    <template v-else>
      <template v-for="article of modules" :key="article.id">
        <ModuleArticleGlance :article="article" />
      </template>
      <div v-if="!modules || !modules.length" class="text-gray-400">
        <UIcon name="i-mdi-database-search-outline" class="inline-block align-middle text-[1em]"></UIcon>
        {{ $t('No data') }}
      </div>
    </template>
  </div>
</template>

<style scoped>
.article-image {
  @apply object-cover m-0 col-span-3 row-span-full !important;
}
</style>
