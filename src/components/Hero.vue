<template>
  <header :class="hero" :style="styles">
    <!-- <img :src="require(`../Images/Categories/${image}.jpg`)" alt=""> -->
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
                // 'background-repeat': 'no-repeat',
                // 'background-size': 'center/cover',
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
    // position: absolute;
    // width: 100%;
    min-height: 70vh;
    // background-color: #e0dfe5;
    // z-index: 1;
    overflow: hidden;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 60%;
    // background-image: url('../Images/Carousel/carousel-5.jpg')

    // img {
    //   position: absolute;
    //   width: 100%;
    //   z-index: 2;
    // }
}

@media (max-width: 590px) {
  .categoryHero {
    min-height: 50vh;
}
}
@media (max-width: 500px) {
  .categoryHero {
    min-height: 35vh;
}
}
</style>