<template>
  <div class="header">
    <div class="header__wrapper">
      <img src="../../images/klerk.png" alt="logo" />
      <div class="bread-crumbs__wrapper">
        <p class="bread-crumbs__text" v-if="route.path === '/'">Главная <span>→</span> Рассылки</p>
        <p class="bread-crumbs__text" v-if="route.path === '/social'">
          Главная <span>→</span> Соцсети
        </p>
        <p class="bread-crumbs__text" v-if="route.path === '/messenger'">
          Главная  <span>→</span> Мессенджеры
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";

export default {
  name: "HeaderComponent",
  setup() {
    const route = useRoute();
    return { route };
  },
};
</script>

<style>
span{
  display: inline-block;
  padding:0 10px;
}
p {
  margin: 0;
}
.bread-crumbs__wrapper {
  margin-top: 24px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 13px;
  line-height: 16px;
  color: #999999;
}
.bread-crumbs__text {
  display: flex;
  align-items: center;
}
.bread-crumbs__text + .bread-crumbs__text {
  padding-left: 20px;
}
</style>
