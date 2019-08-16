<template>
  <div class="vdp__arrow-container" @click="$emit('click')">
    <div class="arrow" :class="{'right': right, 'left': left}" />
  </div>
</template>

<script>
export default {
  props: {
    right: Boolean,
    left: Boolean
  }
}
</script>

<style lang="scss" scoped>
.vdp__arrow-container {
  position: relative;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    cursor: pointer;
  }
  &.disabled {
    .arrow::before {
      border-color: #ddd;
    }
    .arrow::after {
      background-color: #ddd;
    }
  }
  .arrow {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    &::before {
      content: '';
      display: block;
      width: 14px;
      height: 14px;
      border-style: solid;
      border-color: #0070ff;
      border-width: 2px 2px 0 0;
      position: absolute;
      transform-origin: 50% 50%;
    }
    &::after {
      content: '';
      display: block;
      top: 50%;
      left: 50%;
      background-color: #0070ff;
      position: absolute;
      transform-origin: 50% 50%;
    }
    &.right::before {
      transform: rotate(225deg);
    }
    &.right::after {
      width: 20px;
      height: 2px;
      transform: translate(-9px, -1px);
    }
    &.left::before {
      transform: rotate(45deg);
    }
    &.left::after {
      width: 20px;
      height: 2px;
      transform: translate(-10px, -1px);
    }
  }
}

</style>
