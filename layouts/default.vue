<template>
  <main class="lcot-app">
    <main class="lcot-main-content">
      <slot></slot>
    </main>
    <NavSide class="lcot-nav-left"></NavSide>
    <footer class="lcot-main-footer">
      <NavFooter />
    </footer>
  </main>
</template>

<script setup>

</script>

<style scoped>
.lcot-app {
  @apply h-screen w-screen;
  overflow: overlay;
}

.lcot-nav-left {
  @apply fixed left-0 top-0;
  width: var(--sidenav-width);
}

.lcot-main-content {
  padding-left: var(--sidenav-width);
  @apply bg-gray-50 dark:bg-gray-900 min-h-screen;
}
.lcot-main-footer {
  @apply bg-gray-50 dark:bg-gray-900 pt-12;
  padding-left: var(--sidenav-width);
}
</style>
