<template>
  <div class="vtp__timepicker">
    <div v-if="!inline" class="input-container">
      <input
        ref="input"
        :readonly="true"
        :type="inline ? 'hidden' : 'text'"
        class="tp__input"
        :value="fmtVal"
        @click="showTime"
        @blur="onBlur"
      >
      <span v-if="!militaryTime" class="meridiem">{{amPm}}</span>
    </div>
    <PickerTime
      v-if="showOrInline && unix"
      :class="pickerContainerClass"
      :isMilitary="militaryTime"
      :meridiem="currMeridiem"
      :selectedVal="unix"
      @time:changed="handleTimeChange"
    >
      <template v-if="currMeridiem" #left>
        <div class="btn-container">
          <MeridiemBtn
            am
            :selected="currMeridiem === 'AM'"
            @click="currMeridiem = $event"
          />
        </div>
      </template>
      <template v-if="currMeridiem" #right>
        <div class="btn-container">
          <MeridiemBtn
            :selected="currMeridiem === 'PM'"
            @click="currMeridiem = $event"
          />
        </div>
      </template>
    </PickerTime>
  </div>
</template>

<script>
import { format, isValid, getHours, getTime } from 'date-fns'
import PickerTime from './PickerTime.vue'
import MeridiemBtn from './MeridiemBtn.vue'

const AM = 'AM'
const PM = 'PM'

const with24hours = (use24) => use24 ? 'HH' : 'hh'

export default {
  components: {PickerTime, MeridiemBtn},
  props: {
    // ONLY DATE OBJECT OR UNIX TIME!!!
    value: [Date, Number], // NO STRINGS!!!
    inline: Boolean,
    lang: {
      type: String,
      default: 'en'
    },
    militaryTime: Boolean,
    pickerContainerClass: String
  },
  mounted() {
    this.init()
  },
  data() {
    return {
      show: false,
      currMeridiem: null,
      selectedVal: null
    }
  },
  computed: {
    unix() {
      return getTime(this.selectedVal)
    },
    showOrInline() {
      return this.inline ? true : this.show
    },
    fmtVal() {
      if (!this.selectedVal) return ''
      let h = with24hours(this.militaryTime)
      return format(this.selectedVal, `${h}:mm`)
    },
    amPm() {
      return this.militaryTime ? '' : this.currMeridiem
    }
  },
  methods: {
    init() {
      if (this.value) {
        this.setValue(this.value)
      }
    },
    setMeridiem(date) {
      if (this.militaryTime) return
      let h = getHours(date)
      this.currMeridiem = h > 12 ? PM : AM
    },
    setValue(date) {
      if (typeof date === 'number') {
        let d = new Date(date)
        date = isValid(d) ? d : null
      }
      if (!date) {
        this.selectedVal = new Date()
        this.setMeridiem(new Date())
        return
      }
      this.selectedVal = date
      this.setMeridiem(date)
    },
    handleTimeChange(p) {
      this.selectedVal = p.date
      this.emitSelected(p.date)
    },
    showTime() {
      this.show = !this.show
      this.emitShow()
    },
    onBlur() {
      this.show = false
      this.emitClose()
    },
    emitShow() {
      this.$emit('time:show')
    },
    emitClose() {
      this.$emit('time:close')
    },
    emitSelected(time) {
      this.$emit('time:selected', time)
      this.$emit('input', time)
    }
  }
}
</script>

<style lang="scss">
.vtp__timepicker {
  position: relative;
  * {
    box-sizing: border-box;
  }
  .input-container {
    position: relative;
    max-width: 200px;
  }
  .meridiem {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translate(0, -50%);
  }
  .tp__input {
    background-color: #fff;
    font-size: 24px;
    padding: 24px;
    width: 100%;
    border: none;
  }

  .btn-container {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    .tp__meridiem-btn {
      width: 64px;
      height: 40px;
      @media screen and (min-width: 420px) {
        width: 24px;
        height: 24px;
      }
    }
  }
}
</style>
