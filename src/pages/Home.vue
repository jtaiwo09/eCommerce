<template>
  <div class="home-wrap">
    <Carousel />
    <Categories />
    <Services />
    <Testimonial />
  </div>
</template>

<script>
import Carousel from '../components/Carousel.vue';
import Categories from '../components/Categories.vue';
import Services from '../components/Services.vue';
import Testimonial from '../components/Testimonial.vue';
export default {
name:'content',
components: {Carousel, Categories, Services, Testimonial}
}
</script>

<style lang="scss" scoped>
.home-wrap {
}
</style>