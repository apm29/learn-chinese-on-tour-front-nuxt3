<template>
  <main class="lcot-app">
    <NavTop class="lcot-nav-top"></NavTop>
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
  @apply hidden sm:block sm:fixed left-0 top-0;
  width: var(--sidenav-width);
}

.lcot-nav-top {
  @apply static sm:hidden;
}

.lcot-main-content {
  @apply bg-gray-50 dark:bg-gray-900 min-h-screen pl-0 sm:pl-[var(--sidenav-width)];
}
.lcot-main-footer {
  @apply bg-gray-50 dark:bg-gray-900 pt-12 pl-0 sm:pl-[var(--sidenav-width)];
}
</style>
