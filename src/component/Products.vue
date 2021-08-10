<template>
  <div class="cols">
        <section class="card">
            <header class="rows">
                <div class="header-wrap">
                    <h2>{{title}}</h2>
                </div>
            </header>
            <div class="card-wrap">
                <div class="card-holder">
                    <div class="itm-col" v-for="(item, i) in productImages" :key="i">
                        <article class="prd">
                            <router-link class="core" :to="{name:'ProductDetails', params: {slug: item.name}}">
                                <img :src="item.image" alt="">
                                <div class="name">
                                    {{item.name}}
                                </div>
                                <div class="prc">
                                    ₦{{item.price}}
                                </div>
                                <div class="tag">
                                    -{{item.discount}}%
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
</template>

<script>
export default {
name: 'products',
props: ['productImages', 'title'],
}
</script>

<style lang="scss" scoped>
.cols {
    // margin-bottom: 16px;
    // margin-top: 16px;
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
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
        background-color: #fff;

        .rows {
            background: #fff;
            padding-left: 16px;
            padding-right: 16px;
            flex-wrap: nowrap;
            height: 0;
            min-height: 48px;
            border-bottom: 1px solid #ededed;

            .header-wrap {
                height: 48px;
                align-items: center;
                display: flex;
                overflow: hidden;
                max-width: 100%;
                flex-grow: 1;

                h2 {
                    font-size: 1.25rem;
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
                    width: 30%;
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
                                object-fit: cover;
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
                width: 36px;
                height: 36px;
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
                    font-size: 22px;
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
@media (max-width: 750px) {
    .cols {
        .card {
            .rows {
                .header-wrap {
                    height: 48px;
                    h2 {
                        font-size: 0.875rem;
                    }
                }
            }
            .card-wrap {
                .card-holder {
                    .itm-col {
                        width: 35%;
                        .prd {
                            .core {
                                img {
                                    width: 100%;
                                    min-width: 150px;
                                    min-height: 150px;
                                    object-fit: cover;
                                }
                            }
                        }
                    }
                }
                .c-btn {
                    width: 30px;
                    height: 30px;
                    i { font-size: 18px;}
                }
            }
        }
    }
}

@media (max-width: 650px) {
    .cols {
        .card {
            .rows {
                .header-wrap {
                    height: 48px;
                    h2 {
                        font-size: 0.875rem;
                    }
                }
            }
            .card-wrap {
                .card-holder {
                    .itm-col {
                        width: 40%;
                        .prd {
                            .core {
                                img {
                                    width: 100%;
                                    min-width: 150px;
                                    min-height: 150px;
                                    object-fit: cover;
                                }
                            }
                        }
                    }
                }
                .c-btn {
                    width: 30px;
                    height: 30px;
                    i { font-size: 18px;}
                }
            }
        }
    }
}
@media (max-width: 500px) {
    .cols {
        .card {
            .rows {
                .header-wrap {
                    h2 {
                        font-size: 0.875rem;
                    }
                }
            }
            .card-wrap {
                .card-holder {
                    .itm-col {
                        width: 50%;
                        .prd {
                            .core {
                                img {
                                    width: 100%;
                                    min-width: 150px;
                                    min-height: 150px;
                                    object-fit: cover;

                                }
                            }
                        }
                    }
                }
                .c-btn {
                    width: 25px;
                    height: 25px;
                    i { font-size: 16px;}
                }
            }
        }
    }
}
@media (max-width:450px) {
    .cols {
        .card {
            .card-wrap {
                .card-holder {
                    .itm-col {
                        width: 70%;
                    }
                }
            }
        }
    }
}
@media (max-width:350px) {
    .cols {
        .card {
            .card-wrap {
                .card-holder {
                    .itm-col {
                        width: 80%;
                    }
                }
            }
        }
    }
}
</style>