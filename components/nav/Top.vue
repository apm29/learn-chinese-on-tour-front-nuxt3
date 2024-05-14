<template>
  <div class="">
    <UButton :ui="{ rounded: 'rounded-none', }" @click="toggleMenu()" block>
      <UIcon name="i-mdi-menu" />
      {{$t('Learn Chinese On Tour')}}
    </UButton>
    <USlideover v-model="showMenu" :ui="slideoverUi" side="left" :overlay="false">

      <aside class="lcot-top-nav">
        <AppLogo></AppLogo>
        <UDivider class="my-3" />
        <div class="flex">
          <AppLocaleSwitch></AppLocaleSwitch>
          <div class="flex-grow"></div>
          <AppDarkModeSwitch></AppDarkModeSwitch>
        </div>
        <UDivider class="my-3" />
        <template v-for="link of links">
          <UButton :ui="navButtonUi" variant="ghost" class="nav-button w-full" color="gray" :icon="link.icon"
            :label="$t(link.label)" :to="link.to" :class="isMainMenu(link.to, $route) ? 'nav-active' : 'nav-inactive'">
          </UButton>
          <div class="flex flex-col pl-8" v-if="link.children">
            <UButton v-for="subLink of link.children" variant="ghost" color="gray" :icon="subLink.icon"
              :label="$t(subLink.label)" :to="subLink.to" class="nav-button"
              :class="isSubMenu(subLink.to, $route) ? 'nav-active' : 'nav-inactive'">
            </UButton>
          </div>
        </template>


      </aside>
    </USlideover>
  </div>
</template>

<script setup>
const links = [
  {
    label: 'Home',
    icon: 'i-mdi-home',
    to: '/',
  },
  {
    label: 'About Us',
    icon: 'i-mdi-airplane-landing',
    children: [
      {
        label: 'Our service',
        icon: 'i-mdi-face-agent',
        to: '/about/service',
      },
      {
        label: 'Our team',
        icon: 'i-mdi-account-group',
        to: '/about/team',
      },
    ]
  },
  {
    label: 'Course on tours',
    icon: 'i-mdi-wallet-travel',
    children: [
      {
        label: 'Online class',
        icon: 'i-mdi-television-classic',
        to: '/course/online/hsk',
      },
      {
        label: 'Offline class',
        icon: 'i-mdi-human-male-board',
        to: '/course/offline',
      },
    ]
  },
  {
    label: 'About Hangzhou',
    icon: 'i-mdi-city-variant',
    children: [
      {
        label: 'News in Hangzhou',
        icon: 'i-mdi-newspaper',
        to: '/live/news',
      },
      {
        label: 'Tours in Hangzhou',
        icon: 'i-mdi-account-group',
        to: '/live/tour',
      },
    ]
  },
  {
    label: 'About Chinese',
    icon: 'i-mdi-post',
    children: [
      {
        label: 'One Sentence A Day',
        icon: 'i-mdi-message',
        to: '/chinese/daily-sentence'
      },
      {
        label: 'Tongue Twisters',
        icon: 'i-mdi-thumb-up',
        to: '/chinese/tongue-twist'
      },
      {
        label: 'Traditional Culture',
        icon: 'i-mdi-silverware',
        to: '/chinese/traditional-culture'
      },
      {
        label: 'Spoken Chinese',
        icon: 'i-mdi-emoticon-excited-outline',
        to: '/chinese/spoken-chinese'
      }
    ]
  },
  {
    label: 'Contact Us',
    icon: 'i-mdi-account-group',
    to: '/contact'
  },
]

const [showMenu, toggleMenu] = useToggle(false)

function isMainMenu(to, $route) {
  if (to == '/') return to === $route.path
  return to === $route.path || $route.path.startsWith(to)
}
function isSubMenu(to, $route) {
  console.log("🚀 ~ isSubMenu ~ to, $route:", to, $route.path)
  return to === $route.path
}

const navButtonUi = {
  color: {
    gray: {
      ghost: 'text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-primary-200 dark:hover:bg-primary-800 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 focus:text-primary mb-2'
    }
  }
}

const slideoverUi = {
  width: 'w-auto',
  wrapper: 'fixed inset-0 flex z-50 w-0 bg-gray-200/30',
}

const route = useRoute()
watch(() => route.fullPath, () => {
  toggleMenu(false)
})
</script>

<style scoped>
.lcot-top-nav {
  @apply h-screen w-[65vw] px-2 pt-12 pb-3 border-r border-gray-300/50 dark:border-gray-700/60 overflow-y-auto overflow-x-visible dark:bg-gray-800 bg-white flex flex-col shadow-md drop-shadow-lg;
}

.nav-button {
  @apply focus:text-primary mb-2;
}
</style>
