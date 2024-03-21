<script setup>
const { data: teachers, pending } = useLazyFetch('/api/teachers')
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 gap-x-4 gap-y-12">
    <template v-if="pending">
      <div v-for="i of 6"
        class="bg-white dark:bg-gray-700 rounded-lg px-4 pt-3 pb-6 flex flex-col items-start duration-300 transition-all text-left border-2 border-transparent hover:border-gray-200 dark:hover:border-gray-600 hover:opacity-90 hover:shadow-2xl dark:shadow-gray-600">
        <USkeleton class="h-16 w-16 mb-4 self-center" :ui="{ rounded: 'rounded-full' }" />

        <div class="space-y-2 w-full">
          <USkeleton class="h-4 w-2/3" />
          <USkeleton class="h-2 w-1/2" />
          <USkeleton class="h-2 w-2/5" />
          <USkeleton class="h-12 w-full" />
        </div>
      </div>
    </template>
    <template v-else>
      <NuxtLink prefetch :to="`/about/team#${teacher.id}`" v-for="teacher of teachers" :key="teacher.name"
        class="bg-white dark:bg-gray-800 rounded-lg px-4 pt-3 pb-6 flex flex-col items-start duration-300 transition-all text-left border-2 border-transparent hover:border-gray-200 dark:hover:border-gray-600 hover:opacity-90 hover:shadow-2xl dark:shadow-gray-600">
        <UAvatar :src="teacher.pic" size="3xl"
          class="self-center mb-4 shadow-xl drop-shadow-lg dark:shadow-slate-600 dark:drop-shadow-slate-600" :ui="{ size: {'3xl': 'h-24 w-24 text-3xl',} }"/>
        <h3 class="tag text-xs text-sky-500 dark:text-sky-600 mb-2 flex items-center gap-2">
          <span class="inline-block w-[5px] h-full rounded-r-2xl bg-sky-500" />
          {{ $t(teacher.tag) }}
        </h3>
        <h3 m="t-4" text="gray-600 xl" font="extrabold">
          {{ teacher.name }}
        </h3>
        <div class="mt-4 text-sm font-bold text-gray-700/80 dark:text-gray-200/50">
          {{ $t('Students Says...') }}
        </div>
        <div class="text-gray-700/80 dark:text-gray-200/50 font-sans indent-[2em] leading-snug">
          {{ $t(teacher.desc) }}
        </div>
      </NuxtLink>
    </template>
  </div>
</template>
