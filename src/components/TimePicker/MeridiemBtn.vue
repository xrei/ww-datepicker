<template>
  <div :class="classes" @click.self="onClick(meridiem)">
    {{ meridiem }}
  </div>
</template>

<script>
const AM = 'AM'
const PM = 'PM'

export default {
  props: {
    am: Boolean,
    selected: Boolean
  },
  computed: {
    classes() {
      return {
        'tp__meridiem-btn': true,
        'selected': this.selected
      }
    },
    meridiem() {
      return this.am ? AM : PM
    }
  },
  methods: {
    onClick(m) {
      this.$emit('click', m)
    }
  }
}
</script>

<style lang="scss">
.tp__meridiem-btn {
  background-color: #f6f6f6;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  cursor: pointer;
  &.selected, &:hover {
    background-color: #0070ff;
    color: #fff;
  }
}
</style>
