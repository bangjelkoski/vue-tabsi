<template>
  <div id="app">
    <v-tabs v-model="currentTabIndex">
      <v-tab label="First Tab">
        <p>
          Hello from the First Tab.
        </p>
      </v-tab>
      <v-tab label="Second Tab">
        <p>
          Hello from the Second Tab.
        </p>
      </v-tab>
    </v-tabs>
  </div>
</template>

<script>
import Vue from 'vue';
import { VTab, VTabs } from '@/index';

export default Vue.extend({
  name: 'Development',

  components: {
    VTabs,
    VTab
  },

  tabs: {
    firstTab: 0,
    secondTab: 1
  },

  data() {
    return {
      currentTabIndex: this.$options.tabs.firstTab
    };
  }
});
</script>
