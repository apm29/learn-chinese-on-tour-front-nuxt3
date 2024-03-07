<template>
  <div class='flex-container' @click="isDark = !isDark">
    <img alt='logo' class='h-24 rounded filter contrast-200' src='/logo.png'>
    <div class='text-base font-bold chinyen text-left'>
      Learn Chinese <br/> On Tour
    </div>
    <div class='text-base font-bold chinyen text-right transform scale-50'>
      REBECCA YANG STUDIO
    </div>
  </div>
</template>
<script setup lang="ts">
const colorMode = useColorMode()
const isDark = computed({
  get () {
    return colorMode.value === 'dark'
  },
  set () {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
})
</script>
<style scoped>
.flex-container {
  @apply text-center flex-shrink-0 flex flex-col items-center;
}
</style>
