<template>
  <div>
    <v-navigation-drawer
        v-model="showSide"
        app
    >
      <v-list>
        <v-list-item
            v-for="[icon, text, to] in menu"
            :key="icon"
            link
        >
          <v-list-item-icon>
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>

          <div style="padding-right: 10px"></div>

          <v-list-item-content>
            <v-list-item-title @click="go(to)">
              {{ text }}
            </v-list-item-title>
          </v-list-item-content>
          <div>
          </div>
        </v-list-item>
      </v-list>
      <NuxtLink to="/">Go to login</NuxtLink>
    </v-navigation-drawer>
  </div>
</template>

<script setup lang="ts">
import {useShowSideBar} from "../../composables/status";
const showSide = useShowSideBar()

const router = useRouter()

const menu = useState('menu', () =>
    [
      ['mdi-inbox-arrow-down', 'home', '/home'],
      ['mdi-send', 'dynamic page', '/dynamic'],
      ['mdi-delete', 'store', '/store'],
      ['mdi-alert-octagon', 'api', 'api'],
    ]
)

function go(to) {
  router.push({path: to})
}
</script>

<style scoped>

</style>
