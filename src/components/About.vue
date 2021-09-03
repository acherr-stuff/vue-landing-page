<template>
  <div class="container">
    <notice />

    <div class="about-our-goals-wrap">
      <div class="about-our-goals"></div>

      <p class="text font-white photo-text">
        Многие не верят предсказаниям и мы решили доказать каждому, <br />
        <span class="font-yellow"
          >что прогноз может изменить жизнь любого человека!</span
        >
      </p>
    </div>
  </div>
</template>


<script>
import Notice from "./Notice.vue";

export default {
  name: "About",
  components: {
    Notice,
  },
};
</script>
