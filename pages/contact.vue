<script setup lang="ts">
const route = useRoute()
const { ContactTypes } = useContact()

useHead({
  title: 'Contact Us',
})

</script>

<template>
  <div class="contact-us-page ">
    <div class="absolute  top-[-45rem] left-[-45rem] overflow-visible rounded-full bg-yellow-500/30 w-[64rem] h-[64rem]" />
    <div class="absolute  top-1/2 right-[-100rem] overflow-visible rounded-full bg-lime-500/30 w-[128rem] h-[128rem]"/>
    <div class="absolute  top-[-3rem] right-[-3rem] overflow-visible rounded-full bg-orange-500/30 w-[18rem] h-[18rem]"/>
    <div class="absolute  top-[80vh] right-[-70rem] overflow-visible rounded-full bg-red-500/30 w-[196rem] h-[196rem]"/>


    <h1 class="text-white text-3xl text-center font-bold mb-6">
      Contact Us
    </h1>

    <div v-if="route.query.type === ContactTypes.ONE_ON_ONE_CLASS" class="mb-12">
      <h2 class="text-white text-lg text-center font-bold mb-3">
        Online Chinese Class with Private Teachers
      </h2>
      <h5 class="text-white text-left indent-[2em] max-w-[90%] mx-auto">
        Want to study Chinese courses online with a private tutor ? We have French/Spanish/English teachers, they are
        all our star teachers who made our students' favorite Chinese lessons. Now you can take 1-on-1 online class with
        any of those tutors to help you study and speak Mandarin Chinese better.
        Our teachers' classes can be taught one on one via Skype or WeChat. All lessons can proceed at your schedule
        time and your own pace.
        Send us a message to schedule your private lessons or ask for more information.
      </h5>
    </div>
    <h2 v-else class="text-white text-lg text-center font-bold mb-12">
      Get in touch with our team to discuss your plan.
    </h2>
    <FormContactUs></FormContactUs>
  </div>
</template>

<style scoped>
.contact-us-page {
  @apply bg-gradient-to-tl min-h-screen from-gray-700 dark:from-black to-sky-400 dark:to-sky-800 pb-48 pt-12 px-4 flex flex-col items-center justify-center overflow-hidden transition-all ease-in-out relative;
}
</style>
