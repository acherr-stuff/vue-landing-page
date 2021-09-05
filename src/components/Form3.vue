<template>
  <div class="test-page">
    <div class="container container-test">
      <header class="test-page-header header">
        <div class="content p-rel">
          <div class="quote-text font-curve">
            {{ quote }}
          </div>

          <img src="../assets/eye.svg" class="eye-bg-h op-02 fr" alt="" />
        </div>
      </header>
    </div>
    <div class="container container-test container-bottom p-rel">
      <div class="question-text m-x font-yellow text-upp">
        {{ question }}
      </div>
      <select-form v-on:formSubmit="onChangeData" />
      <div
        class="question-footer-test font-gray text-xs"
      >
        <div class="content p-rel">
          <img class="moon-bg-q op-02 fl" src="../assets/moon.svg" alt="" />

          Вопрос {{ number }}-5
        </div>
      </div>
    </div>
  </div>
</template>



<script>
import SelectForm from "./SelectForm.vue";

export default {
  name: "Form3",

  components: {
    SelectForm,
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
