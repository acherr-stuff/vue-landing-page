
<template>
  <div class="test-page">
    <div class="container container-test">
      <!-- <div class="content"> -->
      <header class="test-page-header p-rel">
        <div class="result-message-wrapper">
          <div class="result-message">
            <div class="font-black font-curve result-text-message curve">
              {{ quote }}
            </div>
          </div>
          <img
            class="message-bottom"
            src="../assets/message-bottom.svg"
            alt=""
          />
        </div>
        <img src="../assets/eye.svg" class="eye-bg-h op-02 fr" alt="" />

        <!-- <div class="content p-rel">
          <div class="quote-text font-curve font-black">
            {{ quote }}
          </div>

          <img src="../assets/eye.svg" class="eye-bg-h op-02 fr" alt="" />

        </div> -->
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
        <img class="moon-bg-q op-02 fl" src="../assets/moon.svg" alt="" />

        Вопрос {{ number }}-5
      </div>
    </div>
  </div>
</template>



<script>
export default {
  name: "Form5",

  props: {
    index: Number,
    number: Number,
    options: Array,
    question: String,
    quote: String,
  },

  methods: {
    onAnswerSelected(selectedAnswer) {
      this.$emit("changeData", { index: this.index, output: selectedAnswer });
    },
  },
};
</script>
