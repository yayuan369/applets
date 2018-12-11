import Vue from 'vue'
const counter = {
  state: {
    count: 0
  },
  mutations: {
    INCREMENT: (state) => {
      const obj = state
      obj.count += 1
    },
    DECREMENT: (state) => {
      const obj = state
      obj.count -= 1
    }
  },
  actions: {
    increment({
      commit
    }) {
      commit('INCREMENT')
    },
    decrement({
      commit
    }) {
      commit('DECREMENT')
    },
    getProvince({
      commit
    }, params = {}) {
      return Vue.iBox.http('globalUrl.getProvince', params)({
        method: 'get'
      })
    }
  }

}


export default counter
