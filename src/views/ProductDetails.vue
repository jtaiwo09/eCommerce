<template>
  <main class="main-wrap">
      <div class="row" v-for="(item, i) in getProductDetails" :key="i">
        <div class="brcb">
          <router-link class="link" :to="{name:'Home'}">Home > </router-link>
          <router-link class="link" :to="{name: 'Category', params:{slug: item.name}}">Category > </router-link>
          <router-link class="link" to="#">Product Details</router-link>
        </div>
        <section class="col-main">
            <div class="row">
              <div class="col-6">
                <div class="col-wrap">
                  <div class="sldr">
                    <router-link class="itm" to="#">
                      <img :src="item.image" alt="">
                    </router-link>
                  </div>
                  <div class="img-scrl">
                    <div class="scrl-wrap">
                      <div class="itm">
                        <div class="item-sel">
                          <img :src="require('../Images/Carousel/carousel-2.jpg')" alt="">
                        </div>
                      </div>
                      <div class="itm">
                        <div class="item-sel">
                          <img :src="require('../Images/Carousel/carousel-3.jpg')" alt="">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-10">
                <div class="hd-prc">
                  <div class="header">
                    <div class="text">
                      <h1>{{item.name}}</h1>
                    </div>
                  </div>
                  <div class="-phs">
                    <div class="price-con">
                      <div class="price-wrap">
                        <span class="-b">₦{{item.price}}</span>
                        <div class="-df">
                          <span class="-tal">#82,000</span>
                          <span class="tag-disc">-{{item.discount}}%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="btn-wrap">
                    <div class="btn-con" @click="addToCart(item)">
                      <div class="btn">
                        <i class="fas fa-cart-plus"></i>
                        <span class="text">Add to cart</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="wish-list">
                  <i class="far fa-heart" v-if="!addWishList"></i>
                  <i class="fas fa-heart" v-if="addWishList"></i>
                </div>
              </div>
            </div>
            <div class="card">
            <header>
              <h2>
                Product Details
              </h2>
            </header>
            <div class="product-con">
              {{item.description}}
            </div>
          </div>
          </section>
          <Products :productImages="getRelatedProducts" title="You may also like" />
      </div>
  </main>
</template>

<script>
import Products from '../component/Products';
export default {
props: ['slug'],
components: { Products },
data(){
  return {
    
  }
},
  computed: {
    getProductDetails(){
      return this.$store.state.products.filter(product => product.name == this.slug);
    },
    getRelatedProducts(){
      return this.$store.state.products;
    }
  },
  methods: {
    addToCart(value){
      this.$store.commit("ADD_TO_CART", value);
    }
  }
}
</script>

