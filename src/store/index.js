import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    products: null,
    dataFetched: false,
    cart: []
  },
  mutations: {
    SET_PRODUCTS: (state, payload) => {
      state.products = payload,
      state.dataFetched = true
    },
    ADD_TO_CART: async(state, payload) => {
      state.cart.push(payload);
    }
  },
  actions: {
    GET_PRODUCTS: async ({commit})=> {
      axios("https://fakestoreapi.com/products")
      .then(res=> {
        const payload = res.data;
        commit('SET_PRODUCTS', payload);
      })
    },
  },
  modules: {
  }
})
