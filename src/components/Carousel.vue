<template>
  <a-carousel effect="fade" autoplay arrows>
      <template #prevArrow>
        <div class="custom-slick-arrow" :style="{left: '50px', zIndex: 1}">
            <left-circle-outlined />
        </div>
        </template>
        <template #nextArrow>
        <div class="custom-slick-arrow" :style="{right: '50px'}">
            <right-circle-outlined />
        </div>
        </template>
        <div v-for="(item, i) in items" :key="i">
            <img :src="require(`@/Images/Carousel/${item}.jpg`)" alt="">
        </div>
  </a-carousel>
</template>

<script>
export default {
name: 'carousel',
data(){
    return {
        items: ['carousel-4', 'carousel-5', 'carousel-6']
    }
}
}
</script>

<style lang="scss" scoped>
.ant-carousel :deep(.slick-slide) {
  height: auto;
  overflow: hidden;
  margin-top: 70px;
//   position: relative !important;
}

.ant-carousel :deep(.slick-slide img) {
  width: 100%;
  height: auto;
  display: block;
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

// .ant-carousel{
//     .slick-slider{
//         .slick-list {
//             .slick-track {
//                 .slick-slide {
//                     div {
//                         .btn-wrap {
//                             position: absolute;
//                             width: 80%;
//                             margin: auto;
//                             h1 {
//                                 margin-top: 80px;
//                             }
//                         }
//                     }
//                 }
//             }
//         }
//     }
// }

</style>