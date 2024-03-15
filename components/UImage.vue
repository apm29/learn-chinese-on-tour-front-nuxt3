<script setup>
import { useImage } from '@vueuse/core'
const props = defineProps({
  src: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    default: '',
  },
})
const { isLoading } = useImage({ src: props.src })
</script>

<template>
  <div v-if="isLoading" class="flex items-center justify-center bg-gray-100 dark:bg-gray-800 animate-pulse" v-bind="$attrs">
    <span class="loading-text">Loading</span>
  </div>
  <img v-else :src="src" v-bind="$attrs" />
</template>

<style scoped>

@keyframes loading {
  to {
    background-position-x: -20%;
  }
}

.loading-text::after {
  content: "";
  align-items: center;
  right: 0%;
  bottom: 0;
  animation: dot 3s infinite steps(3, start);
}

@keyframes dot {
  33.33% {
    content: ".";
  }

  66.67% {
    content: "..";
  }

  100% {
    content: "...";
  }
}
</style>
