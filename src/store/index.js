import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    counter: 0,
    colorCode: "red"
  },
  getters: {
    counterSquared(state) {
      return state.counter * state.counter;
    }
  },
  mutations: {
    increaseCounter(state, randNumber) {
      console.log('🚀 ~ random number: ', randNumber)
      state.counter += randNumber;
    },
    decreaseCounter(state, randNumber) {
      console.log('🚀 ~ random number: ', randNumber)
      state.counter -= randNumber;
    },
    setColorCode(state, newValue) {
      console.log('🚀 ~ New color: ', newValue)
      state.colorCode = newValue;
    }
  },
  actions: {
    increaseCounter({ commit }) {
      console.log('🚀 ~ increaseCounter(action)')
      axios('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new')
        .then(res => {
          commit('increaseCounter', res.data)
        })
    },
    decreaseCounter({ commit }) {
      console.log('🚀 ~ increaseCounter(action)')
      axios('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new')
        .then(res => {
          commit('decreaseCounter', res.data)
        })
    },
    setColorCode({ commit }, newValue) {
      console.log('🚀 ~ increaseCounter(action)')
      commit('setColorCode', newValue)
    },
  },
  modules: {
  }
})
