<script>
import { uniqueId } from './../utils/generators';

export default {
  props: {
    tabClass: {
      required: false,
      default: 'v-tab-content',
      type: String
    },

    label: {
      required: true,
      type: String
    }
  },

  render(createElement) {
    return createElement(
      'div',
      {
        class: this.elementClass,
        key: `tab-${uniqueId()}`,
        attrs: {
          role: 'tabpanel'
        }
      },
      this.$slots.default
    );
  }
};
</script>
