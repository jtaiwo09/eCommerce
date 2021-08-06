<template>
<main class="main-wrap">
    <div class="row">
        <div class="col">
            <div class="flyout-menu">
                <div class="flyout">
                    <router-link :to="{name: 'Category', params:{slug: getCategory[0].category}}" class="itm">
                        <i class="fas fa-couch"></i>
                        <span class="text">{{getCategory[0].category}}</span>
                    </router-link>
                </div>
            </div>
            <Carousel :items='items'/>
            <div class="ads">
                <img :src="require('../Images/New/ads/ads-1.jpg')" alt="">
            </div>
        </div>
        <TopCategories :cards="{img1:'ads-1.jpg', img2: 'ads-2.jpg'}"/>
        <TopCategories :cards="{img1:'ads-3.jpg', img2: 'ads-4.jpeg'}"/>
        <Products :productImages="productImages" title="New Arrivals"/>
        <Products :productImages="productImages" title="Top Selling items"/>
        <div class="cols">
            <div class="cards">
                <div class="card-wrapper">
                    <router-link class="card-link" to="#">
                        <div class="image-wrap">
                            <img :src="require('../Images/New/ads/btm-ads.jpg')" alt="">
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</main>
</template>

<script>
import TopCategories from '../component/TopCategories.vue';
import Products from '../component/Products.vue';
import Carousel from '../component/Carousel.vue';
export default {
    components: { TopCategories, Products, Carousel },
    data(){
        return {
            topSellings: null,
            items: ['carousel-1', 'carousel-3', 'carousel-5'],
        }
    },
    computed: {
        productImages(){
            return this.$store.state.products
        },
        getCategory(){
            return this.$store.state.products;
        }
    },
    methods: {
        getAllProducts(){
            this.topSellings = this.$store.state.products;
        },
    },
    mounted(){
        this.getAllProducts();
    }
}
</script>

<style lang="scss">
.main-wrap {
    .flyout-menu {
        font-size: 0;
        flex-shrink: 0;
        width: 206px;
        position: relative;
        background-color: #fff;

        .flyout {
            .itm {
                
                i {
                    font-size: 18px;
                    margin-right: 12px;
                }
                .text {
                    font-size: 14px;
                    // margin
                }
            }
        }
    }
    .slider {
        margin-right: 16px;
        margin-left: 16px;
        flex-shrink: 0;
        overflow: hidden;
        border-radius: 4px;
        height: 384px;
        width: 712px;
        box-shadow: 0 2px 5px 0 rgba(0,0,0,0.05);
        user-select: none;
        position: relative;
        justify-content: center;
        display: flex;

        .agile {
            height: 100%;
            width: 100%;
            
            div {
                width: 100%;
                height: 384px;
                img {
                    object-fit: cover;
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
    .ads {
        height: 384px;
        flex-wrap: wrap;
        align-content: space-between;
        flex-grow: 1;
        overflow: hidden;

        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
        @media (max-width: 1200px) {
            display: none;
        }
    }

.cols {
    flex-basis: 100%;
    max-width: 100%;
    min-width: 100%;
    width: 100%;
    padding-left: 8px;
    padding-right: 8px;

    .cards {
        overflow: hidden;
        box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.05);
        background: #fff;
        border-radius: 4px;

        .header-wrap {
            align-items: center;
            display: flex;
            overflow: hidden;
            padding-left: 0;
            padding-right: 0;
            max-width: 100%;
            flex-grow: 1;

            h2 {
                font-size: 1.25rem;
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
                font-weight: 500;
                margin-left: 10px;
                padding: 0;
            }
        }

        .card-wrapper {
            padding: 8px 4px;
            display:flex;
            background: #fff;

            .card-link {
                margin-left: 4px;
                margin-right: 4px;
                width: 100%;
                text-decoration: none;

                .image-wrap {
                    height: 200px;
                    width: 100%;
                    position: relative;
                    overflow: hidden;

                    img {
                        border-radius: 4px;
                        height: 100%;
                        width: 100%;
                        object-fit: cover;
                        top: 0;
                        left: 0;
                        position: absolute;
                        transition: .15s ease;
                    }

                    &:hover {
                        img {
                            transform: scale(1.01, 1.01);
                        }
                    }
                }
            }
        }
    }
}
}
</style>