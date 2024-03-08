<script setup>
import { useI18n } from 'vue-i18n'
const { locale } = useI18n()
const localeLocal = useLocalStorage('locale', 'en')
locale.value = localeLocal.value
const items = [
  [{
    label: 'English',
    value: 'en',
    click: () => {
      locale.value = 'en'
      localeLocal.value = 'en'
    }
  },
  {
    label: 'Español',
    value: 'es',
    click: () => {
      locale.value = 'es'
      localeLocal.value = 'es'
    }
  },
  {
    label: 'Français',
    value: 'fr',
    click: () => {
      locale.value = 'fr'
      localeLocal.value = 'fr'
    }
  },
  {
    label: '中文',
    value: 'zh',
    click: () => {
      locale.value = 'zh'
      localeLocal.value = 'zh'
    }
  },]
]

const localeLabel = computed(() => {
  return items[0].find(item => item.value === locale.value).label
})

</script>

<template>
  <ClientOnly>
    <UDropdown v-model="locale" :items="items" mode="hover" :popper="{ placement: 'right' }">
      <UButton color="white" :label="localeLabel" trailing-icon="i-heroicons-chevron-down-20-solid" />
    </UDropdown>
  </ClientOnly>
</template>
