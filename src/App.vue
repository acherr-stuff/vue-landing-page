<template>
  <div id="app">
    <component
      :is="currentComponent"
      v-bind="currentComponentProperties"
      v-on:presentComponent="onPresentComponent"
      v-on:presentQuestion="onPresentQuestion"
      v-on:changeData="onChangeData"
    ></component>
    <preloader v-if="isLoading"/>
    <preloader-2 v-if="isLoadingResult"/>
  </div>
</template>

<script>
import Preloader from "./components/Preloader.vue";
import Preloader2 from "./components/Preloader2.vue";
import HomePage from "./components/HomePage.vue";
import TestingPage from "./components/TestingPage.vue";
// import Form2 from "./components/Form2.vue";
import Form3 from "./components/Form3.vue";
// import Form4 from "./components/Form4.vue";
import Form5 from "./components/Form5.vue";
import Result from "./components/Result.vue";

function getAge(dateString)
{
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate()))
    {
        age--;
    }
    return age;
}

export default {
  name: "App",
  components: {
    Preloader,
    Preloader2,
    HomePage,
    TestingPage,
    // Form2,
    Form3,
    // Form4,
    Form5,
    Result
  },
  data() {
    const questions = [
      {
        component: "HomePage",
        input: {
          number: 1,
          quote: "Очень умная цитата бла бла бла",
          question: "Боитесь ли вы умереть?",
          options: ["Да", "Нет"],
        },
      },
      {
        component: "TestingPage",
        input: {
          number: 1,

          quote:
            "Вы, конечно, умрете. И все, с кем вы знакомы, тоже однажды умрут.",
          question: "Боитесь ли вы умереть?",
          options: ["Да", "Нет"],
        },
      },
      {
        component: "TestingPage",
        input: {
          number: 2,

          quote:
            "Мы расскажем Вам не только подробности вашей смерти, но также поможем Вам избежать этой ужасной даты и продлить вашу жизнь на многие годы.",
          question: "Когда Вы чувствуете себя наиболее комфортно?",
          options: ["Утро", "День", "Вечер", "Ночь"],
        },
      },
      {
        component: "Form3",
        input: {
          number: 3,
          quote:
            "Уже совсем скоро Вы узнаете много интересного о своем будущем!",
          question: "Укажите свою дату рождения:",
          // options: ["Утро", "День", "Вечер", "Ночь"],
        },
      },

      {
        component: "TestingPage",
        input: {
          number: 4,
          quote:
            "Смерть родного человека – одно из тяжелейших испытаний в жизни каждого из нас!",
          question: "Снятся ли Вам умершие люди?",
          options: ["Да", "Нет", "Иногда"],
        },
      },

      {
        component: "Form5",
        input: {
          number: 5,
          quote:
            "По вам скучает очень близкий человек, которого больше нет в мире живых.",
          question:
            "Запись, которую Вы услышите, может шокировать людей с неокрепшей психикой. Вы готовы узнать, что ждет именно Вас?",
          options: ["Да", "Затрудняюсь ответить"],
        },
      },

      {
        component: "Form5",
        input: {
          number: 5,
          quote: "По вам скучает очень близкий человек, которого больше нет в мире живых. Возможно это дедушка или бабушка.",
          question:
            "Запись, которую Вы услышите, может шокировать людей с неокрепшей психикой. Вы готовы узнать, что ждет именно Вас?",
          options: ["Да", "Затрудняюсь ответить"],
        },
      },

      {
        component: "Form5",
        input: {
          number: 5,
          quote:
            "По вам скучает очень близкий человек, которого больше нет в мире живых. Возможно это кто-то из Ваших родителей..",
          question:
            "Запись, которую Вы услышите, может шокировать людей с неокрепшей психикой. Вы готовы узнать, что ждет именно Вас?",
          options: ["Да", "Затрудняюсь ответить"],
        },
      },
      // { index: 1, name: "", desc: "", options: ["A", "B", "C"], selectedAnswer: -1 }
    ];
    return {
      // Текущий компонент и его Props
      currentComponent: questions[0].component,
      currentComponentProperties: { ...{ index: 0 }, ...questions[0].input },
      // Список вопросов
      questions: questions,
      isLoading: false,
      isLoadingResult: false
    };
  },
  methods: {
    onPresentComponent({ name, data }) {},
    onPresentQuestion(index) {
      const question = this.questions[index];
      this.currentComponentProperties = Object.assign(
        { index },
        question.input
      );
      this.currentComponent = question.component;
    },
    onChangeData({ index, output }) {
      console.log(index);
      console.log(output);
      this.questions[index].output = output;
      switch (index) {
        case 0:
          this.onPresentQuestion(2);
          break;
        case 1:
          this.onPresentQuestion(2);
          break;
        case 2:
          this.onPresentQuestion(3);
          break;
        case 3:
          this.onPresentQuestion(4);

           this.isLoading = true;
          setTimeout(function () {
            this.isLoading = false;
            // this.currentComponent = "HomePage";
          }.bind(this), 2000);
          break;
        case 4:
          console.log(getAge(this.questions[3].output));
          if (getAge(this.questions[3].output)<=35) {
            this.onPresentQuestion(5);
          } else if (getAge(this.questions[3].output)>=36 && getAge(this.questions[3].output)<=45) {
            this.onPresentQuestion(6);
          } else {
            this.onPresentQuestion(7);
          }
          // if (this.questions[3].output.getTime() >=)
          // this.onPresentQuestion(5);
          break;
        case 5:
        case 6:
        case 7:
          this.isLoadingResult = true;
          setTimeout(function () {
            this.isLoadingResult = false;
            this.currentComponentProperties = {};
            this.currentComponent = "Result";
          }.bind(this), 10000);
          break;

        default:
          break;
      }
    },
  },
};
</script>

<style src="@/assets/css/main.css">
</style>
