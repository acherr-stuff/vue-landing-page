<template>
  <div id="result-page">
    <header
      class="header-result result-message-wrapper container container-result"
    >
      <div class="result-message">
        <div class="font-simple-black result-text-message">
          Спасибо за Ваши ответы! <br />
          <b>
            Мы подготовили для Вас персональную аудио запись с Вашим прогнозом.
          </b>
        </div>
      </div>
      <img class="message-bottom" src="../assets/message-bottom.svg" alt="" />
    </header>

    <div class="container container-result container-bottom p-rel">
      <!-- <div class="content p-rel"> -->
        <div class="result-text font-simple-thin">
          Вы можете узнать, как повлиять на события, которые ожидают вас в
          ближайшем будущем.
        </div>

        <div class="result-notice">
          <p class="result-text font-yellow m-x">
            <b class="text-upp">
              Первое значимое событие может произойти уже 14.02.2021</b
            >, вам надо быть готовым, что бы последствия не оказались
            необратимыми.
          </p>
        </div>

        <div class="result-text font-simple-thin">
          Нажмите на кнопку ниже прямо сейчас и наберите наш номер телефона.
          Прослушайте важную информацию!
        </div>

        <a
          class="btn btn-round btn-call m-x"
          href="#"
          @click.prevent="getMainData(mainGetQuery)"
        >
          <div class="btn-left-part"></div>
          Позвонить и прослушать</a
        >

        <div v-if="isLoadedAll" id="people-info" class="font-simple-thin">
        <div class="container container-result">
          <h3>Ваши данные:</h3>
          <div class="content people-table">
            <div class="card">
              <div class="card-section font-yellow">Имя:</div>
              <div class="card-data">
                {{ fetchData.name }}
              </div>
            </div>
            <div class="card">
              <div class="card-section font-yellow">Рост:</div>
              <div class="card-data">
                {{ fetchData.height }}
              </div>
            </div>
            <div class="card">
              <div class="card-section font-yellow">Вес:</div>
              <div class="card-data">
                {{ fetchData.mass }}
              </div>
            </div>
            <div class="card">
              <div class="card-section font-yellow">Цвет волос:</div>
              <div class="card-data">
                {{ fetchData.hair_color }}
              </div>
            </div>
            <div class="card">
              <div class="card-section font-yellow">Цвет кожи:</div>
              <div class="card-data">
                {{ fetchData.skin_color }}
              </div>
            </div>

            <div class="card">
              <div class="card-section font-yellow">Цвет глаз:</div>
              <div class="card-data">
                {{ fetchData.eye_color }}
              </div>
            </div>

            <div class="card">
              <div class="card-section font-yellow">Год рождения:</div>
              <div class="card-data">
                {{ fetchData.birth_year }}
              </div>
            </div>
            <div class="card">
              <div class="card-section font-yellow">Пол:</div>
              <div class="card-data">
                {{ fetchData.gender }}
              </div>
            </div>
            <div class="card">
              <div class="card-section font-yellow">Планета:</div>
              <div class="card-data">
                {{ this.data.homeworld.name }}
              </div>
            </div>
            <div class="card">
              <div class="card-section font-yellow">Фильмы:</div>
              <div class="card-list">
                <div
                  class="card-data"
                  v-for="film in data.films"
                  :key="film.title"
                >
                  {{ film.title }}
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-section font-yellow">Средства передвижения:</div>
              <div class="card-list">
                <div
                  class="card-data"
                  v-for="vehicle in data.vehicles"
                  :key="vehicle.name"
                >
                  {{ vehicle.name }}
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-section font-yellow">Космические корабли:</div>
              <div class="card-list">
                <div
                  class="card-data"
                  v-for="starship in data.starships"
                  :key="starship.name"
                >
                  {{ starship.name }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


        <footer class="footer-result">
        <p class="footer-bottom-text footer-font">
          TERMENI SI CONDITII: ACESTA ESTE UN SERVICIU DE
           DIVERTISMENT. PRIN
          FOLOSIREA LUI DECLARATI CA AVETI  18 ANI IMPLINITI,


        </p>

      </footer>

    </div>
  </div>
</template>


<script>
export default {
  data: function () {
    return {
      data: {},
      fetchData: {},
      mainGetQuery: "https://swapi.dev/api/people/1/",
      isLoadedAll: false,
    };
  },

  methods: {
    async getMainData(query) {
      this.isLoadedAll = false;
      console.log("загрузка основных данных");
      this.fetchData = await this.getData(query);
      this.data = this.parseData(this.fetchData);
      console.log("data ", this.data);
      this.isLoadedAll = true;
    },

    async getData(query) {

      const res = await fetch(query, {
        method: "GET",
      });
      const data = await res.json();

      return data;

    },

    parseData(dataJSON) {
      let data = {};
      for (let key in dataJSON) {
        if (key !== "url") {
          let value = dataJSON[key];
          if (this.isValidHttpUrl(value) && !Array.isArray(value)) {
            this.getData(value).then(function (res) {
              data[key] = res;
            });
          } else {
            data[key] = value;
          }

          if (Array.isArray(value)) {
            data[key] = [];
            for (let i = 0; i < value.length; i++) {
              if (this.isValidHttpUrl(value[i])) {
                this.getData(value[i]).then(function (res) {
                  data[key].push(res);
                });
              }
            }
          } else {
            data[key] = value;
          }
        }
      }

      return data;
    },
    isValidHttpUrl(string) {
      let url;

      try {
        url = new URL(string);
      } catch (_) {
        return false;
      }

      return url.protocol === "http:" || url.protocol === "https:";
    },
  },
};
</script>


<style scoped>
</style>
