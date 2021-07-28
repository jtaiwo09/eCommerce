<template>
  <div class="container-wrapper">
    <Hero hero='categoryHero' :image='id'>
        <Banner :title="`${id} Furnitures`">
          <router-link :to="{name: 'Home'}" class="btn-primary">Back Home</router-link>
        </Banner>
    </Hero>
    <ProductList />
  </div>
</template>

<script>
import Hero from '../components/Hero.vue';
import Banner from '../components/Banner.vue';
import ProductList from '../components/ProductList.vue';
export default {
name: 'Products',
props: ['id'],
components: { Hero, Banner, ProductList }
}
</script>

<style lang="scss" scoped>

</style>