<style lang="scss" scoped>
main {
  padding-bottom: 8px;
  padding-top: 8px;
  flex-grow: 1;

  .row {
    .brcb {
      padding: 8px 16px;
      width: 100%;
      max-width: 100%;
      min-width: 100%;
      flex-basis: 100%;
      font-size: 0.75rem;
    }
    .col-main {
      flex-direction: column;
      display: flex;
      padding: 0;
      padding-left: 8px;
      padding-right: 8px;
      flex-basis: 100%;
      max-width: 100%;
      min-width: 100%;
      width: 100%;

      .row {
        box-shadow: 0 2px 5px rgba(0,0,0,0.5);
        background: #fff;
        border-radius: 4px;
        padding: 8px;
        @media (max-width: 550px) {
          flex-direction: column;
        }

        .col-6{
          flex-basis: auto;
          padding: 4px 8px;
          max-width: 37.5%;
          min-width: 37.5%;
          width: 37.5%;
          @media (max-width: 550px) {
            max-width: 100%;
            min-width: 100%;
            width: 100%;
          }

          .col-wrap {
            padding-bottom: 8px;
            padding-top: 4px;
            min-width: 100px;

            .sldr {
              margin-bottom: 8px;
              overflow: hidden;
              border-radius: 4px;
              padding-top: 70%;
              user-select: none;
              position: relative;
              justify-content: center;
              display: flex;

              .itm {
                cursor: zoom-in;
                transition: all .5s;
                height: auto;
                width: 100%;
                position: absolute;
                top: 0;
                left: 0;
                display: flex;
                // opacity: 0;

                img {
                  height: 100%;
                  width: 100%;
                  border-style: none;
                }
              }
            }
            .img-scrl {
              margin-bottom: 8px;
              display: flex;
              position: relative;
              overflow: hidden;

              .scrl-wrap {
                scroll-behavior: smooth;
                scroll-snap-type: x mandatory;
                display: flex;
                overflow-x: scroll;

                &::-webkit-scrollbar {
                  display: none;
                }

                .itm {
                  width: 44px;
                  padding-left: 0;
                  height: 40px;
                  padding-right: 4px;
                  scroll-snap-align: start;
                  flex-shrink: 0;
                  display: flex;

                  .item-sel {
                    border: 1px solid rgb(135, 206, 235);
                    cursor: pointer;
                    width: 100%;
                    outline: 0;
                    border-radius: 2px;
                    overflow: hidden;

                    img {
                      height: 100%;
                      width: auto;
                      border-radius: 2px;
                      border-style: none;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    .col-10 {
      flex-basis: auto;
      padding-left: 0;
      padding-right: 0;
      width: 62.5%;
      max-width: 62.5%;
      min-width: 62.5%;
      display: flex;
      align-items: center;
      @media (max-width: 550px) {
        max-width: 100%;
        min-width: 100%;
        width: 100%;
      }

      .hd-prc {
        display: flex;
        flex-direction: column;
        .header {
          justify-content: space-between;


          .text {
            font-size:0;
            padding-left: 8px;
            padding-right: 24px;

            h1 {
              font-size: 1.25rem;
              padding-top: 8px;
              font-weight: 400;
              margin: 0;
              @media (max-width: 750px) {
                font-size: 1rem;
              }
              @media (max-width: 550px) {
                font-size: .875rem;
              }
              @media (max-width: 400px) {
                font-size: .75rem;
              }
            }
          }
        }
        .-phs {
          padding-left: 8px;
          padding-right: 8px;

          .price-con{
            margin-top: 4px;
            padding-bottom: 8px;
            padding-top: 8px;
            position: relative;

            .price-wrap {
              .-b {
                  font-size: 1.5rem;
                  text-align: left;
                  font-weight: 700;
                  direction: ltr;
                  @media (max-width: 650px) {
                    font-size: 1.1rem;
                  }
                  @media (max-width: 500px) {
                    font-size: 0.875rem;
                  }
                }
                .-df{
                  align-items: center;
                  display: flex;

                  .-tal {
                    font-size: 1rem;
                    text-decoration: line-through;
                    text-align: left;
                    color: #75757a;
                    @media (max-width: 500px) {
                      font-size: .75rem;
                    }
                  }
                }
            }
          }
        }
        .btn-wrap {
        padding: 8px 4px;
        max-width: 400px;

        .btn-con {
          display:flex;
          align-items: center;
          justify-content: space-between;

          .btn {
              display:flex;
              align-items: center;
              overflow: hidden;
              color:#fff;
              background: rgb(35, 184, 35);
              cursor: pointer;
              line-height: 1rem;
              text-align: center;
              text-transform: uppercase;
              font-weight:500;
              padding: 12px;
              border-radius: 4px;
              position: relative;
              width: 100%;
              @media (max-width: 750px) {
                padding: 8px;
              }

              i {
                flex-shrink: 0;
                font-size: 18px;
                @media (max-width: 400px) {
                  font-size: 14px;
                }
              }
              .text {
                padding-right: 24px;
                margin: auto;
                font-weight: 0.875rem;
                line-height: 1rem;
                flex: 1;
                @media (max-width: 400px) {
                  font-size: 0.75rem;
                  padding-right: 0;
                }
              }
            }
          }
        }
      }
      .wish-list {
        margin: 8px;
        align-self: flex-start;
        padding: 6px;
        align-items: center;
        display: flex;
        border-radius: 99px;
        cursor: pointer;
        text-align: center;
        margin-left: auto;

        i {
          color: tomato;
          font-size: 20px;
          @media (max-width: 450px) {
            font-size: 14px;
          }
        }

        &:hover {
          background: rgb(236, 203, 197);
        }
      }
    
    }
    .card {
      margin-top: 16px;
      box-shadow: 0 2px 5px 0 rgba(0,0,0,0.5);
      background-color: #fff;
      border-radius: 4px;

      header {
        padding: 8px 0;
        border-bottom: 1px solid #ededed;
        @media (max-width: 650px) {
          padding: 0;
        }

        h2 {
          padding: 4px 16px;
          margin-bottom: 0;
          @media (max-width: 650px) {
            font-size: 16px
          }
          @media (max-width: 500px) {
            font-size: 14px
          }
        }
      }
      .product-con {
        padding: 24px 16px;
      }
    }
  }
}
@media (max-width: 750px) {
  //
}
</style>