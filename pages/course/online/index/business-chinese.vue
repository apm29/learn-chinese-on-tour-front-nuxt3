<template>
  <article select="none"
    class="prose prose-stone dark:prose-invert pt-10 prose-sm  sm:prose lg:prose-lg xl:prose-2xl mx-auto px-4 py-2">
    <h1>Business Chinese </h1>
    <h2 class="subtitle">One-on-one Class</h2>
    <p>
      Learn Chinese On Tour Studio has face-to-face courses and online courses，we wold like to create a set of
      professional language training services helping for business people at multinational enterprises in Hangzhou, as
      well as their family members.From basic language skills to advanced courses, and one-on-one VIP customized
      courses,
      so the class time is more flexible, we promise:
    </p>
    <ol>
      <li>
        Classroom: Lively and enthusiastic；Immersive teaching with English/French/Spanish;
      </li>
      <li>
        Tutors: Fluent in foreign languages；Kind and natural; Literary enthusiasts.
      </li>
      <li>
        Service: Anytime and anywhere; Smaller classes with higher standards; Better effectiveness and excellent
        qualities.
      </li>
    </ol>

    <div class="pic-gallery text-center sm:grid sm:grid-cols-5 gap-2" data-aos="fade-up">

      <UImage class="gallery-item" src="/business-chinese/image1.png"> </UImage>
      <UImage class="gallery-item" src="/business-chinese/image2.png"> </UImage>
      <UImage class="gallery-item" src="/business-chinese/image3.png"></UImage>
      <UImage class="gallery-item" src="/business-chinese/image4.png"></UImage>
      <UImage class="gallery-item" src="/business-chinese/image5.png"></UImage>

    </div>

  </article>
</template>

<script setup>
useHead({
  title: 'Business Chinese',
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
  @apply aspect-[9/13];
}
</style>
