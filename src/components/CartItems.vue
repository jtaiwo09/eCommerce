<template>
  <div class="cart-wrapper">
      <h2 v-if="$store.state.cart.length < 1">You have no Item in your cart</h2>
      <div v-else class="cart-card" v-for="item in getCartItems" :key="item.id">
          <img :src="item.image" alt="">
          <div class="info">
              <h3>{{item.title}}</h3>
              <div>{{item.description}}</div>
              <span>₦{{item.price}}</span>
          </div>
      </div>
  </div>
</template>

<script>
export default {
name: 'CartItem',
computed: {
    getCartItems(){
        return this.$store.state.cart;
    }
}
}
</script>

<style lang="scss" scoped>
.cart-wrapper {
    width: 100%;
    .cart-card {
        display: flex;
        margin-bottom: 5px;
        background-color: #f1f1f1;
        padding: 10px;
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
            }
            div {
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
            }
            span {
                margin-top: auto;
                font-weight: bold;
            }
        }
    }
}
</style>