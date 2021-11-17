export default {
  setFirstInput({ commit, state }, payload) {
    commit('setFirstInput', state.firstInput + payload);
  },
  setSecondInput({ commit, state }, payload) {
    commit('setSecondInput', state.secondInput + payload);
  },
  input({ state, dispatch }, payload) {
    if (state.isFirstInput) {
      dispatch('setFirstInput', payload);
      return;
    }
    if (state.isFinal) {
      dispatch('resetAll');
      dispatch('setFirstInput', payload);
      return;
    }
    dispatch('setSecondInput', payload);
  },
  setIsFirstInput({ commit }, payload) {
    commit('setIsFirstInput', payload);
  },
  setAction({ commit }, payload) {
    commit('setAction', payload);
  },
  equals({ commit, state, dispatch }, final) {
    if (!state.secondInput) return;

    dispatch('setIsFirstInput', false);
    commit('setIsFinal', false);

    if (final) {
      commit('setIsFinal', true);
    }

    const firstInput = +state.firstInput;
    const secondInput = +state.secondInput;
    const { action } = state;
    const actions = {
      add: firstInput + secondInput,
      subtract: firstInput - secondInput,
      multiply: firstInput * secondInput,
      divide: firstInput / secondInput,
      percent: (firstInput / 100) * secondInput,
    }

    commit('setSecondInput', '');
    commit('setFirstInput', actions[action]);
    commit('setAction', null);

  },
  resetResult(context) {
    context.commit('resetResult');
  },
  resetAll(context) {
    context.commit('resetAll');
  },
  resetCurrentInput({ commit, state }) {
    if (state.isFirstInput) return commit('setFirstInput', '');
    commit('setSecondInput', '');
  }
};