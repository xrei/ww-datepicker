<template>
  <div>
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
        :value="time"
        :militaryTime="lang === 'ru'"
        :pickerContainerClass="['tp-container']"
        :inputClass="['tp-input']"
        :inputContainerClass="{'tp-cont': true}"
        @input="handleDate"
      />
      {{ time && time.toString() }}
    </div>
  </div>
</template>

<script>
import Datepicker from '../../src/components/Datepicker.vue'
import TimePicker from '../../src/components/TimePicker'
import {en, ru, es} from '../../src/locale/index.js'

export default {
  components: {
    Datepicker, TimePicker
  },
  props: {
    value: [Date, Number]
  },
  data: () => ({
    time: undefined,
    langs: {en, ru, es},
    lang: 'en',
    disabledDates: {
      to: null,
      // to: new Date(new Date().setDate(new Date().getDate() - 1)),
      from: null,
    },
  }),
  mounted() {
    this.time = this.value
  },
  methods: {
    handleDate(e) {
      // this.date = e
      this.time = e
      this.$emit('input', e)
    }
  }
}
</script>
