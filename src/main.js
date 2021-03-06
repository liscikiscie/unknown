import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store'

const fb = require('./api/firebase');

Vue.config.productionTip = false;

//Firebase initializes before loading the app when a user refreshes a page
let app;
fb.auth.onAuthStateChanged(user => {
    if ( !app ) {
        app = new Vue({
            router,
            store,
            render: h => h(App)
        }).$mount('#app');
    }
});

