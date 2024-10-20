import { createRouter, createWebHistory } from 'vue-router';
import data from '../producers.json';
import ProducerView from '../views/ProducerView.vue';

const routes = data.producers.map((producer) => ({
  path: `/producer/${producer.id}`,
  name: `Producer${producer.id}`,
  component: ProducerView,
  props: producer
}));

routes.push({
    path: '/producers',
    name: 'Producers',
    component: () => import('../views/ProducersView.vue'),
    props: { producers: data.producers }

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
