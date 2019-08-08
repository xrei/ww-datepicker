<template>
  <div id="app">
    <datepicker
      v-model="date"
      class="picker"
      placeholder="Select Date"
      :mondayFirst="lang==='ru'"
      :language="langs[lang]"
      :disabled-dates="disabledDates"
      inputClass="datepicker-input"
    />

    <!-- <MobilePicker
      :value="date"
      @input="handleDate"
    /> -->
    <br>
    {{ date.toString() }}
  </div>
</template>

<script>
import Datepicker from '../../src/components/Datepicker.vue'
import MobilePicker from '../../src/components/MobilePicker/MobilePicker.vue'
import * as lang from '../../src/locale/index.js'

export default {
  name: 'app',
  components: {
    Datepicker, MobilePicker
  },
  data: () => ({
    date: new Date(),
    langs: lang,
    lang: 'ru',
    disabledDates: {
      // to: new Date('2019-08-20'),
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
</style>
