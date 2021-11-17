<template>
  <button
    class="btn"
    :class="{
      'btn--dark': dark,
      'btn--vibrant': vibrant,
      'btn--long': long,
    }"
  >
    <div
      class="btn__circle"
      :class="{
        'btn__circle--dark': dark,
        'btn__circle--vibrant': vibrant,
        'btn__circle--long': long,
      }"
    >
      <p>
        <slot></slot>
      </p>
    </div>
  </button>
</template>

<script>
export default {
  props: {
    dark: {
      type: Boolean,
      default: false,
    },
    vibrant: {
      type: Boolean,
      default: false,
    },
    long: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../style/components/button";
</style>