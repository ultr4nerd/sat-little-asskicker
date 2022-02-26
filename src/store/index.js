import Vue from 'vue'
import Vuex from 'vuex'
import {calculateISR, calculateIVA} from "@/utils/calculator";


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    incomes: [0],
  },
  getters: {
    totalRevenue: state => state.incomes.reduce((acc, curr) => acc + curr, 0),
    isr: (_, getters) => calculateISR(getters.totalRevenue),
    iva: (_, getters) => calculateIVA(getters.totalRevenue),
    totalTaxes: (_, getters) => getters.isr + getters.iva,
  },
  mutations: {
    ADD_NEW_INCOME(state) {
      state.incomes.push(0)
    },
    HANDLE_INCOME_CHANGE(state, [index, value]) {
      let numericValue = parseFloat(value);
      if (isNaN(numericValue)) {
        numericValue = 0
      }
      Vue.set(state.incomes, index, numericValue);
    },
  },
})
