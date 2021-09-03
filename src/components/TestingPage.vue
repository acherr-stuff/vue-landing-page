<template>
  <div class="test-page">
    <div class="container container-test">
      <!-- <div class="content"> -->
      <header class="test-page-header header">
        <div class="content p-rel">
          <div class="quote-text font-curve">
            {{ quote }}
          </div>

          <img src="../assets/eye.svg" class="eye-bg-h op-02 fr" alt="" />

        </div>
      </header>
    </div>
    <div class="container container-test test container-bottom">
      <!-- <div class="q content"> -->
        <div class="content-question question-wrap m-x wrap">
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
        </div>
       <!-- </div> -->
        <div class="question-footer container-test font-gray m-x text-xs p-rel">
          <img class="moon-bg-q op-02 fl" src="../assets/moon.svg" alt="">

          Вопрос {{ number }}-5
        </div>

    </div>
  </div>
</template>


<script>
import QuestionForm from "./test/QuestionForm";
// import SelectForm from './test/SelectForm'
import Preloader from "./test/Preloader";

export default {
  name: "TestingPage",
  components: {
    QuestionForm,
    // SelectForm,
    Preloader,
  },
  props: {
    index: Number,
    number: Number,
    options: Array,
    question: String,
    quote: String,
  },
  data: function () {
    return {
      isPreloaderVisible: false,
      //     questions: [
      //   {
      //     id: '1',
      //     text: '',
      //   },
      //   {

      //   }
      // ]
    };
  },
  methods: {
    onAnswerSelected(selectedAnswer) {
      this.$emit("changeData", { index: this.index, output: selectedAnswer });
    },
  },
};
</script>
