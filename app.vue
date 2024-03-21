<template>
  <NuxtLayout name="default">
    <NuxtPage />
  </NuxtLayout>
  <UNotifications />
  <NuxtLoadingIndicator :throttle="0" />
</template>
<script setup>
const nuxtApp = useNuxtApp()
// nuxtApp.$anchorScroll.defaults.toAnchor = () => ({
//   behavior: 'smooth',
//   // No offsetLeft means no scroll on X axis
//   offsetTop: 0,
// })

nuxtApp.$anchorScroll.matched.push(({ path, hash }) => {
  // Exit when route is not represent fixed example
  if (hash) {
    // All anchor element on this route is mangled
    const targetSelector = `#fixed-${hash.slice(1)}`
    const targetElement = document.querySelector(targetSelector)
    if (targetElement) {
      return {
        toAnchor: {
          target: targetElement,
          scrollOptions: toValue(useNuxtApp().$anchorScroll?.defaults?.toAnchor) ?? {},
        },
      }
    }
  }
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
