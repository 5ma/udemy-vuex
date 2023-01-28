import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 2,
    message: ""
  },
  getters: {
    doubleCount: (state) => state.count * 2,
    message: state => state.message
  },
  mutations: {
    increment(state, number) {
      state.count += number;
    },
    decrement(state, number) {
      state.count -= number;
    },
    updateMessage(state, newMessage) {
      state.message = newMessage;
    }
  },
  actions: {
    increment({ commit }, number) {
      // ES6の書き方で使うプロパティだけを取り出すことが出来る
      commit("increment", number);
      // context.state.count;
      // context.getters.doubleCount;
      // context.dispatch
    },
    updateMessage({ commit }, newMessage) {
      commit("updateMessage", newMessage);
    }
  },
});
