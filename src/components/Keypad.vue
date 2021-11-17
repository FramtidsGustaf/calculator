<template>
  <div class="keypad">
    <div class="grid-top">
      <Button dark @click="handleAction('divide')">&div;</Button>
      <Button dark @click="handleClearEntry">CE</Button>
      <Button dark @click="handleAction('multiply')">&times;</Button>
      <Button dark @click="handleAction('percent')">&percnt;</Button>
      <Button @click="handleInput(7)">7</Button>
      <Button @click="handleInput(8)">8</Button>
      <Button @click="handleInput(9)">9</Button>
      <Button dark @click="handleClear">C</Button>
      <Button @click="handleInput(4)">4</Button>
      <Button @click="handleInput(5)">5</Button>
      <Button @click="handleInput(6)">6</Button>
      <Button dark @click="handleAction('subtract')">&minus;</Button>
      <Button @click="handleInput(3)">3</Button>
      <Button @click="handleInput(2)">2</Button>
      <Button @click="handleInput(1)">1</Button>
      <Button dark @click="handleAction('add')">&plus;</Button>
    </div>
    <div class="grid-bottom">
      <Button long @click="handleInput(0)">0</Button>
      <Button @click="handleInput('.')">.</Button>
      <Button long vibrant @click="handleEquals">=</Button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  methods: {
    ...mapActions([
      "setFirstInput",
      "setSecondInput",
      "setIsFirstInput",
      "setAction",
      "equals",
      "resetAll",
      "subtractAndAdd",
      "resetCurrentInput",
    ]),
    handleInput(value) {
      if (this.isFirstInput) return this.setFirstInput(value);
      this.setSecondInput(value);
    },
    handleAction(action) {
      this.equals();
      this.setAction(action);
      if (this.isFirstInput) this.setIsFirstInput(false);
    },
    handleEquals() {
      this.equals();
    },
    handleClear() {
      this.resetAll();
    },
    handleClearEntry() {
      this.resetCurrentInput();
    },
  },
  computed: {
    ...mapGetters(["isFirstInput", "firstInput", "secondInput"]),
  },
};
</script>

<style lang="scss" scoped>
@import "../style/components/keypad";
</style>