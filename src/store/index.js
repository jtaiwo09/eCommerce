import { createStore } from 'vuex'

export default createStore({
  state: {
    products: [
      {
        name: 'Sofa',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam excepturi ea et id, cum officiis suscipit alias quas enim repellat vero aliquid explicabo voluptatibus dicta dolores inventore voluptatem aliquam porro!',
        price: '#19,000',
        featured:false,
        quantity: 10,
        category: 'living-room'
      },
      {
        name: 'TV Stand',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam excepturi ea et id, cum officiis suscipit alias quas enim repellat vero aliquid explicabo voluptatibus dicta dolores inventore voluptatem aliquam porro!',
        price: '#12,000',
        featured:false,
        quantity: 7,
        category: 'bedroom'
      },
      {
        name: 'Wing Chair',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam excepturi ea et id, cum officiis suscipit alias quas enim repellat vero aliquid explicabo voluptatibus dicta dolores inventore voluptatem aliquam porro!',
        price: '#5,000',
        featured:false,
        quantity: 8,
        category: 'living-room'
      },
    ]
  },
  getters: {
    //
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
