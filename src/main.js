// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//https://github.com/smman89/vue_landing


import Vue from 'vue'
require("@/assets/css/main.css");
import App from './App'
import router from './router'

// import './assets/css/main.css'

// import '@'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

// // .header-main-outer {
// //     display: block;
// //     position: relative;
// //     padding: 0 196px;
// //     height: inherit;
// //   }

// ам нужно привязать переменную к :is имущество. И измените эту переменную по нажатию кнопки. Также вам нужно будет объединить его с некоторыми v-show состояние. Вот так:

// <div id="toReplace">
//     <div :is="currentComponent"></div>
//     <div v-show="!currentComponent" v-for="component in componentsArray">
//       <button @click="swapComponent(component)">{{component}}</button>
//     </div>
// </div>
// <button @click="swapComponent(null)">Close</button>

// new Vue({
//   el: 'body',
//   data: {
//     currentComponent: null,
//     componentsArray: ['foo', 'bar']
//   },
//   components: {
//     'foo': {
//       template: '<h1>Foo component</h1>'
//     },
//     'bar': {
//       template: '<h1>Bar component</h1>'
//     }
//   },
//   methods: {
//     swapComponent: function(component)
//     {
//       this.currentComponent = component;
//     }
//   }
// });
