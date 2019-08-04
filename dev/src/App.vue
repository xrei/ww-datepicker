<template>
  <div id="app">
    <datepicker
      class="picker"
      placeholder="Select Date"
      inline
      :mondayFirst="lang==='ru'"
      :language="langs[lang]"
      :disabled-dates="disabledDates"
    />
  </div>
</template>

<script>
import Datepicker from '../../src/components/Datepicker.vue'
import * as lang from '../../src/locale/index.js'

export default {
  name: 'app',
  components: {
    Datepicker
  },
  data: () => ({
    langs: lang,
    lang: 'ru',
    disabledDates: {
      to: new Date('2019-08-20')
      // from: new Date('2019-09-20'),
    }
  })
}
</script>

<style lang="scss">
body {
  background-color: #f8f9fa;
}
#app {
  font-family: 'Circe', Helvetica, Arial, sans-serif;
  color: #2c3e50;
  margin: 2rem;
  margin-top: 60px;
}

input {
  background-color: #fff;
  padding: 1rem;
  max-width: 230px;
  border: none;
}
</style>
