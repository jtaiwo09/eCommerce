<template>
  <header :class="hero" :style="styles">
      <slot></slot>
  </header>
</template>

<script>
export default {
    name: 'Hero',
    props: ['hero', 'image'],
    computed: {
      styles() {
            return {
                'background-image': `url(${require(`../Images/Categories/${this.image}.jpg`)})`,
            }
        }
    },

}
</script>

<style lang="scss" scoped>
.categoryHero {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 60vh;
    overflow: hidden;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 60%;
    // background-image: url('../Images/Carousel/carousel-5.jpg')
}

@media (max-width: 500px) {
  .categoryHero {
    min-height: 50vh;
}
}
</style>