import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    mobile: false,
    products: null,
    dataFetched: false,
    cart: [],
    numItem: 1,
  },
  getters: {
    totalItemInCart: (state)=> state.cart.length
  },
  mutations: {
    SET_PRODUCTS: (state, payload) => {
      state.products = payload,
      state.dataFetched = true
    },
    ADD_TO_CART: (state, payload) => {
      state.cart.push(payload);
    },
    INCREASE: (state, payload)=> {
      const index = state.cart.findIndex(item=> item.id == payload.id);
      state.cart.splice(index, 0, payload);
      // state.cart = newArray;
    },
    REMOVE_FROM_CART: (state, payload)=> {
      const index = state.cart.findIndex((item, i) => item.id == payload.id);
      state.cart.splice(index, 1);
    },
    ON_MOBILE: (state)=> state.mobile = true,
    OFF_MOBILE: (state)=> state.mobile = false,
  },
  actions: {
    // GET_PRODUCTS: async ({commit})=> {
    //   axios("https://fakestoreapi.com/products")
    //   .then(res=> {
    //     const payload = res.data;
    //     commit('SET_PRODUCTS', payload);
    //   })
    // },
  },
  modules: {
  }
})
