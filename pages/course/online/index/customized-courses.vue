<template>
  <article select="none"
    class="prose prose-stone dark:prose-invert pt-10 prose-sm  sm:prose lg:prose-lg xl:prose-2xl mx-auto px-4 py-2">
    <h1>Customized Courses </h1>
    <h2 class="subtitle">Adult & kids Classes</h2>
    <p>
      We offer all Chinese language courses from Listening,Talking,Reading,Writing for adult students. It's suitable for
      age over 18 ,the learning objectives and contents at all levels are based on Chinese proficiency
      test(HSK).Besides, we also have some other training for adult students,such as Developing Chinese,Integrated
      Chinese,360 Standard Sentences in Chinese Conversations .

    </p>

    <div class="pic-gallery text-center sm:grid sm:grid-cols-2 sm:grid-row-2 gap-2" data-aos="fade-up">

      <UImage class="gallery-item" src="/customized-courses/image2.jpeg"> </UImage>
      <UImage class="gallery-item" src="/customized-courses/image3.jpeg"></UImage>
      <UImage class="gallery-item" src="/customized-courses/image4.jpeg"></UImage>
      <UImage class="gallery-item" src="/customized-courses/image5.jpeg"></UImage>

    </div>

    <p>
      We offer all Chinese language courses for kids,It's suitable for age from 3 to 16,all the teaching materials fit
      children's learning requirements. Multiple courses like Happy Chinese, Easy Chinese,YCT and Chinese Paradise are
      offered.Through reading and writing the Chinese classics and poetry, kids can understand the author's thoughts and
      feelings, improve language thinking, enrich vocabulary, and have a better ability to solve problems.

    </p>

    <div class="pic-gallery text-center sm:grid sm:grid-cols-2 sm:grid-row-2 gap-2" data-aos="fade-up">

      <UImage class="gallery-item" src="/customized-courses/image6.jpeg"> </UImage>
      <UImage class="gallery-item" src="/customized-courses/image7.jpeg"></UImage>
      <UImage class="gallery-item" src="/customized-courses/image8.jpeg"></UImage>
      <UImage class="gallery-item" src="/customized-courses/image9.jpeg"></UImage>
      

    </div>
  </article>
</template>

<script setup>
useHead({
  title: 'Customized Courses',
})
</script>

<style scoped>
.subtitle {
  /* 设置副标题的样式 */
  text-align: right;
  /* 对齐方式 */
}

.subtitle::before {
  /* 设置横线的样式 */
  content: "——";
  /* 横线内容 */
}

.gallery-item {
  @apply aspect-[9/14];
}
</style>
