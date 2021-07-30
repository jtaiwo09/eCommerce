<template>
  <div class="app">
    <Navigation @showDrawer="open"/>
    <Drawer :visible="visible" :drawerWidth='getDrawerWidth' :title='getTitle' @closeDrawer="close">
      <Bars v-if="menu"/>
      <Search v-else-if="search"/>
    </Drawer >
    <router-view/>
  </div>
</template>

<script>
import Navigation from './components/Navigation';
import Drawer from './components/Drawer';
import Bars from './components/Bars';
import Search from './components/Search';

export default {
  name: 'app',
  components: { Navigation, Drawer, Bars, Search},
  data(){
    return {
      visible: null,
      menu:'',
      search:'',
      cart:'',
      windowWidth: null,
      mobile: null
    }
  },
  created(){
    this.checkScreen();
    window.addEventListener('resize', this.checkScreen);
    this.$store.dispatch('GET_PRODUCTS');
  },
  mounted(){
    console.log(this.windowWidth);
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
      if(newVal <= 500){
        this.mobile = true;
        this.windowWidth = newVal;
      } else {
        this.mobile = false;
      }
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
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.container-wrapper {
  margin-top: 70px;
}

.container {
  padding: 0 30px;
}
.btn-primary {
  display: inline-block;
  text-decoration: none;
  letter-spacing: 3px;
  color: #fff;
  background: #af9a7d;
  padding: 0.4rem 0.9rem;
  border: 3px solid #af9a7d;
  transition: all .25s ease;
  text-transform: uppercase;
  cursor: pointer;
}
.btn-primary:hover {
  background: transparent;
  color: #fff;
}

@media (max-width: 890px) {
  
}
</style>