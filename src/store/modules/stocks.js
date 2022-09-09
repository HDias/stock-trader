import stocks from "../../data/stocks"

export default {
  state: {
    stocks: []
  },
  mutations: {
    setStocks(state, stocks) {
      state.stocks = stocks
    }
  },
  actions: {
    byStock({ commit }, order) {
      commit()
    },
    initStocks({ commit }) {
      console.log(stocks)
      commit('setStocks', stocks)
    }
  },
  getters: {
    stocks(state) {
      return state.stocks
    }
  }
}