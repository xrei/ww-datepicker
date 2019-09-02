<template>
  <div id="app">
    <div class="lang">
      <span @click="lang = 'en'">en</span>
      <span @click="lang = 'ru'">ru</span>
      <span @click="show = !show">{{show}}</span>
    </div>
    <Test v-if="show" :value="time" @input="time = $event"/>
  </div>
</template>

<script>
import Test from './Test'
// import Datepicker from '../../src/components/Datepicker.vue'
// import TimePicker from '../../src/components/TimePicker'
// import {en, ru, es} from '../../src/locale/index.js'

export default {
  name: 'app',
  components: { Test },
  data: () => ({
    date: null,
    time: undefined,
    // langs: {en, ru, es},
    lang: 'en',
    disabledDates: {
      to: null,
      // to: new Date(new Date().setDate(new Date().getDate() - 1)),
      from: null,
    },
    show: false
  }),
  methods: {
    handleDate(e) {
      // this.date = e
      this.time = e
    }
  }
}
</script>

<style lang="scss">
body {
  background-color: #f8f9fa;
  margin: 0;
  padding: 0;
  height: 100vh;
}
#app {
  font-family: 'Circe', Helvetica, Arial, sans-serif;
  color: #2c3e50;
  margin: 1rem;
  margin-top: 60px;

  .lang {
    margin: 1rem;
    span {
      padding: 1rem;
      background-color: #fff;
      color: #000;
      &:hover {
        background-color: aqua;
      }
    }
  }
}

.datepicker-input {
  background-color: #fff;
  padding: 26px;
  font-size: 24px;
  line-height: 1.33;
  max-width: 200px;
  border: 1px solid #eee;
  max-height: 80px;
}

.timepicker-cont {
  max-width: 420px;
}

.tp-cont {
  max-width: 200px;
}
.tp-input {
  border: 1px solid #eee;
  font-size: 24px;
  padding: 24px;
  position: relative;
}
.tp-container {
  box-sizing: border-box;
  background-color: #fff;
  width: 100%;
  max-width: 420px;
  font-size: 30px;
  height: 180px;
  @media screen and (min-width: 420px) {
    font-size: 24px;
    max-width: 200px;
  }
}
</style>
