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
        <div v-for="(item, i) in items" :key="i" class="carousel-text">
            <img :src="require(`@/Images/Carousel/${item.image}.jpg`)" alt="">
            <div class="banner">
              <h1 class="banner-title">Taelio Furnitures</h1>
              <p class="banner-text">{{item.text}}</p>
              <!-- <div class="banner-btn">
                Our Furnitures
              </div> -->
            </div>
        </div>
  </a-carousel>
</template>

<script>
export default {
name: 'carousel',
data(){
    return {
        items: [
          { image: 'carousel-4', text: 'We offer quality products'},
          { image: 'carousel-5', text: 'We are durable'},
          { image: 'carousel-6', text: 'We are affordable'},
        ]
    }
}
}
</script>

<style lang="scss" scoped>
.ant-carousel :deep(.slick-slide) {
  max-height: 80vh;
  min-height: 35vh;
  overflow: hidden;
  position: relative;
}

.ant-carousel :deep(.slick-slide img) {
  width: 100%;
  height: 100%;
  object-fit: cover;
  min-height: 35vh;
}
.ant-carousel :deep(.slick-slide .banner) {
  position: absolute;
  width: 55vw;
  max-height: 40%;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 1rem 1rem;
  background: rgba(0,0,0,0.5);
  color: #fff;

  .banner-title {
    font-size: 5vw;
    color: #fff;
    margin-bottom: 0;
  }
  .banner-btn{
    display: inline-block;
    background: rgba(27, 28, 28);
    border: 3px solid rgba(27, 28, 28);
    color: #fff;
    padding: 10px 20px;
    text-transform: uppercase;
    cursor:pointer;

  }
  .banner-text {
    font-size: 25px;
    margin-bottom: 0.8rem;
    @media (max-width: 800px){
      font-size: 20px;
    }
    @media (max-width: 750px){
      font-size: 16px;
    }
    @media (max-width: 450px){
      font-size: 12px;
    }
  }
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