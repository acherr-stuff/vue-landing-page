<template>
  <div class="page">

    <section id="home-page" class="section">

      <div class="container">

      <header class="home-page-header header">
            <div class="header-main main">
            <p class="mt-35 font-gray text-xs">Лучшие астрологи и экстрасенсы Румынии</p>
            </div>
      </header>

        <div class="home-page-content content">
        <p class="font-gray text-md mt-10">Точность прогноза: 97%</p>

        <div class="content-logo logo-wrap wrap mt-40">
          <img class="logo-img logo" src="../assets/woman1.png">
          <div class="logo-bg"> </div>
        </div>


        <div class="content-question question-wrap mb-40 wrap">
          <div class="question font-yellow text">
            Вас беспокоит вопрос о том, <br>
            <span class="text-upp">
              когда Вы покинете этот Мир и при каких обстоятельствах?
            </span>
          </div>
          <div class="answer-section">
            <a class="btn btn-round btn-question" href="#">
            <div class="btn-left-part">
            </div>
            Да</a>
            <a class="btn btn-round btn-question" href="#">
            <div class="btn-right-part">
            </div>
            Нет
            </a>
          </div>
          <div class="question-footer footer font-gray text text-xs">
          Онлайн предсказание
        </div>
        </div>

        </div>

      </div>
    </section>
    <section id="about" class="">
      <about/>
    </section>

    <section id="test" class="">
      <test/>
    </section>

    <section id="footer" class="">
      <footer-l/>
    </section>

  </div>
</template>

<script>

import About from './About.vue'
import Test from './Test.vue'
import FooterL from './FooterL.vue'


export default {
  name: 'HomePage',
   components: {
    About,
    Test,
    FooterL
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
