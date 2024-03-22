<template>
  <aside class="lcot-side-nav">
    <AppLogo></AppLogo>
    <UDivider class="my-3" />
    <template v-for="link of links">
      <UButton v-if="!link.children" :ui="navButtonUi" variant="ghost" class="nav-button w-full" color="gray"
        :icon="link.icon" :label="$t(link.label)" :to="link.to"
        :class="isMainMenu(link, $route) ? 'nav-active' : 'nav-inactive'">
      </UButton>
      <UPopover v-else :popper="{ arrow: true, placement: 'right' }" mode="hover">
        <UButton :ui="navButtonUi" variant="ghost" class="nav-button w-full" color="gray" :icon="link.icon"
          :label="$t(link.label)" :class="isMainMenu(link, $route) ? 'nav-active' : 'nav-inactive'">
        </UButton>
        <template #panel>
          <div class="flex flex-col">
            <UButton v-for="subLink of link.children" variant="ghost" color="gray" :icon="subLink.icon"
              :label="$t(subLink.label)" :to="subLink.to" class="nav-button"
              :class="isSubMenu(subLink.to, $route) ? 'nav-active' : 'nav-inactive'">
            </UButton>
          </div>
        </template>
      </UPopover>
    </template>
    <UDivider class="my-3" />
    <div class="flex-grow"></div>
    <div class="flex">
      <AppLocaleSwitch></AppLocaleSwitch>
      <div class="flex-grow"></div>
      <AppDarkModeSwitch></AppDarkModeSwitch>
    </div>
  </aside>
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
    to: '/course',
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
    to: '/live',
    children: [
      {
        label: 'School in Hangzhou',
        icon: 'i-mdi-school',
        to: '/live/school',
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
    to: '/chinese',
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

function isMainMenu({ to, children }, $route) {
  if (to == '/') return to === $route.path
  return to === $route.path || $route.path.startsWith(to) || children?.some(child => isMainMenu(child, $route))
}
  
function isSubMenu(to, $route) {
  return to === $route.path
}

const navButtonUi = {
  color: {
    gray: {
      ghost: 'text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-primary-200 dark:hover:bg-primary-800 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 focus:text-primary mb-2 whitespace-nowrap'
    }
  }
}
</script>

<style scoped>
.lcot-side-nav {
  @apply h-screen px-2 py-3 border-r border-gray-300/50 dark:border-gray-700/60 overflow-y-auto overflow-x-visible dark:bg-gray-800/50 bg-white flex flex-col;
  width: var(--sidenav-width);
}

.nav-button {
  @apply focus:text-primary mb-2;
}
</style>
