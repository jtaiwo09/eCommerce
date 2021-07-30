import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    products: null,
    dataFetched: false 
  },
  mutations: {
    SET_PRODUCTS: (state, payload) => {
      state.products = payload,
      state.dataFetched = true
    }
  },
  actions: {
    GET_PRODUCTS: async ({commit})=> {
      axios("https://fakestoreapi.com/products")
      .then(res=> {
        const payload = res.data;
        commit('SET_PRODUCTS', payload);
      })
    }
  },
  modules: {
  }
})
