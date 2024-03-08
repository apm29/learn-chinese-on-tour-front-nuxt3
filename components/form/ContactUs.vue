<template>
  <UForm :state="contactForm" ref="form" :validate="validate" @submit="onSubmit">
    <div class="grid grid-cols-2 gap-4 mb-12">
      <UFormGroup label="" name="fullName">
        <UInput placeholder="your fullname" :ui="inputUi" color="primary" v-model="contactForm.fullName" />
      </UFormGroup>
      <UFormGroup label="" name="country">
        <UInput placeholder="your country" :ui="inputUi" color="primary" v-model="contactForm.country" />
      </UFormGroup>
      <UFormGroup label="" name="email" class="col-span-2">
        <UInput :ui="inputUi" color="primary" placeholder="your email" v-model="contactForm.email" />
      </UFormGroup>
      <UFormGroup label="" name="inquiry" class="col-span-2">
        <UTextarea color="primary" :ui="inputUi" placeholder="your inquiry here..." class="col-span-2"
          v-model="contactForm.inquiry" />
      </UFormGroup>
    </div>

    <UButton color="primary" type="submit" block :loading="loading" :ui="submitButtonUi">
      Submit
    </UButton>
  </UForm>
</template>

<script setup>
const contactForm = reactive({
  email: "",
  fullName: "",
  country: "",
  inquiry: ""
})
const emailReg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
function validate() {
  const errors = []
  if (!contactForm.email) errors.push({ path: 'email', message: 'Email required' })
  if (!emailReg.test(contactForm.email)) errors.push({ path: 'email', message: 'Not a valid Email' })
  if (!contactForm.fullName) errors.push({ path: 'fullName', message: 'Fullname required' })
  if (!contactForm.country) errors.push({ path: 'country', message: 'Country required' })
  return errors
}
const form = ref()
const loading = ref(false)
const toast = useToast()
async function onSubmit() {
  try {
    loading.value = true
    const response = await $fetch(
      `/api/mail/send`,
      {
        method: 'POST',
        body: JSON.stringify(contactForm),
        ssr: false
      },
    )
    if (response?.code === 200) {
      toast.add({
        title: '发送成功',
        icon: 'i-mdi-check',
      })
      unref(form).clear()
      contactForm.country = ""
      contactForm.fullName = ""
      contactForm.email = ""
      contactForm.inquiry = ""
    } else {
      toast.add({
        title: '发送失败',
        icon: 'i-mdi-alert',
      })
    }
  } catch (error) {
    console.error(error);
    toast.add({
      title: '发送失败',
      icon: 'i-mdi-alert',
    })
  } finally {
    loading.value = false
  }
}

const inputUi = {
  color: {
    primary: {
      outline: 'shadow-sm bg-white dark:bg-blue-200/50 text-gray-900 dark:text-white ring-1 ring-inset ring-primary-300 dark:ring-primary-300 focus:ring-2 focus:ring-primary-700 dark:focus:ring-primary-400'
    },
  },
  placeholder: 'placeholder-gray-300 dark:placeholder-gray-100/50',
}

const submitButtonUi = {
  color: {
    primary: {
      solid: 'shadow-sm text-white dark:text-white bg-primary-300 hover:bg-primary-400 disabled:bg-gray-900 dark:bg-primary-500 dark:hover:bg-primary-700 dark:disabled:bg-white focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400'
    }
  }
}
</script>
