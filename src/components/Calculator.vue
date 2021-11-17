<template>
  <div class="calculator">
    <Screen />
    <Keypad />
  </div>
</template>

<script>
import Keypad from "./Keypad.vue";
import Screen from "./Screen.vue";

export default {
  components: {
    Keypad,
    Screen,
  },
};
</script>

<style lang="scss" scoped>
@import "../style/components/calculator";
</style>