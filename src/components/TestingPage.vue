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
    <div class="container container-test container-bottom p-rel">

          <div class="question-text m-x font-yellow text-upp">
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
        <!-- </div> -->
          <div class="question-footer-test font-gray text-xs ">
          <div class="content p-rel">
          <img class="moon-bg-q op-02 fl" src="../assets/moon.svg" alt="">

          Вопрос {{ number }}-5
          </div>

        </div>

    </div>
  </div>
</template>


<script>

export default {
  name: "TestingPage",
  props: {
    index: Number,
    number: Number,
    options: Array,
    question: String,
    quote: String,
  },
  data: function () {
    return {
    };
  },
  methods: {
    onAnswerSelected(selectedAnswer) {
      this.$emit("changeData", { index: this.index, output: selectedAnswer });
    },
  },
};
</script>
