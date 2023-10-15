<template>
  <div class="main">
    <div class="main__wrapper">
      <h1 class="main__title">Подписки «Клерка»</h1>
      <div class="main__links">
        <router-link class="main__link main__link-mailing" to="/">Рассылки</router-link>
        <router-link class="main__link main__link-social" to="/social">Соцсети</router-link>
        <router-link class="main__link main__link-messenger" to="/messenger">Мессенджеры</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainLinks",
};
</script>

<style>
.main__link {
  text-decoration: none;
  color: #666666;
  cursor: pointer;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  padding-bottom: 16px;
}
.main__link + .main__link {
  margin-left: 24px;
}

.main__link:hover {
  color: #5a8cf1;
  border-bottom: 2px solid #5a8cf1;
}

.main {
  margin-top: 24px;
}
.main__title {
  font-style: normal;
  font-weight: 500;
  font-size: 56px;
  line-height: 72px;
  letter-spacing: -0.01em;
}
</style>
