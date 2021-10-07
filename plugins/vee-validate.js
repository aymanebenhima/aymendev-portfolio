import Vue from 'vue'
import {extend,ValidationObserver, ValidationProvider} from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';


Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);

Object.keys(rules).forEach(rule => {
  extend(rule, rules[rule]);
});

/* extend('required', {
  ...required,
  message: 'This field is required'
});

extend('alpha', {
  ...alpha,
  message: 'This field must only contain alphabetic characters'
}); */
