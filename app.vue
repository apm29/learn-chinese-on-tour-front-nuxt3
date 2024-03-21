<template>
  <NuxtLayout name="default">
    <NuxtPage />
  </NuxtLayout>
  <UNotifications />
  <NuxtLoadingIndicator :throttle="0" />
</template>
<script setup>
const nuxtApp = useNuxtApp()
nuxtApp.$anchorScroll.defaults.toAnchor = () => ({
  behavior: 'smooth',
  // No offsetLeft means no scroll on X axis
  offsetTop: 0,
})
</script>
<style>
.fade-enter-active {
  transition: all 0.3s ease;
}

.fade-leave-active {
  transition: all 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>
