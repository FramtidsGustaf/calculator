export default {
  setFirstInput(state, payload) {
    state.firstInput = payload;
  },
  setSecondInput(state, payload) {
    state.secondInput = payload;
  },
  setIsFirstInput(state, payload) {
    state.isFirstInput = payload;
  },
  setAction(state, payload) {
    state.action = payload;
  },
  setResult(state, payload) {
    state.result = payload;
  },
  resetResult(state) {
    state.result = 0;
  },
  resetAll(state) {
    state.firstInput = '';
    state.secondInput = '';
    state.result = 0;
    state.action = null;
    state.isFirstInput = true;
  },
};