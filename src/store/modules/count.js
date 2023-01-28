const state = {
  count: 2,
};

const getters = {
  doubleCount: (state) => state.count * 2,
};

const mutations = {
  increment(state, number) {
    state.count += number;
  },
  decrement(state, number) {
    state.count -= number;
  },
};

const actions = {
  increment({ commit }, number) {
    // ES6の書き方で使うプロパティだけを取り出すことが出来る
    commit("increment", number);
    // context.state.count;
    // context.getters.doubleCount;
    // context.dispatch
  },
};

export default {
  namespaced: true, // 名前付き空間を使う。count/doubleCount のように 最初に 名前/XXX というように呼び出せるようになる
  state,
  getters,
  mutations,
  actions,
};
