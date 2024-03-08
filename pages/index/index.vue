<template>
  <div>
    <DashboardPublicityFigure></DashboardPublicityFigure>
    <div class="px-5 md:px-16 lg:px-24">
      <h3 class="pl-2 text-2xl text-dark-600 text-left font-bold my-16">
        <i i-carbon-crowd-report class="text-sky-500 inline-block vertical-text-top" />
        {{ $t("Meet Our Full-time Mandarin Teachers On tour in Hangzhou") }}
      </h3>
      <DashboardTeachers />
      <h3 class="pl-2 text-2xl text-dark-600 text-left font-bold my-16">
        <i i-carbon-crowd-report class="text-sky-500 inline-block vertical-text-top"/>
        {{ $t("Why Us") }}
      </h3>
      <ul class="text-lg text-left mb-12 mx-1rem md:mx-4rem font-sans list-disc leading-relaxed">
        <li>Flexibility – you decide where and when you would like to have your class with our private Mandarin tutor.
        </li>
        <li>Mandarin Learning Materials – access to all of our course books and online courses.</li>
        <li>We offer the basic classes online and touch the real culture offline.</li>
        <li>
          A distinguished and experienced teachers -All of our tutors are Ministry of Teacher certified .They are all
          highly
          trained and experienced in organizing and teaching individuals and sharing culture for students with interests
          and
          love. All of them get tour guide certificate.
        </li>
        <li>
          We are a Legitimate LOCAL Chinese learning Company,lcot-hangzhou.com is fully owned and operated Hangzhou
          co-operation international education agency which is a legitimate education company licensed by the
          government.
        </li>
      </ul>
      <h2 class="text-dark-600 text-lg text-center font-bold mb-3 z-30">
        Get a free One-on-One trial lesson
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

