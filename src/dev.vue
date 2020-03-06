<template>
  <div id="app">
    <v-tabs v-model="currentTabIndex">
      <v-tab label="First Tab">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt labore
          ab doloribus consequuntur voluptatibus neque corporis ratione, ipsa
          porro modi ut quo dignissimos, aspernatur consequatur adipisci tempora
          officia officiis cum.
        </p>
      </v-tab>
      <v-tab label="Second Tab">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt labore
          ab doloribus consequuntur voluptatibus neque corporis ratione, ipsa
          porro modi ut quo dignissimos, aspernatur consequatur adipisci tempora
          officia officiis cum.
        </p>
      </v-tab>
    </v-tabs>
  </div>
</template>

<script>
import Vue from 'vue'
import { VTab, VTabs } from '@/entry'

export default Vue.extend({
  name: 'Development',

  components: {
    VTabs,
    VTab
  },

  tabs: {
    openOrders: 0,
    filledOrders: 1
  },

  data() {
    return {
      currentTabIndex: this.$options.tabs.openOrders
    }
  }
})
</script>
