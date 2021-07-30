<template>
  <div class="container-wrapper">
    <Hero hero='categoryHero' :image='id'>
        <Banner :title="`${id} Furnitures`">
          <router-link :to="{name: 'Home'}" class="btn-primary">Back Home</router-link>
        </Banner>
    </Hero>
    <ProductList v-if="$store.state.dataFetched" :products="getProducts"/>
  </div>
</template>

<script>
import Hero from '../components/Hero.vue';
import Banner from '../components/Banner.vue';
import ProductList from '../components/ProductList.vue';
// import {mapState} from 'vuex';
export default {
name: 'Products',
props: ['id'],
components: { Hero, Banner, ProductList },
data(){
  return {
    products: [],
  }
},
computed: {
  getProducts(){
    return this.$store.state.products;
  },
},
mounted(){
  console.log(this.products);
}
}
</script>

<style lang="scss" scoped>

</style>