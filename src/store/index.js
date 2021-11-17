import { createStore } from 'vuex'

import mutations from './mutations';
import actions from './actions';
import getters from './getters';


export default createStore({
  state: {
    firstInput: '',
    secondInput: '',
    result: 0,
    action: null,
    isFirstInput: true
  },
  mutations,
  actions,
  getters
});
