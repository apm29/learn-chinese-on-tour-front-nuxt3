<template>
  <aside class="lcot-side-nav">
    <AppLogo></AppLogo>
    <UDivider class="my-3" />
    <template v-for="link of links">
      <UButton v-if="!link.children" variant="ghost" class="nav-button w-full" color="gray" :icon="link.icon"
        :label="link.label" :to="link.to" :class="isMainMenu(link.to, $route) ? 'nav-active' : 'nav-inactive'">
      </UButton>
      <UPopover v-else :popper="{ arrow: true, placement: 'right' }">
        <UButton variant="ghost" class="w-full" color="gray" :icon="link.icon" :label="link.label">
        </UButton>
        <template #panel>
          <div class="flex flex-col">
            <UButton v-for="subLink of link.children" variant="ghost" color="gray" :icon="subLink.icon"
              :label="subLink.label" :to="subLink.to" class="nav-button"
              :class="isSubMenu(link.to, $route) ? 'nav-active' : 'nav-inactive'">
            </UButton>
          </div>
        </template>
      </UPopover>
    </template>
    <UDivider class="my-3" />
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
        to: '/course/online',
      },
      {
        label: 'Offline class',
        icon: 'i-mdi-human-male-board',
        to: '/course/offline',
      },
    ]
  },
  {
    label: 'Live in Hangzhou',
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
    to: '/live',
    children: [
      {
        label: 'One Sentence A Day',
        icon: 'i-mdi-message',
        to: '/china/daily'
      },
      {
        label: 'Tongue Twisters',
        icon: 'i-mdi-thumb-up',
        to: '/china/tongue'
      },
      {
        label: 'Traditional Culture',
        icon: 'i-mdi-silverware',
        to: '/china/culture'
      },
      {
        label: 'Spoken Chinese',
        icon: 'i-mdi-emoticon-excited-outline',
        to: '/china/spoken'
      }
    ]
  },
  {
    label: 'Contact Us',
    icon: 'i-mdi-account-group',
    to: '/contact'
  },
]

function isMainMenu(to, $route) {
  if(to == '/') return to === $route.path
  return to === $route.path || $route.path.startsWith(to)
}
function isSubMenu(to, $route) {
  return to === $route.path
}
</script>

<style scoped>
.lcot-side-nav {
  @apply h-screen px-2 py-3 border-r border-gray-300/50 dark:border-gray-700/60 overflow-y-auto overflow-x-visible dark:bg-gray-600/50;;
  width: var(--sidenav-width);
}
.nav-button {
  @apply focus:text-primary mb-2;
}
</style>
