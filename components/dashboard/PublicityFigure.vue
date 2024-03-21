<script setup lang="ts">
const { travelToContact, ContactTypes } = useContact()
</script>

<template>
  <div class="relative min-h-[32vh] bg-gray-500/60">
    <img src="/dashboard-bg.jpeg" class="object-cover filter blur-[6px] grayscale-[100]">
    <div
      class="container-cover absolute top-0 left-0 bottom-0 right-0 flex flex-col items-center justify-center bg-gray-100/55 dark:bg-gray-900/55 gap-y-3">
      <h2 class="text-3xl text-dark-300 text-center max-w-[80%] font-extrabold">
        {{ $t("Study Mandarin Chinese On Tour For Fun") }}
      </h2>
      <h3 class="text-xl text-dark-200 text-center">
        {{ $t("Want to learn Chinese?") }}
      </h3>
      <div class="flex items-center gap-x-3">
        <UButton :ui="{ rounded: 'rounded-full' }" @click="travelToContact(ContactTypes.GET_STARTED)">
          {{ $t("Get Started") }}
        </UButton>
        <UButton :ui="{ rounded: 'rounded-full' }" @click="travelToContact(ContactTypes.ONE_ON_ONE_CLASS)">
          {{ $t("1 on 1 Class") }}
        </UButton>
      </div>
    </div>
  </div>
</template>
