<template>
  <div class="slider">
    <agile class="agile" :options="options">
        <div v-for="(item, i) in items" :key="i">
            <img :src="require(`../Images/New/carousel/${item}.jpg`)" alt="">
        </div>
    </agile>
</div>
</template>

<script>
export default {
name: 'Carousel',
props: ['items'],
data(){
    return {
        options: {
            infinite: true,
            navButtons: false,
            dots: true,
            autoplay: true,
            autoplaySpeed: 3000,
            fade: true,
        },
    }
}
}
</script>

<style>

</style>