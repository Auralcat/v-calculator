import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    current: '0'
  },
  mutations: {
    /* The = button */
    EQUALS (state) {
      if ((state.current).indexOf("^") > -1) {
        let base = (state.current).slice(0, (state.current).indexOf("^"))
        let exponent = (state.current).slice((state.current).indexOf("^") + 1)
        state.current = eval("Math.pow(" + base + "," + exponent + ")")
      } else {
        state.current = eval(state.current)
      }
    },
    /* The C button */
    CLEAR (state) {
      state.current = "";
    },
    BACKSPACE (state) {
      state.current = state.current.substring(0, state.current.length - 1)
    },
    SIN (state) {
      state.current = Math.sin(state.current)
    },
    COS (state) {
      state.current = Math.cos(state.current)
    },
    TAN (state) {
      state.current = Math.tan(state.current)
    },
    LOG10 (state) {
      state.current = Math.log10(state.current)
    },
    SQUARE (state) {
      state.current = state.current ** 2
    },
    ADDCHAR (state, newChar) {
      state.current += newChar
    }
  },
  actions: {

  }
})
