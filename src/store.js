import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// For testing
export const mutations = {
    /* The = button */
  equals: (state) => {
      if ((state.current).indexOf("^") > -1) {
        let base = (state.current).slice(0, (state.current).indexOf("^"))
        let exponent = (state.current).slice((state.current).indexOf("^") + 1)
        state.current = eval("Math.pow(" + base + "," + exponent + ")")
      } else {
        state.current = eval(state.current)
      }
  },
    /* The C button */
  clear: (state) => {
      state.current = "0";
  },
  backspace: (state) => {
    let currentString = state.current.toString()
    if (currentString !== '0') {
      state.current = (currentString).substring(0, currentString.length - 1)
    }
  },
  sin: (state) => {
      state.current = Math.sin(state.current)
  },
  cos: (state) => {
      state.current = Math.cos(state.current)
  },
  tan: (state) => {
      state.current = Math.tan(state.current)
  },
  log10: (state) => {
      state.current = Math.log10(state.current)
  },
  square: (state) => {
      state.current = state.current ** 2
  },
  addchar: (state, newChar) => {
    if (state.current === '0' && (!isNaN(parseFloat(newChar)) && isFinite(newChar))) {
      state.current = newChar
    } else {
      state.current += newChar
    }
  },
  printPi: (state) => {
    state.current = Math.PI.toString()
  },
  ln: (state) => {
    state.current = Math.log(state.current)
  },
  squareroot: (state) => {
    state.current = Math.sqrt(state.current)
  }
}

export const actions = {}

export default new Vuex.Store({
  state: {
    current: '0'
  },
  mutations,
  actions
})
