<template>
  <div class="sidebar" >
    <v-card>
      <v-navigation-drawer
        absolute
        bottom
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
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  props: {
    drawer: {
      type: Boolean,
      default: true
    }
  },
  data: () => {
    return {
      selectedItem: 1,
      items: [
        {
          text: 'Словарь',
          icon: 'mdi-book-open-page-variant',
          to: '/dictionary'
        },
        { text: 'Добавить слово', icon: 'mdi-pen' },
      ],
    }
  }

}
</script>

<style scoped>

</style>
