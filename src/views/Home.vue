<template>
<main class="main-wrap">
    <div class="row">
        <div class="col">
            <div class="flyout-menu">
                <div class="flyout">
                    <router-link :to="{name: 'Category', params:{slug: 1}}" class="itm">
                        <i class="fas fa-couch"></i>
                        <span class="text">Couch</span>
                    </router-link>
                    <router-link :to="{name: 'Category', params:{slug: 2}}" class="itm">
                        <i class="fas fa-bed"></i>
                        <span class="text">Beds</span>
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
            items: ['carousel-1', 'carousel-3', 'carousel-5'],
            productImages: [
                { image: 'table', discount: '-25', price: '₦25,000', name: 'Table'},
                { image: 'double', discount: '-12', price: '₦36,000', name: 'Chair'},
                { image: 'console', discount: '-15', price: '₦30,000', name: 'Console'},
                { image: 'wardrobe', discount: '-8', price: '₦75,000', name: 'Wardrobe'},
                { image: 'table', discount: '-25', price: '₦25,000', name: 'Table'},
                { image: 'double', discount: '-12', price: '₦36,000', name: 'Chair'},
                { image: 'console', discount: '-15', price: '₦30,000', name: 'Console'},
                { image: 'wardrobe', discount: '-8', price: '₦75,000', name: 'Wardrobe'},
                { image: 'table', discount: '-25', price: '₦25,000', name: 'Table'},
                { image: 'double', discount: '-12', price: '₦36,000', name: 'Chair'},
                { image: 'console', discount: '-15', price: '₦30,000', name: 'Console'},
                { image: 'wardrobe', discount: '-8', price: '₦75,000', name: 'Wardrobe'},
            ]
        }
    }
}
</script>

<style lang="scss">
.main-wrap {
    flex-grow: 1;
    padding-bottom: 56px;
    position: relative;
    background: #f5f5f5;

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
    margin-bottom: 8px;
    margin-top: 8px;
    flex-basis: 100%;
    max-width: 100%;
    min-width: 100%;
    width: 100%;
    padding-left: 8px;
    padding-right: 8px;
        .card {
            overflow: hidden;
            border-radius: 4px;
            width: 100%;
            box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.05);
            background-color: #fff;

            .rows {
                background: #fff;
                padding-left: 16px;
                padding-right: 16px;
                flex-wrap: nowrap;
                height: 0;
                min-height: 48px;

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
                        margin: 0;
                        padding: 0;
                    }
                }
            }
            .card-wrap {
                padding-left: 4px;
                padding-right: 4px;
                position: relative;
                overflow: hidden;

                .card-holder {
                    padding-bottom: 4px;
                    padding-top: 4px;
                    flex-wrap: nowrap;
                    scroll-behavior: smooth;
                    scroll-snap-type: x mandatory;
                    overflow: scroll;
                    user-select: none;
                    display: flex;
                    margin-left: auto;
                    margin-right: auto;
                    width: 100%;
                    flex: 0 1 auto;

                    &::-webkit-scrollbar {
                        display: none;
                    }

                    .itm-col {
                        flex-shrink: 0;
                        display: flex;
                        width: 25%;
                        padding-left:0;
                        padding-right:0;
                        scroll-snap-align: start;

                        .prd {
                            line-height: 1;
                            margin: 4px;
                            padding-bottom: 8px;
                            width: 100%;
                            overflow: hidden;
                            border-radius: 4px;
                            position: relative;
                            background: #fff;
                            display: block;

                            &:hover {
                                box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.3);
                            }

                            .core {
                                width: 100px;
                                // visibility: hidden !important;
                                background-color: rgba(0,0,0,0);

                                img {
                                    display: block;
                                    width: 100%;
                                    height: 200px;
                                }
                                .name {
                                    font-size: 0.875rem;
                                    text-overflow: ellipsis;
                                    overflow: hidden;
                                    white-space: nowrap;
                                    padding-left: 8px;
                                    padding-bottom: 4px;
                                    padding-top: 8px;
                                    padding-left: 8px;
                                    overflow: hidden;
                                    color: #282828;
                                    margin-top: auto;
                                }
                                .prc {
                                    font-size: 1rem;
                                    text-align: left;
                                    font-weight: 500;
                                    padding-left: 8px;
                                    padding-right: 8px;
                                    padding-top: 4px;
                                    direction: ltr;
                                    color: #282828;
                                }
                                .tag {
                                    top: 8px;
                                    right: 8px;
                                    position: absolute;
                                    font-size: .875rem;
                                    direction: ltr;
                                    padding-left: 4px;
                                    padding-right: 4px;
                                    height: 24px;
                                    min-width: 40px;
                                    color: rgb(24, 79, 100);
                                    background-color: #feefde;
                                    line-height: 1.2;
                                    font-weight: 500;
                                    align-items: center;
                                    justify-content: center;
                                    display: inline-flex;
                                    border-radius: 2px;
                                }
                            }
                        }
                    }
                }
                .c-btn {
                    cursor: pointer;
                    width: 40px;
                    height: 40px;
                    background-color: rgba(40, 40, 40, 0.5);
                    border-radius: 50%;
                    z-index: 30;
                    transform: translate3d(0, -50%, 0);
                    top: 50%;
                    position: absolute;
                    margin: 0;
                    overflow: visible;
                    display: flex;
                    align-items: center;
                    justify-content: center;

                    i {
                        color: #fff;
                        font-size: 24px;
                    }

                    &:focus {
                        outline: none;
                    }
                }
                .prev{
                    left: 8px;
                }
                .next {
                    right: 8px
                }
            }
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