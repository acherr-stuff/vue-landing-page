

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
          <select-form v-on:formSubmit="onChangeData" />
        </div>
      </div>
      <!-- </div> -->
      <div class="question-footer container-test font-gray m-x text-xs p-rel">
        <img class="moon-bg-q op-02 fl" src="../assets/moon.svg" alt="" />

        Вопрос {{ number }}-5
      </div>
    </div>
  </div>
</template>

<script>
import SelectForm from "./SelectForm.vue";
import QuestionForm from "./test/QuestionForm.vue";

export default {
  name: "Form3",

  components: {
    SelectForm,
    QuestionForm,
  },

  props: {
    index: Number,
    number: Number,
    options: Array,
    question: String,
    quote: String,
  },

  methods: {
    // onAnswerSelected(selectedAnswer) {
    //   this.$emit("changeData", { index: this.index, output: "sss" });
    // },

    // checkForm: function (event) {

    //     console.log('ААААААААА')
    //     this.attemptSubmit = true;
    //   if (this.selectedDay == null || this.selectedMonth == null || this.selectedYear == null)

    //    {
    //      //event.preventDefault();
    //       console.log("ошибка формы")
    //    }

    // },

    //   onFormSubmit() {
    //   this.$emit("changeData", { index: this.index, output: new Date(this.selectedDay, this.selectedMonth, this.selectedYear) });
    // },
    //отправляем событие родителю (элементу App)
    //так как ы selectform нет индекса вопроса, добавляем его здесь
    //...{ index: this.index } - ставим ... чтобы вложить поле одного объекта внутрь другого, ...value - Дата рождения, записанная в output в форме select также становится полем объекта
    onChangeData(value) {
      this.$emit("changeData", { ...{ index: this.index }, ...value });
    },
  },
};
</script>
