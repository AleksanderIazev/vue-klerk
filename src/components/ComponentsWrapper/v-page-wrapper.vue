<template>
  <div class="page__wrapper">
    <Header />
    <MainLinks />
    <Subscribe />
    <div class="links__wrapper">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Header from "../Header/v-header.vue";
import MainLinks from "../Main/v-main-links.vue";
import Subscribe from "../Main/v-main-subscribe.vue";


export default {
  name: "PageWrapper",
  components: {
    Header,
    MainLinks,
    Subscribe
  },
};
</script>

<style>
*,
*::after,
*::before {
  box-sizing: border-box;
}

.page__wrapper {
  max-width: 1120px;
  min-height: 100vh;
  margin: 0 auto;
}
</style>
