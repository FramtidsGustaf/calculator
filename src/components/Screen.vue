<template>
  <div class="screen">
    <p>{{ output }}</p>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      output: "",
    };
  },
  methods: {
    ...mapActions(["resetResult"]),
  },
  computed: {
    ...mapGetters(["firstInput", "secondInput", "result"]),
  },
  watch: {
    firstInput() {
      this.output = this.firstInput;
    },
    secondInput() {
      this.output = this.secondInput;
    },
    result() {
      this.output = this.result;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../style/components/screen";
</style>