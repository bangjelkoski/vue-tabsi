# 🌟 Tabsi

[![downloads](https://img.shields.io/npm/dm/vue-tabsi.svg)](https://www.npmjs.com/package/vue-tabsi)
[![npm-version](https://img.shields.io/npm/v/vue-tabsi.svg)](https://www.npmjs.com/package/vue-tabsi)
[![license](https://img.shields.io/npm/l/express.svg)]()

_Convenient and easy way to implement Tabs, Tab lists and Tab Contents within your Vue apps._

## ✨ Features

- Easy to use
- Unlimited number of tabs
- Has some flexibility
- You can include pre-defined styles or add your own

---

## 📚 Getting Started

```bash
$ yarn add vue-tabsi
# or
$ npm install vue-tabsi
```

## 🚀 Usage

1. Using the components build the desired tabs structure. Using the `v-model` on the `<v-tabs>` component change the current tab shown however you want.
2. Add all of the `<v-tabs>` within the `<v-tabs>` component and assign a `label` to them that will be used in the tab list for the corresponding tab.
3. Add the content to each of the `<v-tabs>` as desired,
4. You are good to go! 🏭

```vue
// Example usage within a component
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
import { VTab, VTabs } from 'vue-tabsi';

export default {
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
};
</script>
```

You can also install the plugin and its sample styles and have these components globally available within all of your vue components. 

```vue
import Vue from 'vue';
import VueTabsi from 'vue-tabsi';
import 'vue-tabsi/dist/vue_tabsi.css';

Vue.use(VueTabsi);
```

You can now use `<v-tabs>` and `<v-tab>` components anywhere in your Vue app.

## 📖 Documentation

There are two components that are included within this package

**Tabs Component `<v-tabs></v-tabs>`**

| Props           | Description                              | Type    | Required | Default       |
| --------------- | ---------------------------------------- | ------- | -------- | ------------- |
| currentIndex    | The current tab index                    | Integer | true     | -             |
| tabsClass       | Class of the root element                | String  | false    | v-tabs        |
| tabListClass    | Class of the tab list element            | String  | false    | v-tablist     |
| tabListTabClass | Class of the tab element in the tab list | String  | false    | v-tablist-tab |
| tabActiveClass  | Class of the tab list element            | String  | false    | v-tab-active  |
| wide            | Wether to expand tablist to full width   | Boolean | false    | false         |

And there is only one event on this component:

| Event  | Description           | Payload                       |
| ------ | --------------------- | ----------------------------- |
| change | When a tab is changed | Number [Index of the new tab] |

---

**Tab Component `<v-tab></v-tab>`**

| Props    | Description                | Type   | Required | Default |
| -------- | -------------------------- | ------ | -------- | ------- |
| label    | Label used in the tab list | String | true     | -       |
| tabClass | Class of the root element  | String | false    | v-tab   |

---

## ⛑ Support

Reach out to me at one of the following places!

- Website at <a href="https://bangjelkoski.com" target="_blank">`bangjelkoski.com`</a>
- Twitter at <a href="https://twitter.com/bangjelkoski" target="_blank">`@bangjelkoski`</a>

---

## 🔓 License

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- **[MIT license](http://opensource.org/licenses/mit-license.php)**
