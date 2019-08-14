<template>
  <div id="app">
    <div class="datepicker-cont">
      <datepicker
        :value="time"
        class="picker"
        placeholder="Select Date"
        :format="'dd MMM, D'"
        :mondayFirst="lang==='ru'"
        :language="langs[lang]"
        :disabled-dates="disabledDates"
        inputClass="datepicker-input"
        @input="handleDate"
      />

      <br>
      <!-- {{ date.toString() }} -->
    </div>
    <div class="timepicker-cont">
      <TimePicker
        v-model="time"
        :militaryTime="lang === 'ru'"
        pickerContainerClass="tp-container"
        inputClass="tp-input"
        inputContClass="tp-cont"
      />
      <!-- {{ time.toString() }} -->
    </div>
  </div>
</template>

<script>
import Datepicker from '../../src/components/Datepicker.vue'
import TimePicker from '../../src/components/TimePicker'
import {en, ru, es} from '../../src/locale/index.js'

export default {
  name: 'app',
  components: {
    Datepicker, TimePicker
  },
  data: () => ({
    date: new Date(),
    time: undefined,
    langs: {en, ru, es},
    lang: 'ru',
    disabledDates: {
      to: new Date(new Date().setDate(new Date().getDate() - 1)),
      from: new Date('2020-09-20'),
    }
  }),
  methods: {
    handleDate(e) {
      this.date = e
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
