<template>
  <div class="test-page">
    <div class="container container-test">
      <header
        class="test-page-header message header p-rel result-message-wrapper"
      >
        <div class="content message m-x">
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
      </header>
    </div>
    <div class="container container-test container-bottom p-rel">
      <div class="question-text content m-x font-yellow text-upp">
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
