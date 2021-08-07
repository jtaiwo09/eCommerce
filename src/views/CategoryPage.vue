<template>
  <main class="main-wrap">
    <div class="row">
      <div class="cols">
        <router-link class="cbs" :to="{name: 'Home'}">Home</router-link> >
        <router-link class="cbs" to="#">Living room</router-link>
      </div>
      <Products :productImages="topProducts" title="Top Selling items" />
      <!-- <div class="cols">
                  <section class="cards">
                      <h2>Title</h2>
                      <div class="row">
                          <router-link class="link" v-for="(item, i) in items" :key="i" to="#">
                              <template v-if="i < 12">
                                  <div class="image-wrap">
                                    <img :src="require(`../Images/Carousel/carousel-1.jpg`)" alt="">
                                </div>
                                <p class="text">Sofa</p>
                              </template>
                          </router-link>
                      </div>
                  </section>
              </div> -->
    </div>
    <div class="row">
      <div class="col-side">
        <FilterMenu @on-change="setVal" @show-category="showCategory = $event" :priceArray="priceArray" :showCategory="showCategory" :allProduct="allProduct" :showSelected="showSelected" :hasFiltered="hasFiltered" />
      </div>
      <div class="col-main">
        <section class="card">
          <header>
            <div class="-mh-48px">
              <h1>{{showCategory}}</h1>
              <div class="-mla">
                <div class="-mla-s" @click="isFilterOpen = !isFilterOpen">
                  <input type="checkbox" class="tgl" />
                  <label class="trig">
                    <span class="pfx">Sort by:</span>
                    {{ filterBy }}
                    <i class="fas fa-angle-up" v-if="isFilterOpen"></i>
                    <i class="fas fa-angle-down" v-if="!isFilterOpen"></i>
                  </label>
                  <div class="box" v-if="isFilterOpen">
                    <div class="inbox">
                      <div class="link" @click="filterBy = 'New Arrivals'">
                        Newest Arrivals
                      </div>
                      <div
                        class="link"
                        @click="filterBy = 'Price: Low to High'"
                      >
                        Price: Low to High
                      </div>
                      <div
                        class="link"
                        @click="filterBy = 'Price: High to Low'"
                      >
                        Price: High to Low
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="-phs">
              <p class="-gy5">
                Found {{hasFiltered.length}} Items
              </p>
              <div class="fs0">
                <router-link class="link" to="#">
                  Arrange
                </router-link>
              </div>
            </div>
          </header>
          <div class="row">
            <div class="not-found" v-if="hasFiltered.length < 1">There are no Items between this range</div>
            <article
              class="prd"
              v-for="(item, i) in hasFiltered ? hasFiltered : showSelected"
              :key="i"
              @mouseover="currentItem = i"
              @mouseout="currentItem = null"
            >
              <router-link
                class="link"
                :to="{ name: 'ProductDetails', params: { slug: item.name } }"
              >
                <div class="image-wrap">
                  <img
                    :src="item.image"
                    alt=""
                  />
                </div>
                <div class="info">
                  <h3 class="name">{{item.name}}</h3>
                  <div class="prc">{{item.price}}</div>
                  <div class="d-price">
                    <div class="old">#85,000</div>
                    <div class="tag-disc">
                      -{{item.discount}}%
                    </div>
                  </div>
                </div>
              </router-link>
              <footer class="action">
                <div class="btn-wrap">
                  <button
                    class="btn"
                    @click="addToCart(item)"
                    :class="currentItem == i ? 'btn-show' : null"
                  >
                    Add to Cart
                  </button>
                </div>
              </footer>
            </article>
          </div>
        </section>
      </div>
    </div>
    <div class="row">
      <div class="filter-b" @click="openFilter">
        <div class="filter-con">
          <h2 class="text">Filter</h2>
          <i class="fas fa-filter"></i>
        </div>
      </div>
    </div>
    <transition name="open-filter">
      <div class="filterSlider-wrap" v-if="isFilterSliderOpen">
        <div class="filterSlider">
          <i class="fas fa-times" @click="closeFilter"></i>
          <FilterMenu @on-change="setVal" @show-category="showCategory = $event" :priceArray="priceArray" :showCategory="showCategory" :allProduct="allProduct" :showSelected="showSelected" :hasFiltered="hasFiltered" />
        </div>
      </div>
    </transition>
  </main>
