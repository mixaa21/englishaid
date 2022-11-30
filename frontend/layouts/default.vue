<template>
  <v-app class="app">
    <v-card class="card">
      <v-app-bar>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      </v-app-bar>
      <v-navigation-drawer
        :class="{sidebar, active: drawer}"
        absolute
        bottom
        temporary
        v-model="drawer"
      >
        <v-list>
          <v-list-item-group
            v-model="selectedItem"
          >
            <v-list-item
              v-for="(item, i) in items"
              :key="i"
              :to="item.to"
              router
              exact
            >
              <v-list-item-icon>
                <v-icon v-text="item.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title class="text-h6">
                  {{ item.text }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-divider></v-divider>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
      <Nuxt class="attachment" />
    </v-card>
  </v-app>
</template>

<script>

import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";

export default {
  name: 'DefaultLayout',
  import: { Sidebar, Navbar },
  data () {
    return {
      drawer: null,
      selectedItem: 1,
      items: [
        {
          text: 'Словарь',
          icon: 'mdi-book-open-page-variant',
          to: '/dictionary'
        },
        {
          text: 'Учить слова',
          icon: 'mdi-pen',
          to: '/study'
        },
      ],
    }
  },
  watch: {
    drawer(val) {
      val ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'visible'
    }
  }
}
</script>

<style lang="scss">

.card {
  min-height: 100vh;
}

.attachment {
  padding: 20px;
}
.app {
  min-height: 100vh;
}
.sidebar {
  background: var(--v-background-base)
}

</style>
