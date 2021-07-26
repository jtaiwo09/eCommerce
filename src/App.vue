<template>
  <div id="app">
    <Navigation @showDrawer="open"/>
    <Drawer :visible="visible" :title='getTitle' @closeDrawer="close">
      <Bars v-if="menu"/>
      <Search v-else-if="search"/>
    </Drawer >
  </div>
  <router-view/>
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
      cart:''
    }
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
  }
  },
  computed: {
    getTitle(){
      if(this.menu) return 'MENU';
      else if(this.search) return 'SEARCH'
      else return 'CART';
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

}
.container {
  padding: 0 80px;
}
</style>