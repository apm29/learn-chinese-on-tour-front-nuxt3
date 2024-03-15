<template>
  <NuxtLayout name="default">
    <NuxtPage />
  </NuxtLayout>
  <UNotifications />
</template>

<style>
.fade-enter-active {
  transition: all 0.3s ease;
}
.fade-leave-active {
  transition: all 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

.fade-enter-to, .fade-leave-from {
  opacity: 1;
}
</style>
