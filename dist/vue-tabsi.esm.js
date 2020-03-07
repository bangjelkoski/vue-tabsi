var script = {
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
    const tabs = this.$slots.default.filter(({
      componentOptions
    }) => componentOptions);
    const tabList = tabs.map(({
      componentOptions: {
        propsData
      }
    }, index) => {
      const {
        label
      } = propsData;
      const isTabActive = index === this.currentIndex;
      return createElement('li', {
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
      }, [createElement('span', {}, label)]);
    });
    return createElement('div', {
      class: `${this.tabsClass} ${this.full ? 'v-tabs-wide' : ''}`,
      attrs: {
        role: 'tabs'
      }
    }, [createElement('ul', {
      class: this.tabListClass,
      attrs: {
        role: 'tablist'
      }
    }, tabList), createElement('transition', {
      props: {
        name: 'slide-content',
        mode: 'out-in'
      }
    }, [tabs[this.currentIndex]])]);
  }

};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    const options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    let hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            const originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            const existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}

/* script */
const __vue_script__ = script;
/* template */

/* style */

const __vue_inject_styles__ = undefined;
/* scoped */

const __vue_scope_id__ = undefined;
/* module identifier */

const __vue_module_identifier__ = undefined;
/* functional template */

const __vue_is_functional_template__ = undefined;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

const __vue_component__ = normalizeComponent({}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, undefined, undefined);

const uniqueId = (characters = 6) => (Number(String(Math.random()).slice(2)) + Date.now() + Math.round(performance.now())).toString(characters);

var script$1 = {
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
    return createElement('div', {
      class: this.elementClass,
      key: `tab-${uniqueId()}`,
      attrs: {
        role: 'tabpanel'
      }
    }, this.$slots.default);
  }

};

/* script */
const __vue_script__$1 = script$1;
/* template */

/* style */

const __vue_inject_styles__$1 = undefined;
/* scoped */

const __vue_scope_id__$1 = undefined;
/* module identifier */

const __vue_module_identifier__$1 = undefined;
/* functional template */

const __vue_is_functional_template__$1 = undefined;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$1 = normalizeComponent({}, __vue_inject_styles__$1, __vue_script__$1, __vue_scope_id__$1, __vue_is_functional_template__$1, __vue_module_identifier__$1, false, undefined, undefined, undefined);



var components = /*#__PURE__*/Object.freeze({
  __proto__: null,
  VTabs: __vue_component__,
  VTab: __vue_component__$1
});

// Import vue components

const install = function installVueTabsi(Vue) {
  if (install.installed) return;
  install.installed = true;
  Object.entries(components).forEach(([componentName, component]) => {
    Vue.component(componentName, component);
  });
}; // Create module definition for Vue.use()


const plugin = {
  install
}; // To auto-install when vue is found
// eslint-disable-next-line no-redeclare

/* global window, global */

let GlobalVue = null;

if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}

if (GlobalVue) {
  GlobalVue.use(plugin);
} // Default export is library as a whole, registered via Vue.use()

export default plugin;
export { __vue_component__$1 as VTab, __vue_component__ as VTabs };
