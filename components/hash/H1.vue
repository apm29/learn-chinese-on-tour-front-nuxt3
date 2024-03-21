<template>
  <h1 :id="id" class="group" >
    <slot></slot>
    <NuxtLink @click="scrollToAnchor(id)" :href="`#${id}`" class="group-hover:visible invisible opacity-50 cursor-pointer">#</NuxtLink>
  </h1>
</template>

<script setup>
const { scrollToAnchor } = useAnchorScroll()
defineProps({
  id: {
    type: String,
  }
})
</script>

<style>

</style>
