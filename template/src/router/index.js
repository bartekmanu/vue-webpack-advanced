import Vue from 'vue'
import Router from 'vue-router'
{{#vuemeta}}
import Meta from 'vue-meta'
{{/vuemeta}}
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)
{{#vuemeta}}
Vue.use(Meta);
{{/vuemeta}}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
