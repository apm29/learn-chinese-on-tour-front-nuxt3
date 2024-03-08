<template>
  <main class="lcot-app">
    <NavSide class="lcot-nav-left"></NavSide>
    <main class="lcot-main-content">
      <slot></slot>
      <div class="h-32"></div>
      <footer>
        <NavFooter />
      </footer>
    </main>
  </main>
</template>

<script setup>

</script>

<style scoped>
.lcot-app {
  @apply h-screen w-screen;
}

.lcot-nav-left {
  @apply fixed left-0 top-0;
  width: var(--sidenav-width);
}

.lcot-main-content {
  padding-left: var(--sidenav-width);
  @apply bg-gray-50 dark:bg-gray-900;
}
</style>
