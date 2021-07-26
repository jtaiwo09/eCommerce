<template>
<section>
  <div class="container">
    <h2 class="text">Testimonials</h2>
      <a-carousel autoplay>
        <div v-for="(item, i) in items" :key="i" class="card">
            <img :src="require(`@/Images/Testimonials/${item.image}`)" alt="">
            <p class="text">{{item.text}}</p>
            <p class="name">{{item.name}}</p>
        </div>
  </a-carousel>
  </div>
</section>
</template>

<script>
export default {
    name: 'Testimonial',
    data(){
      return {
        items: [
      {
        text: 'Amazing brand.Their pieces are beautifully constructed.', image: 'testimonial-1.jpg', name: 'Kike Johnson',
      },
      {
        text: 'Affordable and Well Made Furniture you can Trust.', image: 'testimonial-2.png', name:'James Samson',
      },
      {
        text: 'A piece of Taeillo Speaks Volume in your space..', image: 'testimonial-3.jpg', name:'Yemi Ojo'
      }
    ]
      }
    }

}
</script>

<style lang="scss" scoped>
.ant-carousel :deep(.slick-slide) {
  height: auto;
  overflow: hidden;
}

.ant-carousel :deep(.slick-slide img) {
  width: 80px;
  height: auto;
  display: block;
  margin: auto;
  border-radius: 50%;
  margin-bottom: 20px;
}
.ant-carousel :deep(.slick-slide .text) {
  text-align: center;
  font-size: 18px;
}
.ant-carousel :deep(.slick-slide .name) {
  text-align: center;
  font-size: 12px;
}
section {
  background: #f5f5f5;
  padding-top: 40px;
  .container {
      max-width: 800px;
      margin: auto;
      .card {
        padding: 25px 15px;
        background: #fff;
        box-shadow: 8px 16px 10px rgba(0,0,0,0.3);
      }
      h2 {
        text-align: center;
        font-size: 32px;
        margin-bottom: 30px;
        @media (max-width: 740px) {
          font-size: 25px;
          margin-bottom: 35px;
        }
        @media (max-width: 590px) {
          font-size: 23px;
          margin-bottom: 25px;
        }
      }
  }
}
</style>