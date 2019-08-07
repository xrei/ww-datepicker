<template>
  <div class="mobile-view">
    <input
      ref="input"
      type="text" class="input" id="input"
    >
    <div ref="container" class="picker-container"></div>
  </div>
</template>

<script>

export default {
  props: {
    value: Date
  },
  data() {
    return {
    }
  },
  async mounted() {
  }
}
</script>
