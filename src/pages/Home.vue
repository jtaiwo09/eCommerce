<template>
  <div class="home-wrap">
    <Carousel />
    <Categories />
    <Services />
  </div>
</template>

<script>
import Carousel from '../components/Carousel.vue';
import Categories from '../components/Categories.vue';
import Services from '../components/Services.vue';
export default {
name:'content',
components: {Carousel, Categories, Services}
}
</script>

<style lang="scss" scoped>
.home-wrap {
}
</style>