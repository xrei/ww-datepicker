<template>
  <div class="vtp__timepicker">
    <div v-if="!inline"
      :class="[inputContainerClass, 'input-container']"
    >
      <input
        ref="input"
        :readonly="true"
        :type="inline ? 'hidden' : 'text'"
        :class="[inputClass, 'tp__input']"
        :value="fmtVal"
        :placeholder="placeholder"
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
      :style="containerStyles"
      @time:changed="handleTimeChange"
    >
      <template v-if="!militaryTime && currMeridiem && windowWidth <= 420" #left>
        <div class="btn-container">
          <MeridiemBtn
            am
            :selected="currMeridiem === 'AM'"
            @click="currMeridiem = $event"
          />
        </div>
      </template>
      <template v-if="!militaryTime && currMeridiem" #right>
        <div class="btn-container">
          <MeridiemBtn
            v-if="windowWidth > 420"
            am
            :selected="currMeridiem === 'AM'"
            @click="currMeridiem = $event"
          />
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
import { format, isValid, isDate, getHours, getTime, setMinutes } from 'date-fns'
import PickerTime from './PickerTime.vue'
import MeridiemBtn from './MeridiemBtn.vue'

const AM = 'AM'
const PM = 'PM'

const with24hours = (use24) => use24 ? 'HH' : 'hh'
const constructDefDate = () => setMinutes(new Date(), 0)

export default {
  components: {PickerTime, MeridiemBtn},
  props: {
    // ONLY DATE OBJECT OR UNIX TIME!!!
    value: [Date, Number, String],
    inline: Boolean,
    militaryTime: Boolean,
    pickerContainerClass: [String, Array, Object],
    inputClass: [String, Array, Object],
    inputContainerClass: [String, Array, Object],
    isReadonly: Boolean,
    placeholder: {
      type: String,
      default: 'Pick time'
    }
  },
  mounted() {
    this.init()
    this.addResizeListener()
    if (this.inline) {
      this.setMeridiem(this.unix)
    }
  },
  destroyed() {
    window.removeEventListener('resize', this.onResizeEvent)
  },
  data() {
    return {
      show: false,
      currMeridiem: null,
      selectedVal: null,
      windowWidth: 0
    }
  },
  computed: {
    unix() {
      // return getTime(this.selectedVal) || getTime(constructDefDate())
      if (this.value) return getTime(this.value)
      else if (this.selectedVal) return getTime(this.selectedVal)
      else return getTime(constructDefDate())
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
    },
    containerStyles() {
      return {
        position: this.inline ? 'static' : 'absolute'
      }
    }
  },
  watch: {
    value(val) {
      this.setValue(val)
    }
  },
  methods: {
    addResizeListener() {
      if (window) {
        window.addEventListener('resize', this.onResizeEvent)
        window.dispatchEvent(new window.Event('resize'))
      }
    },
    onResizeEvent(e) {
      this.windowWidth = e.target.innerWidth
    },
    init() {
      if (this.value && isDate(this.value)) {
        this.setValue(this.value)
      }
    },
    setMeridiem(date) {
      let h = getHours(date)
      this.currMeridiem = h >= 12 ? PM : AM
    },
    setValue(date) {
      if (typeof date === 'number' || typeof date === 'string') {
        let d = new Date(date)
        date = isValid(d) ? d : null
      }

      if (!date) {
        this.selectedVal = constructDefDate()
        this.setMeridiem(constructDefDate())
        return false
      }
      this.selectedVal = date
      this.setMeridiem(date)
    },
    handleTimeChange(p) {
      this.selectedVal = p.date
      this.emitSelected(p.date, p.formatted)
    },
    showTime() {
      if (this.isReadonly) {
        this.$emit('readonly')
        return
      }
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
    emitSelected(time, fmt) {
      this.$emit('time:selected', { time, formatted: fmt })
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
  }
  .meridiem {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translate(0, -50%);
  }
  .tp__input {
    width: 100%;
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
        width: 32px;
        height: 32px;
      }
    }
    .mer__only-desktop {
      display: flex;
      @media screen and (max-width: 420px) {
        display: none;
      }
    }
    &.mer__only-mob {
      display: none;
      @media screen and (max-width: 420px) {
        display: flex;
      }
    }
  }
}
</style>
