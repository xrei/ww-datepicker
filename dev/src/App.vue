<template>
  <div id="app">
    <div class="datepicker-cont">
      <datepicker
        v-model="time"
        class="picker"
        placeholder="Select Date"
        :mondayFirst="lang==='ru'"
        :language="langs[lang]"
        :disabled-dates="disabledDates"
        inline
        inputClass="datepicker-input"
      />

      <br>
      <!-- {{ date.toString() }} -->
    </div>
    <div class="timepicker-cont">
      <TimePicker
        inline
        v-model="time"
        :militaryTime="lang === 'ru'"
      />
      {{ time.toString() }}
    </div>
  </div>
</template>

<script>
import Datepicker from '../../src/components/Datepicker.vue'
import TimePicker from '../../src/components/TimePicker'
import * as lang from '../../src/locale/index.js'

export default {
  name: 'app',
  components: {
    Datepicker, TimePicker
  },
  data: () => ({
    date: new Date(),
    time: new Date(new Date('10 May 2019').setHours(23)),
    langs: lang,
    lang: 'en',
    disabledDates: {
      // to: new Date(),
      // from: new Date('2023-09-20'),
    }
  }),
  methods: {
    handleDate(e) {
      this.date = e
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
  max-width: 230px;
  border: 1px solid #eee;
  max-height: 80px;
}

.datepicker-cont {
  // margin-bottom: 3rem;
}
.timepicker-cont {
  max-width: 420px;
}
</style>
