<template>
  <div class="px-10 py-12 flex flex-col gap-4">
    <div class="item">12</div>
    <div class="item" data-aos="fade-up">12</div>
    <div class="item">12</div>
    <div class="item">12</div>
    <div class="item">12</div>
  </div>
</template>

<script setup>

</script>

<style scoped>
.scroll-section {
  @apply min-h-screen w-full relative;
}
.item {
  @apply min-h-32 min-w-32 bg-gray-200;
}
</style>
