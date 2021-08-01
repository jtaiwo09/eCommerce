<template>
<main class="main-wrap">
    <div class="row">
        <div class="col">
            <div class="flyout-menu">
                <div class="flyout">
                    <router-link to="#" class="itm">
                        <img src="#" alt="">
                        <span class="text">Tables</span>
                    </router-link>
                    <router-link to="#" class="itm">
                        <img src="#" alt="">
                        <span class="text">Dinning Chairs</span>
                    </router-link>
                </div>
            </div>
            <div class="slider">
                <agile class="agile" :options="options">
                    <div v-for="(item, i) in items" :key="i">
                        <img :src="require(`../Images/New/carousel/${item}.jpg`)" alt="">
                    </div>
                </agile>
            </div>
            <div class="ads">
                <img :src="require('../Images/New/ads/ads-1.jpg')" alt="">
            </div>
        </div>
        <div class="cols">
            <div class="col-w">
                <section class="card">
                    <header class="rows">
                        <div class="header-wrap">
                            <h2>Top Selling items</h2>
                        </div>
                    </header>
                    <div class="card-wrap">
                        <div class="card-holder">
                            <div class="itm-col" v-for="(item, i) in productImages" :key="i">
                                <article class="prd">
                                    <router-link class="core" to="#">
                                        <img :src="require(`../Images/Categories/${item}.jpg`)" alt="">
                                        <div class="name">
                                            Text
                                        </div>
                                        <div class="prc">
                                            Price
                                        </div>
                                        <div class="tag">
                                            -47%
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
        <div class="cols">
            <sections class="cards">
                <div class="card-wrapper">
                    <router-link class="card-link" to="#">
                        <div class="image-wrap">
                            <img :src="require('../Images/New/carousel/ads-1.jpg')" alt="">
                        </div>
                    </router-link>
                    <router-link class="card-link" to="#">
                        <div class="image-wrap">
                            <img :src="require('../Images/New/carousel/ads-2.jpg')" alt="">
                        </div>
                    </router-link>
                </div>
            </sections>
        </div>
    </div>
    
</main>
</template>

<script>
// import ProductSlider from '../component/ProductSlider.vue';
export default {
    // components: {ProductSlider},
    data(){
        return {
            options: {
                infinite: true,
                navButtons: false,
                dots: true,
                autoplay: true,
                autoplaySpeed: 3000,
                fade: true,
            },
            items: ['carousel-1', 'carousel-3', 'carousel-5'],
            productImages: ['beds', 'console', 'single', 'double', 'wardrobe', 'beds', 'console', 'single', 'double', 'wardrobe', 'beds', 'console', 'single']
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

    .flyout-side {
        font-size: 0;
        flex-shrink: 0;
        width: 206px;
        position: relative;
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
    .col-w {
        .card {
            overflow: hidden;
            border-radius: 4px;
            width: 100%;
            box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.05);
            background-color: #fff;
            display: block;

            .rows {
                background: #fff;
                padding-left: 16px;
                padding-right: 16px;
                flex-wrap: nowrap;
                height: 0;
                min-height: 48px;
                justify-content: space-between;
                align-items: center;
                max-width: 950px;
                margin-left: auto;
                margin-right: auto;
                width: 100%;
                flex: 0 1 auto;
                display: flex;

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

                            .core {
                                width: 100px;
                                // visibility: hidden !important;
                                background-color: rgba(0,0,0,0);

                                img {
                                    display: block;
                                    width: 100%;
                                    height: auto;
                                    border-style: none;
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
                                }
                                .prc {
                                    font-size: 1rem;
                                    text-align: left;
                                    font-weight: 500;
                                    padding-left: 8px;
                                    padding-right: 8px;
                                    padding-top: 4px;
                                    direction: ltr;
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
                    padding: 8px;
                    background-color: rgba(40, 40, 40, 0.5);
                    border-radius: 99px;
                    z-index: 30;
                    font-size: 0;
                    transform: translate3d(0, -50%, 0);
                    top: 50%;
                    position: absolute;
                    -webkit-appearance: button;
                    text-transform: none;
                    margin: 0;
                    overflow: visible;
                    border: 0;

                    i {
                        color: #fff;
                        width: 24px;
                        height: 24px;
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
}
.cols {
    padding-bottom: 8px;
    padding-top: 8px;
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

        .card-wrapper {
            padding: 8px 4px;
            display:flex;

            .card-link {
                margin-left: 4px;
                margin-right: 4px;
                width: 100%;
                text-decoration: none;

                .image-wrap {
                    padding-top: 43.75%;
                    height: 0;
                    width: 100%;
                    position: relative;

                    img {
                        border-radius: 4px;
                        height: 100%;
                        width: 100%;
                        top: 0;
                        left: 0;
                        position: absolute;
                    }
                }
            }
        }
    }
}
}
</style>