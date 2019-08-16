<template>
  <div class="tp__container" @mousedown.prevent>
    <div v-if="$slots.left" class="left">
      <slot name="left"></slot>
    </div>
    <div class="mid" 
        v-if="shouldRender">
      <VPicker
        :initial="selHour"
        :options="hours"
        @input="handleHours"
      />
      <div class="separator">:</div>
      <VPicker
        :initial="selMin"
        :options="minutes"
        @input="handleMinutes"
      />
    </div>
    <div v-if="$slots.right" class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
import { lightFormat, getYear, getMonth, getDate, getHours, getMinutes, isValid } from 'date-fns'
import VPicker from '../VPicker'

const addZero = v => v < 10 ? '0' + v : String(v)

const isPm = v => v === 'PM'
const swapTwelve = pred => v => {
  if (pred) {
    return v === 0 ? 12 : v
  } else return v
}

const getHrs = (date, isPm) => {
  if (!date) return 0
  let h = isPm ? 'H' : 'h'
  return Number(lightFormat(new Date(date), h))
}

export default {
  components: {VPicker},
  props: {
    isMilitary: Boolean,
    meridiem: String,
    selectedVal: Number
  },
  data: () => ({
    selHour: null,
    selMin: null,
    selectedTime: undefined,
    shouldRender: false
  }),
  mounted () {
    this.initTime(this.selectedVal)
  },
  computed: {
    currentDate() {
      return {
        year: getYear(this.selectedVal),
        month: getMonth(this.selectedVal),
        date: getDate(this.selectedVal),
        hour: getHours(this.selectedVal),
        minute: getMinutes(this.selectedVal)
      }
    },
    formattedVal() {
      if (!this.selectedTime || !isValid(this.selectedTime)) return ''
      return lightFormat(this.selectedTime, 'hh:mm') || ''
    },
    hoursLen() {
      return this.isMilitary ? 24 : 12
    },
    hours() {
      return [...Array(this.hoursLen).keys()]
        .map(v => ({
          value: v, id: v, name: addZero(swapTwelve(isPm(this.meridiem))(v))
        }))
    },
    minutes() {
      return [...Array(60).keys()]
        .map(v => ({value: v, id: v, name: addZero(v)}))
    }
  },
  watch: {
    meridiem() {
      this.selectedTime = this.makeDate()
      this.changed()
    },
    selectedVal(v) {
      this.selHour = getHrs(v, this.isMilitary)
      this.selMin = getMinutes(v)
      this.selectedTime = this.makeDate()
    }
  },
  methods: {
    initTime(v) {
      this.selHour = getHrs(v, this.isMilitary)
      this.selMin = getMinutes(v)
      this.selectedTime = new Date(v)
      this.$nextTick(() => {
        this.shouldRender = true
      })
    },
    makeDate() {
      const { year, month, date } = this.currentDate
      const h = this.selHour
      const m = this.selMin
      const mer = this.meridiem
      if (mer && !this.isMilitary) {
        return new Date(`${month + 1}/${date}/${year} ${h}:${m} ${mer}`)
      }
      return new Date(`${month + 1}/${date}/${year} ${h}:${m}`)
    },
    handleHours(val) {
      this.selHour = val
      this.selectedTime = this.makeDate()
      this.changed()
    },
    handleMinutes(val) {
      this.selMin = val
      this.selectedTime = this.makeDate()
      this.changed()
    },
    changed() {
      let ev = {
        date: this.selectedTime,
        formatted: this.formattedVal
      }
      this.$emit('time:changed', ev)
    }
  }
}
</script>

<style lang="scss">
.tp__container {
  z-index: 10;
  display: flex;

  .left {
    height: 100%;
    flex: 1 1 25%;
  }
  .mid {
    position: relative;
    flex: 1 1 50%;
    display: flex;
    justify-content: center;
    font-size: inherit;
    .separator {
      align-items: center;
      display: flex;
      color: #000;
    }
  }
  .right {
    height: 100%;
    flex: 1 1 25%;
  }
}
</style>
