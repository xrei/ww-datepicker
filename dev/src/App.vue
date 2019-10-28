<template>
  <div id="app">
    <span>{{date}}</span>
    <div class="pickers">
      <Datepicker
        v-model="date"
        class="picker"
        placeholder="Select Date"
        :format="'dd MMM, D'"
        :mondayFirst="lang==='ru'"
        :language="langs[lang]"
        :disabled-dates="disabledDates"
        inputClass="datepicker-input"
      />
      <TimePicker
        v-model="date"
        :militaryTime="lang === 'ru'"
        :pickerContainerClass="['tp-container']"
        :inputClass="['tp-input']"
        :inputContainerClass="{'tp-cont': true}"
      />
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
    langs: {en, ru, es},
    lang: 'en',
    disabledDates: {
      to: null,
      // to: new Date(new Date().setDate(new Date().getDate() - 1)),
      from: null,
    },
  })
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

.pickers {
  display: flex;
  @media screen and (max-width: 425px) {
    flex-flow: column;
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
  @media screen and (max-width: 425px) {
    max-width: 100%;
  }
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
