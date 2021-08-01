<template>
  <vueper-slides
  class="no-shadow"
  :visible-slides="3"
  :gap="3"
  :slide-ratio="1 / 4"
  :dragging-distance="200"
  :breakpoints="{ 800: { visibleSlides: 2, slideMultiple: 2 } }">
  <vueper-slide v-for="(item, i) in items" :key="i.toString()" :image="require(`../Images/Categories/${item}.jpg`)" />
</vueper-slides>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

export default {
components: { VueperSlides, VueperSlide },
data(){
    return {
        items: ['beds', 'console', 'single', 'double', 'wardrobe', 'beds', 'console', 'single']
    }
}
}
</script>

<style>

</style>