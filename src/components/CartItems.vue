<template>
  <div class="cart-wrapper">
      <h2 v-if="$store.state.cart.length < 1">You have no Item in your cart</h2>
      <div class="card-container" v-else>
          <h2>You have ({{$store.getters.totalCartItem}}) Items in your cart</h2>
          <div class="cart-card" v-for="item in getCartItems" :key="item.id">
            <img :src="item.image" alt="">
            <div class="info">
                <div class="title">{{item.title}}</div>
                <div>{{item.description}}</div>
                <span>₦{{item.price}}</span>
                <div class="btns">
                <div class="left" @click="increase(item)">
                    <i class="fas fa-plus"></i>
                </div>
                <div class="center">{{getItemTotals(item.id)}}</div>
                <div class="left" @click="decrease(item)">
                    <i class="fas fa-minus"></i>
                </div>
            </div>
          </div>
      </div>
      </div>
      <div class="cart-summary">
          <span>Subtotal: {{cartTotal}}</span>
      </div>
  </div>
</template>

<script>
export default {
name: 'CartItem',
computed: {
    getCartItems(){
        const cartItem = this.$store.state.cart;
        const map = [];
      for (let value of cartItem) {
        if (map.indexOf(value) === -1) {
          map.push(value);
        }
      }
      return map;
    },
    cartTotal(){
        return this.$store.state.cart.reduce((total, item)=> total += item.price)
    }
},
methods: {
    increase(value){
        this.$store.commit("INCREASE", value)
    },
    decrease(value){
        this.$store.commit("REMOVE_FROM_CART", value)
    },
    getItemTotals(itemId){
        return this.$store.state.cart.filter(item=> item.id == itemId).length;
    }
},
mounted(){
    console.log(this.$store.state.cart);
}
}
</script>

<style lang="scss" scoped>
.cart-wrapper {
    width: 100%;
    h2 {
        @media (max-width:500px) {
                    font-size: 14px;
        }
    }
    .cart-card {
        display: flex;

        margin-bottom: 5px;
        background-color: #f1f1f1;
        padding: 8px;
        gap: 5px;
        width: 100%;
        max-height: 150px;
        cursor: pointer;
        

        img {
            max-width: 100px;
            object-fit: contain;
        }
        .info {
            overflow: hidden;
            display: flex;
            flex-direction: column;
            h3 {
                font-size: 16px;
                @media (max-width:500px) {
                    font-size: 13px;
                }
            }
            div {
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
                @media (max-width:500px) {
                    font-size: 12px;
                }
            }
            span {
                margin-top: auto;
                font-weight: bold;
            }
            .title {
                font-weight: bold;
                font-size: 14px;
            }
            .btns {
                display: flex;
                gap: 2px;
                justify-content: flex-end;
                
                .left, .right, .center {
                    padding: 6px;
                    background: #fff;
                }
            }
        }
    }
}
</style>