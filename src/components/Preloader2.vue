<template>
  <div class="overlay">
    <div class="overlay__content">
      <div class="loading">
        <img class="loading-img" src="../assets/micro.svg" />

        <div id="progress-bar">
          <div id="progress"></div>
        </div>

        <div class="percent">
          <p class="font-gray">{{ progress }}%</p>
        </div>
      </div>

      <div class="text-xs font-gray">Запись сообщения</div>
    </div>
  </div>
</template>

<style scoped>
.overlay {
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  position: fixed;
  background: #202024;
}

.overlay__content {
  width: 100%;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
}

.loading {
  margin-bottom: 12px;
}

.percent {
  display: flex;
  justify-content: center;
}

.percent p {
  font-size: 20px;
  line-height: 23px;
  letter-spacing: 0.1em;
}

#progress-bar {
  width: 85%;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 5px;
}

#progress {
  width: 1%;
  height: 4px;
  background-color: #f6c866;
  text-align: center;
  margin-top: 40px;
  margin-bottom: 25px;
  border-radius: 5px;
}
</style>

<script>
export default {
  data: () => ({
    progress: 0,
  }),
  methods: {
    move() {
      if (this.progress === 0) {
        this.progress = 1;
        let width = 1,
          id = setInterval(() => {
            if (width >= 100) {
              clearInterval(id);
              this.progress = 100;
            } else {
              this.progress++;
              width++;
              document.getElementById("progress").style.width = width + "%";
            }
          }, 100);
      }
    },
  },
  mounted() {
    this.move();
  },
};
</script>
