<template>
  <div>
    <DashboardPublicityFigure></DashboardPublicityFigure>
    <div class="px-5 md:px-16 lg:px-24">
      <h3 class="text-2xl text-dark-600 text-left font-bold my-16">
        <UIcon name="i-carbon-crowd-report" class="text-sky-500 inline-block align-middle" />
        {{ $t("Meet Our Full-time Mandarin Teachers On tour in Hangzhou") }}
      </h3>
      <DashboardTeachers />
      <h3 class="text-2xl text-dark-600 text-left font-bold my-16">
        <UIcon name="i-carbon-crowd-report" class="text-sky-500 inline-block align-middle"/>
        {{ $t("Why Us") }}
      </h3>
      <ul class="text-lg text-left mb-12 ml-[2em] sm:ml-[3em] sm:mr-[1em] font-sans list-disc leading-relaxed">
        <li>{{ $t('Why Us#1') }}
        </li>
        <li>{{ $t('Why Us#2') }}</li>
        <li>{{$t('Why Us#3')}}</li>
        <li>
          {{ $t('Why Us#4') }}
        </li>
        <li>
          {{ $t('Why Us#5') }}
        </li>
      </ul>
      <h2 class="text-dark-600 text-lg text-center font-bold mb-3 z-30">
        {{ $t('Get a free One-on-One trial lesson') }}
      </h2>
      <div class="mx-auto sm:max-w-[24rem] max-w-[20rem]">
        <FormContactUs/>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'Dashboard',
})

definePageMeta({
  pageTransition: { name: 'fade', mode: 'out-in' },
})
</script>

