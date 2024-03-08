<script setup>
const colorMode = useColorMode()
const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set() {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
})

</script>

<template>
  <ClientOnly>
   <UButton variant="ghost" @click="isDark = !isDark">
      <UIcon name="i-carbon-light" v-if="!isDark"></UIcon>
      <UIcon name="i-carbon-moon" v-if="isDark"></UIcon>
  </UButton>
  </ClientOnly>
</template>
