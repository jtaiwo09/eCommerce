<template>
  <div class="product-wrapper">
    <transition name="menu-toggle">
      <div class="slide-drawer" v-if="isOpen">
        <ul class="list-wrap">
          <i class="fas fa-times" @click="isOpen=false"></i>
          <h2>Categories</h2>
          <li v-for="(item, i) in getCategory" :key="i" @click="itemClicked(item)" class="list-item">{{item}}
          </li>
        </ul>
    </div>
    </transition>
 <div class="container">
   <div class="menu-toggler" @click="isOpen=true">
     <i class="fas fa-bars"></i>
   </div>
   <div class="card-container">
      <div class="card-holder" v-for="product in currentProduct" :key="product.id">
        <img :src="product.image" alt="">
        <div class="info">
          <h3>{{product.title}}</h3>
          <div class="description">{{product.description}}</div>
          <div class="action">
            <span>₦{{product.price}}</span>
            <div class="btn">
              Add to cart
            </div>
          </div>
        </div>
      </div>
    </div>
 </div>
  </div>
</template>

<script>
export default {
  props: ['products'],
  data(){
    return {
      currentProduct: null,
      isOpen: false,
    }
  },
  computed: {
    getCategory() {
      const map = [];
      for (let value of this.products) {
        if (map.indexOf(value.category) === -1) {
          map.push(value.category);
        }
      }
      return map;
    }
  },
  methods: {
    itemClicked(value){
      const selectedItem = this.products.filter(product => product.category == value);
      this.currentProduct = selectedItem;
      this.isOpen = false;
    },
    onload(){
      this.currentProduct = this.products.filter(product=> product.category == "women's clothing");
    }
  },
  mounted(){
    this.onload();
  }
}
</script>

<style lang="scss" scoped>
.product-wrapper{
  position: relative;
  display: flex;
  background: #f1f1f1;
  .slide-drawer {
    position: absolute;
    left: 0;
    top: 0;
    background: #e0dfe5;
    height: 100vh;
    width: 300px;
    box-shadow: 4px 8px 8px rgba(0,0,0,0.3);
    
    .list-wrap{
      margin: 30px 30px;
      list-style: none;
      position: relative;

      i {
        position: absolute;
        right: 0;
        font-size: 20px;
        cursor: pointer;
      }
      .list-item {
        font-size: 16px;
        text-transform: capitalize;
        margin-bottom: 10px;
        cursor: pointer;
      }
    }
  }
  .container {
    width: 100%;
    .menu-toggler {
      margin: 10px 0;
      background: rgb(27, 28, 28);
      display: inline-block;
      padding: 10px;
      border-radius: 8px;
      cursor: pointer;
      i {
        font-size: 20px;
        color: #fff;
      }
    }
  .card-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-gap: 10px;

  .card-holder {
    display: flex;
    flex-direction: column;
    max-height: 300px;
    cursor: pointer;
    background: #fff;
    box-shadow: 2px 4px 6px rgba(0,0,0,0.2);
    transition: box-shadow 0.25s ease;
    padding-top: 15px;


    img{
      display: block;
      width: 100%;
      min-height: 150px;
      object-fit: contain;
    }
    .info{
      height: 100%;
      padding: 0 10px;
      display: flex;
      flex-direction: column;
      h3 {
        font-size: 14px;
      }
      .description {
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
      .action {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: auto;
        margin-bottom: 10px;

        span {
          font-size: 16px;
          font-weight: bold;
        }
        .btn {
          display: inline-block;
          color: #fff;
          background: #af9a7d;
          transition: all .25s ease;
          text-transform: uppercase;
          cursor: pointer;
          padding: 5px 12px;
        }
      }
    }
    &:hover{
    box-shadow: 4px 8px 12px rgba(0,0,0,0.4);
  }
  }
  
}
}
}
.menu-toggle-enter-active,
.menu-toggle-leave-active {
  transition: all 0.2s ease
}
.menu-toggle-enter-from,
.menu-toggle-leave-to {
  transform: translateX(-300px);
}
.menu-toggle-enter-to {
  transform: translateX(0px);
}
</style>