</template>
<script>
// import Carousel from "../component/Carousel";
import Products from "../component/Products";
import FilterMenu from "../component/FilterMenu";
export default {
  components: { Products, FilterMenu },
  props: ['slug'],
  data() {
    return {
      filterBy: "Newest Arrivals",
      currentItem: null,
      isFilterOpen: false,
      showCategory: "Sofa",
      showSelected: [],
      allProduct: [],
      productList: [],
      priceArray: [],
      minP: this.minVal,
      maxP: this.maxVal,
      items: [
        "carousel-1",
        "carousel-3",
        "carousel-5",
      ],
      hasFiltered: [],
      windowWidth: null
    };
  },
  created(){
    this.allProduct = this.$store.state.products.filter(product=> product.category == this.slug);
    this.checkScreen();
    window.addEventListener('resize', this.checkScreen);
    this.filterByPrice();
    this.getProducts();
    this.priceList();
    this.minP();
    this.maxP();
    
  },
  methods: {
    getProducts(){
      this.showSelected = this.$store.state.products.filter(product=> product.sub == this.showCategory);
      if(this.filterBy == "Price: Low to High"){
        this.hasFiltered = this.hasFiltered.sort((a, b)=> a.price - b.price);
      }
      if(this.filterBy == "Price: High to Low"){
        this.hasFiltered = this.hasFiltered.sort((a, b)=> b.price - a.price);
      }
      if(this.filterBy == "Newest Arrivals"){
        return this.hasFiltered;
      }
    },
    priceList(){
      for(let x in this.allProduct){
        this.priceArray.push(this.allProduct[x].price)
      }
    },
    addToCart(value){
      this.$store.commit('ADD_TO_CART', value);
    },
    filterByPrice(){
      this.hasFiltered = this.showSelected.filter(product=> product.price >= this.minP && product.price <= this.maxP)
    },
    setVal(...args){
      const [minP, maxP] = args;
      this.minP = minP;
      this.maxP = maxP;
    },
    minVal(){
      this.minP = Math.min(...this.priceArray);
    },
    maxVal(){
      this.maxP = Math.max(...this.priceArray);
    },
    openFilter(){
      this.$store.commit('OPEN_FILTER_SLIDER')
    },
    closeFilter(){
      this.$store.commit('CLOSE_FILTER_SLIDER')
    },
    checkScreen(){
    this.windowWidth = window.innerWidth;
    if(this.windowWidth <= 650){
      return this.$store.commit('ON_MOBILE');
    }
    return this.$store.commit('OFF_MOBILE');
  }
  },
  computed: {
    topProducts(){
      return this.allProduct.filter(product => product.topSelling);
    },
    isFilterSliderOpen(){
      return this.$store.state.isFilterSliderOpen;
    }
  },
  watch: {
    showCategory(){
      this.getProducts();
      this.filterByPrice()
    },
    filterBy(){
      this.getProducts();
    },
    minP(){
      this.filterByPrice()
    },
    maxP(){
      this.filterByPrice()
    },
    windowWidth(newVal){
      if(newVal >= 650){
        this.closeFilter();
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.main-wrap {
  .row {
    .cols {
      font-size: 0.75rem;
      text-overflow: ellipsis;
      white-space: nowrap;
      padding-top: 8px;
      padding-bottom: 8px;
      color: #282828;
    }
    .cols {
      .slider {
        width: 100%;
      }
    }
    .cols {
      h2 {
        background-color: #fff;
        font-size: 1.25rem;
        font-weight: 500;
        padding-left: 16px;
        padding-right: 16px;
        height: 0;
        min-height: 48px;
        align-items: center;
        display: flex;
      }
      .row {
        text-align: center;
        padding: 4px 8px;

        .link {
          margin: 8px 4px;
          border-radius: 4px;
          width: calc(16.66667% - 8px);
          padding-left: 0;
          padding-right: 0;

          .image-wrap {
            padding-top: 100%;
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
          .text {
            // text-overflow: ellipsis;
            // white-space: initial;
            // overflow: hidden;
            // margin: 8px;
            color: #282828;
          }
          &:hover {
            transform: scaleY(1.05);
            box-shadow: 0 2px 5px 5px rgba(0, 0, 0, 0.05);
          }
        }
      }
    }
  }
  .row {
    padding-bottom: 16px;
    position: relative;

    .col-side {
      padding-top: 8px;
      padding-bottom: 8px;
      padding-left: 8px;
      padding-right: 8px;
    }
    .col-main {
      .card {
        height: 100%;
        box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.5);
        background-color: #fff;
        border-radius: 4px;

        header {
          .-mh-48px {
            padding-left: 8px;
            padding-right: 8px;
            height: 0;
            min-height: 48px;
            align-items: center;
            display: flex;
            border-bottom: 1px solid #ededed;

            h1 {
              font-size: 1.25rem;
              text-overflow: ellipsis;
              white-space: nowrap;
              font-weight: 500;
              padding-left: 8px;
              padding-right: 6px;
              margin-bottom: 0;
            }
            .-mla {
              margin-left: auto;
              .-mla-s {
                position: relative;

                .tgl {
                  z-index: -1;
                  position: absolute;
                  padding: 0;
                  margin: 0;
                  overflow: visible;
                  border-radius: 0;
                }
                .trig {
                  font-size: 1rem;
                  align-items: center;
                  display: flex;
                  cursor: pointer;
                  user-select: none;
                  padding: 8px;
                  border-radius: 4px;

                  .pfx {
                    font-weight: 500;
                    padding-right: 4px;
                  }
                  i {
                    font-size: 16px;
                    color: #282828;
                    margin-left: 8px;
                  }
                }
                .box {
                  font-weight: 400;
                  transform: translate3d(-50%, 0, 0);
                  left: 50%;
                  width: 100%;
                  min-width: 206px;
                  top: 100%;
                  position: absolute;
                  z-index: 50;

                  .inbox {
                    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.15);
                    overflow: hidden;
                    background-color: #fff;
                    border-radius: 4px;

                    .link {
                      font-size: 0.875rem;
                      font-weight: 500;
                      padding-left: 16px;
                      padding-right: 16px;
                      min-height: 40px;
                      width: 100%;
                      align-items: center;
                      display: flex;
                      color: #282828;
                      cursor: pointer;
                    }
                  }
                }
              }
            }
          }

          .-phs {
            padding-left: 8px;
            padding-right: 8px;
            height: 0;
            min-height: 48px;
            align-items: center;
            justify-content: space-between;
            display: flex;
            border-bottom: 1px solid #ededed;
          }
          .-gy5 {
            padding-left: 8px;
            margin: 0;
            color: #75757a;
          }
          .fs0 {
            // font-size: 0;

            .link {
              padding: 8px;
            }
          }
        }
      }
      .row {
        padding: 4px;

        .not-found {
          color: red;
          display: inline-block;
          margin: auto;
          font-size: 16px;
        }

        .prd {
          width: calc(100% / 3 - 8px);
          font-size: 0.75rem;
          margin: 4px;
          flex-direction: column;
          display: flex;
          border-radius: 4px;
          background-color: #fff;

          .link {
            flex-grow: 1;
            background-color: rgba(0, 0, 0, 0);

            .image-wrap {
              margin-bottom: 4px;
              position: relative;

              img {
                height: auto;
                width: 100%;
                height: 180px;
                object-fit: cover;
              }
            }
            .info {
              padding-left: 8px;
              padding-right: 8px;
              padding-bottom: 8px;

              h3 {
                font-size: 0.75rem;
                line-height: 1.4;
                text-overflow: ellipsis;
                white-space: initial;
                overflow: hidden;
                font-weight: hidden;
                font-weight: 400;
              }
              .prc {
                font-size: 0.875rem;
                text-align: left;
                font-weight: 500;
                padding-top: 4px;
                direction: ltr;
              }
              .d-price {
                align-items: center;
                display: flex;

                .old {
                  text-decoration: line-through;
                  color: #75757a;
                  direction: ltr;
                }
              }
            }
          }
          .action {
            padding: 8px;
            flex-direction: column;

            .btn-wrap {
              position: relative;
              align-items: center;
              justify-content: space-between;
              display: flex;

              .btn {
                pointer-events: all;
                width: 100%;
                visibility: hidden;
                transform: translate3d(0, 0, 0);
                padding-bottom: 12px;
                padding-top: 12px;
                padding-left: 16px;
                padding-right: 16px;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                color: #fff;
                background-color: rgb(35, 184, 35);
                cursor: pointer;
                font-size: 0.875rem;
                line-height: 1rem;
                // text-align: center;
                text-transform: uppercase;
                font-weight: 500;
                border: none;
                border-radius: 6px;

                &:focus {
                  outline: none;
                }
              }
              .btn-show {
                visibility: visible;
              }
            }
          }
          &:hover {
            box-shadow: 0 2px 5px 5px rgba(0, 0, 0, 0.1);
          }
        }
      }
    }
  }
    .row {
      .filter-b {
          background: #282828;
          position: fixed;
          bottom: 0;
          width: 100%;
          height: 50px;
          display: none;
          z-index: 500;
          cursor: pointer;

        .filter-con {
            display: flex !important;
            align-items: center;
            margin: 0 18px;
            height: 100%;

            h2 {
              font-size: 16px;
              font-weight: 500;
              color: #fff;
              margin-right: 8px;
            }
            i {
              font-size: 14px;
              color: #fff;
            }
        }
        @media (max-width: 650px) {
          display: initial;
        }
      }
  }
  .filterSlider-wrap {
    position: relative;
    .filterSlider {
      height: 100%;
      width: 220px;
      position: fixed;
      top: 102px;
      left: 0;
      z-index: 400;
      overflow: scroll;
      scroll-behavior: smooth;
      background: #fff;

      .card {
        border-radius: 0;
        box-shadow: none;
      }

      &::-webkit-scrollbar {
        display: none;
      }
    }
    i {
      color: #282828;
      position: absolute;
      right: 10px;
      z-index: 800;
      font-size: 18px;
      top: 10px;
    }
  }
}

.open-filter-enter-active,
.open-filter-leave-active {
  transition: all 2s ease;
}

.open-filter-enter-from {
  transform: translateX(-200px);
}

.open-filter-enter-to {
  transform: translateX(0);
}
.open-filter-leave-to {
  transform: translateX(-200px);
}








@media (max-width: 800px) {
.main-wrap {
  .row {
    .col-side {
      padding-right: 0;
      padding-left: 4px;
      width: 30%;
      min-width: 30%;
      max-width: 30%;
      flex-basis: 30%;
    }
  }
  .col-main {
    width: 70%;
    min-width: 70%;
      max-width: 70%;
      flex-basis: 70%;
  }
}
}

@media (max-width: 750px) {
.main-wrap {
  .row {
    .col-side {
      padding-right: 0;
      padding-left: 4px;
      width: 30%;
      min-width: 30%;
      max-width: 30%;
      flex-basis: 30%;

      .card {
        .-phm {
          header {
            font-size: .75rem;
            h2 {font-size: .75rem;}
          }
        }
      }
    }
  }
  .col-main {
    width: 70%;
    min-width: 70%;
      max-width: 70%;
      flex-basis: 70%;

      .card {
        header {
          .-mh-48px {
            h1 { font-size: 16px !important;}
          }
        }
        .row {
          .prd {
            width: calc(100%/ 2 - 8px)
          }
        }
      }
  }
}
}

@media (max-width: 650px) {
.main-wrap {
  .row {
    .col-side {
      display: none;
    }
    .col-main {
      width: 100%;
      min-width: 100%;
      max-width: 100%;
      flex-basis: 100%;

      .card {
        .row {
          .prd {
            width: calc(100% / 3 - 8px)
          }
        }
      }
    }
  }
}
}

@media (max-width: 570px) {
.main-wrap {
  .row {
    .col-main {
      .card {
        .row {
          .prd {
            width: calc(100% / 2 - 8px)
          }
        }
      }
  }
  }
}
}
@media (max-width: 750px) {
.main-wrap {
  .row {
    .col-side {
      padding-right: 0;
      padding-left: 4px;
      width: 30%;
      min-width: 30%;
      max-width: 30%;
      flex-basis: 30%;

      .card {
        article {
          padding-bottom: 8px;
          .link {
            padding: 4px 8px;
            font-size: .75rem;
          }
        }
        .-phm {
          header {
            font-size: .75rem;
            h2 {font-size: .75rem;}
          }
        }
      }
    }
  }
  .col-main {
    width: 70%;
    min-width: 70%;
      max-width: 70%;
      flex-basis: 70%;

      .card {
        header {
          .-mh-48px {
            h1 { font-size: 16px !important;}
          }
        }
        .row {
          .prd {
            width: calc(100%/ 2 - 8px)
          }
        }
      }
  }
}
}
@media (max-width: 500px) {
.main-wrap {
  .row {
    .col-side {
      .card {
        .-phm {
          padding-right: 8px;
          padding-left: 8px;
        }
      }
    }
  }
  .col-main {
      .card {
        header {
          .-mh-48px {
            h1 {display: none;}
            .-mla {
              .-mla-s {
                .trig {
                  font-size: 0.8rem;

                  .pfx {
                    font-size: .8rem;
                  }
                }
                .box {
                  min-width: 180px;
                }
              }
            }
          }

        }
        .row {
          .prd {
            width: calc(100% - 8px)
          }
        }
      }
  }
}
}
</style>
