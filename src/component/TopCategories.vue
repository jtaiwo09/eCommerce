<template>
  <div class="cols">
            <section class="cards">
                <header class="rows">
                        <div class="header-wrap">
                            <h2>{{cards.title}}</h2>
                        </div>
                    </header>
                <div class="card-wrapper">
                    <router-link class="card-link" to="#">
                        <div class="image-wrap">
                            <img :src="require(`../Images/New/carousel/${this.cards.img1}`)" alt="">
                        </div>
                    </router-link>
                    <router-link class="card-link" to="#">
                        <div class="image-wrap">
                            <img :src="require(`../Images/New/carousel/${this.cards.img2}`)" alt="">
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

<style>

</style>