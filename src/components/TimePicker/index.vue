<template>
  <div class="vtp__timepicker">
    <div v-if="!inline"
      :class="{[inputContClass]: inputContClass, 'input-container': true}"
    >
      <input
        ref="input"
        :readonly="true"
        :type="inline ? 'hidden' : 'text'"
        :class="{[inputClass]: inputClass, 'tp__input': true}"
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
      :style="containerStyles"
      @time:changed="handleTimeChange"
    >
      <template v-if="currMeridiem && windowWidth <= 420" #left>
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
    pickerContainerClass: String,
    inputClass: String,
    inputContClass: String,
    isReadonly: Boolean
  },
  mounted() {
    this.init()
    this.addResizeListener()
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
