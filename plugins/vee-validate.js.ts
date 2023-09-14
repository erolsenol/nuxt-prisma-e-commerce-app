import { defineRule, configure } from 'vee-validate';
import AllRules from '@vee-validate/rules';
import { localize } from '@vee-validate/i18n';

export default defineNuxtPlugin({
  name: 'vee-validate',
  enforce: 'pre', // or 'post'
  async setup(nuxtApp) {
    Object.keys(AllRules).forEach(rule => {
      defineRule(rule, AllRules[rule]);
    });

    configure({
      validateOnBlur: true, // controls if `blur` events should trigger validation with `handleChange` handler
      validateOnChange: true, // controls if `change` events should trigger validation with `handleChange` handler
      validateOnInput: false, // controls if `input` events should trigger validation with `handleChange` handler
      validateOnModelUpdate: true, // controls if `update:modelValue` events should trigger validation with `handleChange` handler        
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
})