<template>
     <div id="select-form">

          <form class="select-section answer-section" v-on:submit.prevent="checkForm" >

            <div class="form-group">


             <select v-model="selectedDay" class="btn btn-round btn-select" v-bind:class="{ warning: hasDayWarning }" >
              <option :value="null" disabled selected hidden>День</option>
              <option v-for="option in dayOptions" v-bind:key="option.value" :value="option.value" >{{option.text}}</option>
            </select>


            <!-- <span>Выбрано: {{ selectedDay }}</span> -->

            <select v-model="selectedMonth" class="btn btn-round btn-select" v-bind:class="{ warning: hasMonthWarning }">
              <option :value="null" disabled selected hidden>Месяц</option>
              <option v-for="option in monthOptions" v-bind:key="option.value" :value="option.value">{{option.text}}</option>
            </select>
            <!-- <span>Выбрано: {{ selectedMonth }}</span> -->

            <select v-model="selectedYear" class="btn btn-round btn-select" v-bind:class="{ warning: hasYearWarning }">
              <option :value="null" disabled selected hidden>Год</option>
              <option v-for="option in yearOptions" v-bind:key="option.value" :value="option.value">{{option.text}}</option>
            </select>
            <!-- <span>Выбрано: {{ selectedYear }}</span> -->
            </div>


            <input  class="btn btn-round btn-question" type="submit" value="Далее">
          </form>

        </div>
</template>


<script>
export default {
  data: function () {
    return {
          selectedDay: null,
          dayOptions: [
          { text: '1', value: 1 },
          { text: '2', value: 2 },
          { text: '3', value: 3 },
          { text: '4', value: 4 },
          { text: '5', value: 5 },
          { text: '6', value: 6 },
        ],

        hasDayWarning: false,

        selectedMonth: null,
          monthOptions: [
          { text: '01', value: 1 },
          { text: '02', value: 2 },
          { text: '03', value: 3 }
          ],

          hasMonthWarning: false,

         selectedYear: null,
          yearOptions: [
          { text: '1975', value: 1975 },
          { text: '1982', value: 1982 },
          { text: '1998', value: 1998 },
          { text: '1999', value: 1999 },
          { text: '2000', value: 2000 }
          ],

          hasYearWarning: false,

          attemptSubmit: false
        }
  },

  methods: {

      checkForm: function (event) {

        console.log("проверка формы")

       if (this.selectedDay == null) {
        this.hasDayWarning = true;
        console.log(this.hasDayWarning)
        event.preventDefault();
       } else {
          this.hasDayWarning = false;
       }


       if (this.selectedMonth == null) {
        this.hasMonthWarning = true;
        console.log(this.hasMonthWarning)
        event.preventDefault();
       } else {
          this.hasMonthWarning = false;
       }


       if (this.selectedYear == null) {
        this.hasYearWarning = true;
        console.log(this.hasYearWarning)
        event.preventDefault();
       } else {
          this.hasYearWarning = false;
       }


       if (this.selectedDay == null || this.selectedMonth == null || this.selectedYear == null)

       {
        return
       }


     this.$emit("formSubmit", { output: new Date(this.selectedYear, this.selectedMonth, this.selectedDay) });
        console.log(this.selectedDay, this.selectedMonth, this.selectedYear)
    },

     isDaySelected() {
        console.log("день выбран");
        this.hasDayWarning = false

     }

  }
}
</script>
