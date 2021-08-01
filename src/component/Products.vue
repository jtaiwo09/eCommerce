<template>
  <div class="cols">
        <div class="col-w">
            <section class="card">
                <header class="rows">
                    <div class="header-wrap">
                        <h2>{{this.title}}</h2>
                    </div>
                </header>
                <div class="card-wrap">
                    <div class="card-holder">
                        <div class="itm-col" v-for="(item, i) in this.productImages" :key="i">
                            <article class="prd">
                                <router-link class="core" to="#">
                                    <img :src="require(`../Images/Categories/${item.image}.jpg`)" alt="">
                                    <div class="name">
                                        {{item.name}}
                                    </div>
                                    <div class="prc">
                                        {{item.price}}
                                    </div>
                                    <div class="tag">
                                        {{item.discount}}%
                                    </div>
                                </router-link>
                            </article>
                        </div>
                    </div>
                    <div class="c-btn prev">
                        <i class="fas fa-angle-left"></i>
                    </div>
                    <div class="c-btn next">
                        <i class="fas fa-angle-right"></i>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
export default {
name: 'products',
props: ['productImages', 'title']
}
</script>

<style>

</style>