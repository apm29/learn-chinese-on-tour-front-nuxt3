<template>
  <h1 :id="`fixed-${id}`" class="group" >
    <slot></slot>
    <NuxtLink @click="scrollToAnchor(`fixed-${id}`)" :href="`#${id}`" class="group-hover:visible invisible opacity-50 cursor-pointer">#</NuxtLink>
  </h1>
</template>

<script setup lang="js">
defineProps({
  id: {
    type: String,
  }
})
const { scrollToAnchor } = useAnchorScroll()
</script>

<style>

</style>
