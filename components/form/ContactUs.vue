<template>
  <ClientOnly>
    <UForm :state="contactForm" :validate-on="['input', 'change', 'submit']" ref="form" :validate="validateContact"
      @submit="onCaptcha">
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
      <UButton type="submit" color="primary" block label="Submit" :ui="submitButtonUi" :loading="loading" />
    </UForm>
    <UModal v-model="showCaptcha" :ui="{ width: 'w-full sm:w-[320px]' }">
      <div class="p-4">
        <UForm :state="contactForm" :validate-on="['input', 'change', 'submit']" ref="form" :validate="validateCaptcha"
          @submit="onSubmit">
          <UCard>

            <div class="flex rounded-lg border border-gray-600/50 mb-2 overflow-hidden">
              <UImage :src="captchaImage"></UImage>
              <UDivider orientation="vertical"></UDivider>
              <UButton @click="regenerateUuid" icon="i-mdi-refresh" color="primary" variant="ghost"></UButton>
            </div>
            <UFormGroup label="" name="captcha" class="col-span-2">
              <UInput :ui="inputUi" v-model="contactForm.captcha" placeholder="Enter Captcha" />
            </UFormGroup>
            <template #footer>
              <UButton color="primary" type="submit" block :loading="loading" :ui="submitButtonUi">
                Send Mail
              </UButton>
            </template>

          </UCard>
        </UForm>
      </div>
    </UModal>
  </ClientOnly>
</template>

<script setup>
const contactForm = reactive({
  email: "",
  fullName: "",
  country: "",
  inquiry: "",
  captcha: "",
  uuid: generateUuid(),
})
const emailReg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
function validateContact() {
  const errors = []
  if (!contactForm.email) errors.push({ path: 'email', message: 'Email required' })
  if (!emailReg.test(contactForm.email)) errors.push({ path: 'email', message: 'Not a valid Email' })
  if (!contactForm.fullName) errors.push({ path: 'fullName', message: 'Fullname required' })
  if (!contactForm.country) errors.push({ path: 'country', message: 'Country required' })
  return errors
}

function validateCaptcha() {
  const errors = []
  if (!contactForm.captcha) errors.push({ path: 'captcha', message: 'Captcha required' })
  return errors
}

const showCaptcha = ref(false)

function generateUuid() {
  const s = []
  const hexDigits = '0123456789abcdef'
  for (let i = 0; i < 36; i++) {
    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1)
  }
  s[14] = '4' // bits 12-15 of the time_hi_and_version field to 0010
  s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1) // bits 6-7 of the clock_seq_hi_and_reserved to 01
  s[8] = s[13] = s[18] = s[23] = '-'
  return s.join('')
}

const captchaImage = computed(() => `/java/auth/captcha/image?uuid=${contactForm.uuid}`)

function regenerateUuid() {
  contactForm.uuid = generateUuid()
}

const form = ref()
const loading = ref(false)
const toast = useToast()

function onCaptcha() {
  showCaptcha.value = true
}
async function onSubmit() {
  try {
    loading.value = true
    const response = await $fetch(
      `/java/auth/mail/send`,
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
      contactForm.captcha = ""
      contactForm.uuid = generateUuid()
    } else {
      console.log(response);
      toast.add({
        title: response?.msg??'发送失败',
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
  variant: {
    outline: 'shadow-sm bg-white dark:bg-blue-200/50 text-gray-900 dark:text-white ring-2 ring-{color}-500 dark:ring-{color}-400 focus:ring-4 focus:ring-{color}-500 dark:focus:ring-{color}-400'
  },
  placeholder: 'placeholder-gray-300 dark:placeholder-gray-100/50',
}

const submitButtonUi = {
  color: {
    primary: {
      solid: 'shadow-sm text-white dark:text-white bg-primary-400 hover:bg-primary-400 disabled:bg-gray-300 dark:bg-primary-500 dark:hover:bg-primary-700 dark:disabled:bg-gray-500 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400'
    },
   
  },
}
</script>
