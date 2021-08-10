<template>
  <div class="cols">
            <section class="cards">
                <div class="card-wrapper">
                    <router-link class="card-link" to="#">
                        <div class="image-wrap">
                            <img :src="require(`../Images/New/carousel/${cards.img1}`)" alt="">
                        </div>
                    </router-link>
                    <router-link class="card-link" to="#">
                        <div class="image-wrap">
                            <img :src="require(`../Images/New/carousel/${cards.img2}`)" alt="">
                        </div>
                    </router-link>
                </div>
            </section>
        </div>
</template>

<script>
export default {
name: 'topCategories',
props: ['cards']
}
</script>

<style lang="scss" scoped>

</style>