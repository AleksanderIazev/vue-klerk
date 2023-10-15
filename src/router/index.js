import { createRouter, createWebHistory } from "vue-router";

import SubscribeCard from "../components/Main/v-subscribe-card.vue";
import SocialComponent from "../components/Main/v-social.vue";
import MessengersComponent from "../components/Main/v-messengers.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: SubscribeCard,name:'Рассылки' },
    { path: "/social", component: SocialComponent,name:'Соцсети' },
    { path: "/messenger", component: MessengersComponent,name:'Мессенджеры' },
  ],
});

export default router;
