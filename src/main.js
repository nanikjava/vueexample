import Vue from 'vue'
import App from './App.vue'

new Vue({
  data() {
    return {
      items: [
        { message: 'Foo' },
        { message: 'Bar' }
      ]
    }
  },
  render: h => h(App),
}).$mount('#app')
