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
.defaultHero,
.categoryHero {
    min-height: calc(100vh - 66px);
    background: url('./Images/Carousel/carousel-2.jpg') center/cover no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
}
.categoryHero {
    background-image: url('./Images/Carousel/carousel-1.jpg');
    min-height: 60vh;
}

@media (max-width: 890px) {
  
}
</style>