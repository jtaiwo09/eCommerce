<template>
<Navigation />
  <div class="app">
    <!-- <Navigation @showDrawer="open"/>
    <Drawer :visible="visible" :drawerWidth='getDrawerWidth' :title='getTitle' @closeDrawer="close">
      <Bars v-if="menu"/>
      <Search v-else-if="search"/>
      <CartItems v-else-if="cart"/>
    </Drawer > -->
    
    <router-view/>
  </div>
</template>

<script>
import Navigation from './component/Navigation';
import { data } from './utils/apis';
// import Drawer from './components/Drawer';
// import Bars from './components/Bars';
// import Search from './components/Search';
// import CartItems from './components/CartItems';

export default {
  name: 'app',
  components: { Navigation },
  data(){
    return {
      visible: null,
      menu:'',
      search:'',
      cart:'',
      windowWidth: null,
    }
  },
  created(){
    this.checkScreen();
    window.addEventListener('resize', this.checkScreen);
    this.$store.commit('SET_PRODUCTS', data);
  },
  mounted(){
    // console.log(this.windowWidth);
  },
  methods: {
    open(value){
      this.visible=true
      if(value == 'menu') this.menu = true;
      else if(value == 'cart') this.cart = true;
      else this.search = true;
    },
    close(){
    this.visible = false;
    this.menu = false;
    this.search = false;
    this.cart = false;
  },
  checkScreen(){
    this.windowWidth = window.innerWidth;
    if(this.windowWidth <= 958){
      this.$store.commit('ON_MOBILE');
    }
    this.$store.commit('OFF_MOBILE');
  }
  },
  computed: {
    getTitle(){
      if(this.menu) return 'MENU';
      else if(this.search) return 'SEARCH'
      else return 'CART';
    },
    getDrawerWidth(){
      if(this.mobile) return this.windowWidth;
      else return '580';
    }
  },
  watch: {
    windowWidth(newVal){
      console.log(newVal);
    }
  }
}
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
}

header, section, nav {
  display: block;
}

body {
  font-family: Roboto,-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;
  color: #282828;
  font-size: 0.875rem;
  background-color: #f5f5f5;
  direction: ltr;
  -webkit-font-smoothing: antialiased;
  margin: 0;
  padding: 0;
  min-height: 100%;
  min-width: 950px;
  display: flex;
  flex-direction: column;
  // justify-content: center;
}

.main-wrap {
  flex-grow: 1;
  padding-bottom: 56px;
  background: #f5f5f5;
  margin-top: 72px;
}

.row {
  display: flex;
  // align-items: center;
  flex-wrap: wrap;
  margin-left: auto;
  margin-right: auto;
  max-width: 1184px;
  width: 100%;
  flex: 0 1 auto;
  @media (max-width: 1200px) {
      max-width: 950px;
  }
  // @media (max-width: 500px) {
  //     max-width: 350px;
  // }
}
.col {
    padding-bottom: 8px;
    justify-content: space-between;
    display: flex;
    flex-basis: 100%;
    max-width: 100%;
    width: 100%;
    margin-left: 8px;
    margin-right: 8px;
    margin-top:15px;
  }
  .col-side {
    flex-basis: 25%;
    max-width: 25%;
    min-width: 25%;
    width: 25%;
  }
  .col-main {
    padding: 8px;
    flex-basis: 75%;
    max-width: 75%;
    min-width: 75%;
    width: 75%;
  }

  .tag-disc {
    font-size: 0.75rem;
    text-decoration: none;
    padding-right: 2px;
    padding-left: 2px;
    margin-left: 8px;
    height: 18px;
    min-width: 32px;
    direction: ltr;
    color: tomato;
    background-color: #feefde;
    line-height: 1.2;
    font-weight: 500;
    justify-content: center;
    display: inline-flex;
    border-radius: 2px;
  }

.flyout {
    z-index: 50;
    font-size: .75rem;
    height: 384px;
    box-shadow: 0 2px 5px 0 rgb(0, 0, 0, 0.05);
    flex-wrap: wrap;
    flex-direction: column;
    display: flex;
    overflow: hidden;
    border-radius: 4px;

    .itm {
        padding-left: 8px;
        height: 32px;
        width: 206px;
        align-items: center;
        display: flex;
        color: inherit;
        text-decoration: none;

        i {
            margin-right: 4px;
            flex-shrink: 0;
            color: #282828;
            width: 20px;
            height: 20px;
        }
        .text {
            text-overflow: ellipsis;
            white-space: nowrap;
            flex-grow: 1;
            overflow: hidden;
        }
    }
}

// .app {
//   display: flex;
//   flex-direction: column;
//   min-height: 100vh;
// }
// .container-wrapper {
//   margin-top: 70px;
// }

// .container {
//   padding: 0 30px;
// }
// .btn-primary {
//   display: inline-block;
//   text-decoration: none;
//   letter-spacing: 3px;
//   color: #fff;
//   background: #af9a7d;
//   padding: 0.4rem 0.9rem;
//   border: 3px solid #af9a7d;
//   transition: all .25s ease;
//   text-transform: uppercase;
//   cursor: pointer;
// }
// .btn-primary:hover {
//   background: transparent;
//   color: #fff;
// }

// @media (max-width: 890px) {
  
// }
</style>