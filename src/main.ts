import { createApp } from 'vue'
import './style.css'
import './output.css'
import App from './App.vue'
import router from './router';
import { createVuetify } from 'vuetify';
import { VChip } from 'vuetify/components';

// Create Vuetify instance
const vuetify = createVuetify({
    components: {
        VChip
    }
});

createApp(App)
    .use(router)
    .use(vuetify)
    .mount('#app')
