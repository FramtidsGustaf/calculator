import { createStore } from 'vuex'

import mutations from './mutations';
import actions from './actions';
import getters from './getters';


export default createStore({
  state: {
    firstInput: '',
    secondInput: '',
    action: null,
    isFirstInput: true,
    isFinal: false,
  },
  mutations,
  actions,
  getters
});
