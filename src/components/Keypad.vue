<template>
  <div class="keypad">
    <div class="grid-top">
      <Button dark @click="handleAction('divide')">&div;</Button>
      <Button dark @click="handleClearEntry">CE</Button>
      <Button dark @click="handleAction('multiply')">&times;</Button>
      <Button dark @click="handleAction('percent')">&percnt;</Button>
      <Button @click="input(7)">7</Button>
      <Button @click="input(8)">8</Button>
      <Button @click="input(9)">9</Button>
      <Button dark @click="handleClear">C</Button>
      <Button @click="input(4)">4</Button>
      <Button @click="input(5)">5</Button>
      <Button @click="input(6)">6</Button>
      <Button dark @click="handleAction('subtract')">&minus;</Button>
      <Button @click="input(1)">1</Button>
      <Button @click="input(2)">2</Button>
      <Button @click="input(3)">3</Button>
      <Button dark @click="handleAction('add')">&plus;</Button>
    </div>
    <div class="grid-bottom">
      <Button long @click="input(0)">0</Button>
      <Button @click="input('.')">.</Button>
      <Button long vibrant @click="handleEquals">=</Button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  methods: {
    ...mapActions([
      "setIsFirstInput",
      "setAction",
      "equals",
      "resetAll",
      "subtractAndAdd",
      "resetCurrentInput",
      "input",
    ]),
    handleAction(action) {
      this.equals();
      this.setAction(action);
      if (this.isFirstInput) this.setIsFirstInput(false);
    },
    handleEquals() {
      this.equals(true);
    },
    handleClear() {
      this.resetAll();
    },
    handleClearEntry() {
      this.resetCurrentInput();
    },
  },
  computed: {
    ...mapGetters(["isFirstInput"]),
  },
};
</script>

<style lang="scss" scoped>
@import "../style/components/keypad";
</style>