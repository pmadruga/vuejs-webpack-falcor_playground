// main.js
var Vue = require('vue')
  // require a *.vue component
var AppComponent = require('./components/App.vue')

// mount a root Vue instance
new Vue({
  el: 'body',
  components: {
    app: AppComponent
  }
})
