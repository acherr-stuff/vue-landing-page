<template>
  <div class="page">
    <section id="home-page" class="section">
      <div class="container">
        <header class="home-page-header header-main header">
          <p class="header-text font-gray text-xs">
            Лучшие астрологи и экстрасенсы Румынии
          </p>
        </header>

        <div class="home-page-content content">
          <p class="logo-text font-gray">Точность прогноза: 97%</p>

          <div class="content-logo logo-wrap wrap">
            <img class="logo-img logo" src="../assets/woman1.png" />
            <div class="logo-bg"></div>
          </div>

          <div class=" m-x question-wrap ">
            <div class="question-text m-x font-yellow">
              Вас беспокоит вопрос о том, <br />
              <span class="text-upp">
                когда Вы покинете этот Мир и при каких обстоятельствах?
              </span>
            </div>
            <div class="answer-section">
              <a
                class="btn btn-round btn-question"
                href="#"
                @click.prevent="onYesClick"
              >
                <div class="btn-left-part"></div>
                Да</a
              >
              <a class="btn btn-round btn-question" href="#test">
                <div class="btn-right-part"></div>
                Нет
              </a>
            </div>
            <div class="question-footer font-gray text-xs">
              Онлайн предсказание
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="about" class="">
      <about />
    </section>

    <section class="container">
      <div id="test" class="question-wrap m-x">
        <div class="question-text font-yellow text-upp">
          {{ question }}
        </div>
        <div class="answer-section">
          <a
            v-for="(option, index) in options"
            :key="option"
            @click.prevent="onAnswerSelected(index)"
            class="btn btn-round btn-question"
            href="#"
          >
            <div class="btn-right-part"></div>
            {{ option }}
          </a>
        </div>

        <div class="question-footer font-gray text-xs p-rel">
          Вопрос {{ number }}-5
        </div>
      </div>
    </section>

    <footer id="footer" class="footer-home">
      <footer-l />
    </footer>
  </div>
</template>

<script>
import About from "./About.vue";
import FooterL from "./FooterL.vue";

export default {
  name: "HomePage",
  components: {
    About,
    FooterL,
  },
  props: {
    index: Number,
    number: Number,
    quote: String,
    options: Array,
    question: String,
  },

  methods: {
    onYesClick() {
      this.$emit("presentQuestion", 1);
    },
    onAnswerSelected(selectedAnswer) {
      this.$emit("changeData", { index: this.index, output: selectedAnswer });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
