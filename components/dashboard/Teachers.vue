<script setup>
// const { data: teachers } = useFetch('/api/teachers')
// import teachers from '~/assets/data/teachers.json'
const teachers = [
  {
      "pic": "/teacher/rebecca.png",
      "name": "Rebecca Yang",
      "desc": "Teacher Yang is a wonderful teacher,i think her genuine kindness shines through her instruction in the Chinese tour. ",
      "tag": "English/Chinese Teacher"
  },
  {
      "pic": "/teacher/keran-li.png",
      "name": "Keran Li",
      "desc": "Mon professeur est très sérieux et charmant, nous aimons sa passion et son humour.",
      "tag": "French/Chinese Teacher"
  },
  {
      "pic": "/teacher/ailu.png",
      "name": "Ailu",
      "desc": "Ailu es muy amable, simpática y tiene mucha paciencia.",
      "tag": "Spanish/Chinese Teacher"
  },
  {
      "pic": "/teacher/ling-avatar.jpg",
      "name": "Ling",
      "desc": "Ling is great, Cheerful and lively, honest and modest are her attitude during the lessons on tour!",
      "tag": "English/Chinese Teacher"
  },
  {
      "pic": "/teacher/monica.png",
      "name": "Monica",
      "desc": "my teacher Monica has so many years of oral practical experience. She speaks like native speakers ,we had great fun in her lesson on tour.",
      "tag": "English/Chinese Teacher"
  },
  {
      "pic": "/teacher/drizzle.png",
      "name": "Drizzle",
      "desc": "Drizzle‘s lesson atmosphere is stable and interesting，she will give you many surprises example to help you to understand obscure grammar and language point.",
      "tag": "English/Chinese Teacher"
  }
]

</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 gap-x-4 gap-y-12">
    <div v-for="teacher of teachers" :key="teacher.name"
      class="bg-white dark:bg-gray-800 rounded-lg px-4 pt-3 pb-6 flex flex-col items-start duration-300 transition-all text-left border-2 border-transparent hover:border-gray-200 dark:hover:border-gray-600 hover:opacity-90 hover:shadow-2xl dark:shadow-gray-600">
      <UAvatar :src="teacher.pic" size="3xl" class="self-center mb-4" />
      <h3 class="tag text-xs text-sky-500 dark:text-sky-600 mb-2 flex items-center gap-2">
        <span class="inline-block w-[5px] h-full rounded-r-2xl bg-sky-500" />
        {{ teacher.tag }}
      </h3>
      <h3 m="t-4" text="gray-600 xl" font="extrabold">
        {{ teacher.name }}
      </h3>
      <div class="mt-4 text-sm font-bold text-gray-700/80 dark:text-gray-200/50">
        {{ $t('Students Says...') }}
      </div>
      <div class="text-gray-700/80 dark:text-gray-200/50 font-sans indent-[2em] leading-snug">
        {{ teacher.desc }}
      </div>
    </div>
  </div>
</template>
