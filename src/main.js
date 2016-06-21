import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)


import App from './App'
import List from './components/List'
import View from './components/View'
import Home from './components/Home'

// Create a router instance.
// You can pass in additional options here, but let's
// keep it simple for now.
var router = new VueRouter()

// Define some routes.
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// Vue.extend(), or just a component options object.
// We'll talk about nested routes later.
router.map({
    '/home':{
        component:Home
    },
    '/list/:cid': {
        name: 'list',
        component: List
    },
    '/view/:id': {
        name: 'view',
        component: View
    }
})

// Now we can start the app!
// The router will create an instance of App and mount to
// the element matching the selector #app.
router.start(App, 'app')
router.go('/home');
