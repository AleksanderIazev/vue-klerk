<template>
  <div class="subscribe-cards">
    <div class="subscribe-cards__wrapper">
      <div class="subscribe-cards__item">
        <div class="item__content">
          <p class="item__text text__head">Перед рассветом</p>
          <p class="item__text text-title">Утренний бухгалтер</p>
          <p class="item__text text__description">
            Самые важные новости и события за день. Кратко, по делу,
            структурировано.
          </p>
          <p class="item__text text__description--check">
            Новости для бухгалтеров, ИП и директора
          </p>
          <p class="item__text text__description--check">
            Подборка статей за день
          </p>
          <div class="item-toggle">
            <Toggle class="toggle" />
            <p class="toggle__text">Уже получает 59 342 человек</p>
          </div>
        </div>
        <img
          class="item__card-img"
          src="../../images/white-clip.png"
          alt="white-clip"
        />
      </div>

      <div class="subscribe-cards__item">
        <div class="item__content">
          <p class="item__text text__head">После заката</p>
          <p class="item__text text-title">Ночной бухгалтер</p>
          <p class="item__text text__description">
            Самая краткая газета о налогах и бухучете в мире — современная
            рассылка для чтения.
          </p>
          <p class="item__text text__description--check">
            Анализ, оценка и только самое главное
          </p>
          <p class="item__text text__description--check">
            Лучшие комменты юзеров в обзоре
          </p>
          <div class="item-toggle">
            <Toggle class="toggle" />
            <p class="toggle__text">Уже получает 59 342 человек</p>
          </div>
        </div>
        <img
          class="item__card-img"
          src="../../images/dark-clip.png"
          alt="white-clip"
        />
      </div>

      <div class="subscribe-cards__item">
        <div class="item__content">
          <p class="item__text text__head">Раз в две недели</p>
          <p class="item__text text-title">Ножницы скидок</p>
          <p class="item__text text__description">
            Подборка самых выгодных и полезных спецпредложений от надежных
            компаний.
          </p>
          <p class="item__text text__description--check">
            Акции и скидки от лидеров рынка
          </p>
          <p class="item__text text__description--check">
            Те, кто подписался – экономят много денег
          </p>
          <div class="item-toggle">
            <Toggle class="toggle" />
            <p class="toggle__text">Уже получает 92 118 человек</p>
          </div>
        </div>
        <img
          class="item__card-img"
          src="../../images/scissors.png"
          alt="white-clip"
        />
      </div>

      <div class="subscribe-cards__item">
        <div class="item__content">
          <p class="item__text text__head">По мере появления анонсов</p>
          <p class="item__text text-title">Чемодан вебинаров</p>
          <p class="item__text text__description text__description--last">
            Подборка с анонсами бесплатных вебинаров на самые топовые темы при
            участии экспертов.
          </p>
          <p class="item__text text__description--check">
            Никогда не пришлем платные вебинары
          </p>
          <p class="item__text text__description--check">
            Подборка топовых тем для вебинаров
          </p>
          <div class="item-toggle">
            <Toggle class="toggle" />
            <p class="toggle__text">Уже получает 92 082 человек</p>
          </div>
        </div>
        <img
          class="item__card-img"
          src="../../images/free.png"
          alt="white-clip"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Toggle from "../Main/v-toggle-switch.vue";
export default {
  name: "SubscribeCard",
  components: {
    Toggle,
  },
};
</script>

<style>
.subscribe-cards {
  background-color: #f5f5f8;
  padding-bottom: 40px;
}
.subscribe-cards__wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
}
.subscribe-cards__item {
  display: flex;
  padding: 24px 0 0 24px;
  width: 476px;
  height: 244px;
  background-color: #fff;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.08);
  border-radius: 16px;
}
.item__content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.item__card-img {
  width: 96px;
  height: 96px;
}
.item__text {
  margin: 0;
}
.text__head {
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  color: #999999;
}
.text-title {
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  color: #000;
  padding-bottom: 8px;
}
.text__description {
  font-weight: 400;
  max-width: 324px;
  line-height: 20px;
  color: #666666;
  text-align: start;
  padding-bottom: 16px;

  font-size: 14px;
}
.text__description--check {
  font-weight: 400;
  padding-bottom: 8px;
  line-height: 20px;
  color: #000;
}

.text__description--check::before {
  content: url(../../images/Check.svg);
  position: relative;
  top: 2px;
}
.toggle__text {
  font-weight: 400;
  padding-left: 9px;
  line-height: 20px;
  color: #000;
}
.item-toggle {
  display: flex;
}
.toggle {
  zoom: 0.9;
  position: relative;
  bottom: 7px;
}
</style>
