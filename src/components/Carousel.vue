<template>
  <a-carousel effect="fade" autoplay arrows>
      <template #prevArrow>
        <div class="custom-slick-arrow" :style="{left: '30px', zIndex: 1}">
        </div>
        </template>
        <template #nextArrow>
        <div class="custom-slick-arrow" :style="{right: '30px'}">
        </div>
        </template>
        <div class="carousel" v-for="(item, i) in items" :key="i">
            <img :src="require(`@/Images/Carousel/${item.image}.jpg`)" alt="">
        </div>
  </a-carousel>
</template>

<script>
export default {
name: 'carousel',
data(){
    return {
        items: [
          { image: 'carousel-1', text: 'We offer quality products'},
          { image: 'carousel-2', text: 'We are durable'},
          { image: 'carousel-3', text: 'We are affordable'},
        ]
    }
},
}
</script>

<style lang="scss" scoped>
.ant-carousel :deep(.slick-slide) {
  max-height: 80vh;
  min-height: 35vh;
  overflow: hidden;
  position: relative;
}
.ant-carousel :deep(.slick-slide .carousel) {
  // background-image: url('../Images/Carousel/carousel-1.jpg');
  // background-repeat: no-repeat;
  // background-size: cover;
  // width: auto;
  // height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 100%;
}
.ant-carousel :deep(.slick-list) {
  height: 60vh;
}
.ant-carousel :deep(.slick-slide img) {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.ant-carousel :deep(.slick-arrow.custom-slick-arrow) {
  width: 25px;
  height: 25px;
  font-size: 25px;
  color: #fff;
  background-color: rgba(31, 45, 61, 0.11);
  opacity: 1;
}
.ant-carousel :deep(.custom-slick-arrow:before) {
  display: initial;
}
.ant-carousel :deep(.custom-slick-arrow:hover) {
  opacity: 0.5;
}

</style>