<template>
  <div class="subscribe">
    <div class="subscribe__wrapper">
      <p class="subscribe__title">
        Выберите рассылки, которые подходят именно вам
      </p>
      <div class="subscribe__input-wrapper">
        <form id="subscribe-form">
          <input
            class="subscribe-form__input"
            type="email"
            placeholder="Электронная почта"
            maxlength="60"
          />
          <input
            class="subscribe-form__btn"
            type="submit"
            value="Подписаться"
          />
        </form>
    <div class="subscribe__toggle">
        <Toggle class="toggle-switch" />
        <p class="toggle-switch__text">Подписаться на все рассылки</p>
      </div>

      </div>
  
    </div>
  </div>
</template>

<script>
import Toggle from "../Main/v-toggle-switch.vue";
export default {
  name: "SubscribeBar",
  components: {
    Toggle,
  },
};
</script>

<style>
.subscribe {
  background-color: #f5f5f8;
  border-radius: 16px 16px 0px 0px;
  margin-top: 15px;
}
.subscribe__wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.subscribe__title {
  margin-top: 14px;
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: -0.01em;
  padding-top: 10px;
  margin-bottom: 24px;
}

#subscribe-form {
  width: 925px;
  display: flex;
  flex-direction: row;
  border: none;
  padding: 2px;

  position: relative;
}
.subscribe-form__input {
  padding: 16px 0 16px 16px;
  min-width: 765px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  border: none;
  border-radius: 15px 50px 50px 15px;
}
.subscribe-form__btn {
  position: absolute;
  right: 0;
  padding: 16px 32px;
  color: #fff;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  background: #316fee;
  cursor: pointer;
  border-radius: 50px;
}

input {
  flex-grow: 2;
  border: none;
  transition: all 0.5s;
  caret-color: #8ba3d4;
  color: #393636;
}
input:focus {
  outline: 0;
}
input:hover {
  opacity: 0.7;
}

.subscribe__toggle {
  display: flex;
  justify-content: flex-start;
  width: 82%;
  align-items:flex-end;
  margin-bottom: 32px;
}
.toggle-switch {
  margin-top: 16px;
  zoom: 0.7;
}
.toggle-switch__text {
  padding-left: 8px;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  
}
</style>
