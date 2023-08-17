import { defineRule, configure } from 'vee-validate';
import AllRules from '@vee-validate/rules';
import { localize } from '@vee-validate/i18n';

export default defineNuxtPlugin({
    name: 'my-plugin',
    enforce: 'pre', // or 'post'
    async setup (nuxtApp) {
        Object.keys(AllRules).forEach(rule => {
            defineRule(rule, AllRules[rule]);
        });

        configure({
            generateMessage: localize({
              en: {
                messages: {
                  required: 'This field is required',
                },
              },
              tr: {
                messages: {
                  required: 'Bu alan gerekli.',
                },
              },
            }),
          });
    },
    hooks: {
      // You can directly register Nuxt app hooks here
      'app:created'() {
        const nuxtApp = useNuxtApp()
        // 
      }
    }
  })