import Vue from 'vue';

import App from './App.vue';
import router from './router';
import vuetify from 'vuetify';

Vue.config.productionTip = true;

new Vue({
    router,
    vuetify,
    render: h => h(App)
}).$mount('#app');