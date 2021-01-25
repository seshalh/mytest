<template>
  <div id="weather">
    <div class="weather" :class="period">
      <WeatherApp :class="period"></WeatherApp>
    </div>
  </div>
</template>

<script>
import WeatherApp from "../components/WeatherApp.vue";

export default {
  name: "Weather",

  components: {
    WeatherApp,
  },

  data() {
    return {
      date: new Date(),
    };
  },

  computed: {
    year() {
      return this.date.getFullYear();
    },

    period() {
      let hour = this.date.getHours();

      return hour > 5 && hour < 18 ? "app--day" : "app--night";
    },
  },
};
</script>

<style>
/** Global **/
@import url("https://fonts.googleapis.com/css?family=Open+Sans");

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: "Open Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: rgba(255, 255, 255, 0.9);
}

a {
  text-decoration: none;
  color: inherit;
  transition: color 0.2s ease-in;
}

/** App **/
.weather {

  display: flex;
  justify-content: center;
  align-items: center;
}

.weather--day {
  /*background: linear-gradient(to bottom right, #6CB9C8, #6CB9C8) no-repeat;*/
  background-color: #6cb9c8;
}

.weather--night {
  /*background: linear-gradient(to bottom right, #484F60, #484F60) no-repeat;*/
  background-color: #484f60;
}

.weather--day a:hover {
  color: rgba(46, 146, 167, 0.9);
}

.weather--night a:hover {
  color: rgba(0, 0, 0, 0.5);
  
}
.app--night{
  color:#fff;
}
.app--night a{
  color:#fff;
}
.app--day a{
  color:rgba(255, 255, 255, 0.75);
}
</style>
