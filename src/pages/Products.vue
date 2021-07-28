<template>
  <div class="container-wrapper">
    <Hero hero='categoryHero'>
        <Banner :title="`${id} Section`"/>
    </Hero>
  </div>
</template>

<script>
import Hero from '../components/Hero.vue';
import Banner from '../components/Banner.vue';
export default {
name: 'Products',
props: ['id'],
components: { Hero, Banner }
}
</script>

<style lang="scss" scoped>

</style>