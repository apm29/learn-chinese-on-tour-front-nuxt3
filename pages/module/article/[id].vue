<script setup>
const route = useRoute()
const { data: article, pending } = await useLazyFetch(`/api/article/${route.params.id}`)
useHead({
  title: article.value ? article.value.title : '加载中',
})

</script>

<template>
  <div v-if="pending">
    <USkeleton class="md:h-64 h-48 w-full"></USkeleton>
    <p class="px-12 py-8 flex flex-col gap-4">
      <USkeleton class="h-8 w-full"></USkeleton>
      <USkeleton class="h-4 w-1/2"></USkeleton>
      <USkeleton class="h-12 w-full"></USkeleton>
      <USkeleton class="h-4 w-1/2"></USkeleton>
      <USkeleton class="h-4 w-2/3"></USkeleton>
      <USkeleton class="h-4 w-2/5"></USkeleton>
      <USkeleton class="h-32 w-full"></USkeleton>
    </p>
  </div>
  <div v-else-if="article">
    <div class="relative w-full" >
      <img
        v-if="article.banner"
        :src="article.banner"
        class="md:h-96 h-80 object-cover w-full relative"
      >
      <div
        class="font-bold text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5/6 text-center md:text-6xl text-4xl text-shadow-lg"
      >
        {{ article.title }}
        <div class="font-light text-xl">
          {{
            article.subtitle
          }}
        </div>
      </div>
    </div>
    <article
      class="prose prose-stone lg:max-w-[1000px] dark:prose-invert mx-auto px-4 md:px-0 pt-10"
      v-html="article.content"
    />
  </div>
</template>
