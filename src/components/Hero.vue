<template>
  <header :class="hero" :style="style">
    <img :src="require(`../Images/Categories/${image}.jpg`)" alt="">
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
                'background-image': `url(${require(`../Images/ProductHero/${this.image}.jpg`)})`,
                'background-repeat': 'no-repeat',
                'background-size': 'contain',
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
    position: relative;
    width: 100%;
    min-height: 60vh;
    background-color: #e0dfe5;
    z-index: 1;
    overflow: hidden;

    img {
      position: absolute;
      width: 500px;
      z-index: 2;
    }
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