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
      state.current = "";
    },
  backspace: (state) => {
    state.current = (state.current.toString()).substring(0, state.current.length - 1)
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
      state.current += newChar
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
    current: ''
  },
  mutations,
  actions
})
