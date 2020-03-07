<script>
export default {
  model: {
    prop: 'currentIndex',
    event: 'change'
  },

  props: {
    tabsClass: {
      required: false,
      type: String,
      default: 'v-tabs'
    },

    tabListClass: {
      required: false,
      type: String,
      default: 'v-tablist'
    },

    tabListTabClass: {
      required: false,
      type: String,
      default: 'v-tablist-tab'
    },

    tabActiveClass: {
      required: false,
      type: String,
      default: 'v-tab-active'
    },

    currentIndex: {
      required: true,
      type: Number || String
    },

    wide: {
      required: false,
      default: false,
      type: Boolean
    }
  },

  render(createElement) {
    const tabs = this.$slots.default.filter(
      ({ componentOptions }) => componentOptions
    );

    const tabList = tabs.map(({ componentOptions: { propsData } }, index) => {
      const { label } = propsData;
      const isTabActive = index === this.currentIndex;

      return createElement(
        'li',
        {
          class: `${this.tabListTabClass} ${isTabActive ? 'v-tab-active' : ''}`,
          attrs: {
            role: 'tab',
            'aria-selected': isTabActive ? 'true' : 'false'
          },
          on: {
            click: () => {
              this.$emit('change', index);
            }
          }
        },
        [createElement('span', {}, label)]
      );
    });

    return createElement(
      'div',
      {
        class: `${this.tabsClass} ${this.full ? 'v-tabs-wide' : ''}`,
        attrs: {
          role: 'tabs'
        }
      },
      [
        createElement(
          'ul',
          {
            class: this.tabListClass,
            attrs: {
              role: 'tablist'
            }
          },
          tabList
        ),

        createElement(
          'transition',
          {
            props: {
              name: 'slide-content',
              mode: 'out-in'
            }
          },
          [tabs[this.currentIndex]]
        )
      ]
    );
  }
};
</script>
