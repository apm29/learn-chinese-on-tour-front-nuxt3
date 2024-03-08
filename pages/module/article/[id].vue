<script setup>
const route = useRoute()
const { data: article } = await useFetch(`/api/article/${route.params.id}`)
useHead({
  title: article.value ? article.value.title : '加载中',
})

definePageMeta({
  pageTransition: { name: 'fade', mode: 'out-in' },
})
</script>

<template>
  <div v-if="article">
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
