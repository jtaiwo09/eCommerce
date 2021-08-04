<template>
  <main>
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
                <div class="header">
                  <div class="text">
                    <h1>{{item.name}}</h1>
                  </div>
                  <div class="wish-list">
                    <i class="far fa-heart" v-if="!addWishList"></i>
                    <i class="fas fa-heart" v-if="addWishList"></i>
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
                  <div class="btn-con">
                    <div class="btn">
                      <i class="fas fa-cart-plus"></i>
                      <span class="text">Add to cart</span>
                    </div>
                  </div>
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
          <div class="col-side">
            <div class="card">
              <h2>Delivery & Returns</h2>
              <div class="card-con">
                <article>
                  <h3>Choose your Location</h3>
                  <div class="input-con">
                    <div class="input-wrap">
                      <select>
                        <option disabled>Please Select</option>
                      </select>
                    </div>
                    <div class="input-wrap">
                      <select>
                        <option disabled>Please Select</option>
                      </select>
                    </div>
                  </div>
                </article>
                <article class="return">
                  <i class="fas fa-undo-alt"></i>
                  <div class="d-info-text-con">
                    <h4>Return Policy</h4>
                    <div class="d-info-text">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima ea necessitatibus error eaque at neque deserunt officia, fuga recusandae deleniti.
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
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

      .row {
        box-shadow: 0 2px 5px rgba(0,0,0,0.5);
        background: #fff;
        border-radius: 4px;
        padding: 8px;

        .col-6{
          flex-basis: auto;
          padding: 4px 8px;
          max-width: 37.5%;
          min-width: 37.5%;
          width: 37.5%;

          .col-wrap {
            padding-bottom: 8px;
            padding-top: 4px;

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

      .header {
        justify-content: space-between;
        display: flex;

        .text {
          font-size:0;
          padding-left: 8px;
          padding-right: 24px;

          h1 {
            font-size: 1.25rem;
            padding-top: 8px;
            font-weight: 400;
            margin: 0;
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

          i {
            color: tomato;
            font-size: 20px;;
          }

          &:hover {
            background: rgb(236, 203, 197);
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
              }
              .-df{
                align-items: center;
                display: flex;

                .-tal {
                  font-size: 1rem;
                  text-decoration: line-through;
                  text-align: left;
                  color: #75757a;
                }
              }
          }
        }
      }
      .btn-wrap {
        padding: 8px 4px;

        .btn-con {
          display:flex;
          align-items: center;
          justify-content: space-between;

          .btn {
            display:flex;
            align-items: center;
            overflow: hidden;
            color:#fff;
            background: rgb(135, 206, 235);
            cursor: pointer;
            line-height: 1rem;
            text-align: center;
            text-transform: uppercase;
            font-weight:500;
            padding: 16px;
            border-radius: 4px;
            position: relative;
            width: 100%;

            i {
              flex-shrink: 0;
              font-size: 18px;
            }
            .text {
              padding-right: 24px;
              margin: auto;
              font-weight: 0.875rem;
              line-height: 1rem;
              flex: 1;
            }
          }
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

        h2 {
          padding: 4px 16px;
        }
      }
      .product-con {
        padding: 24px 16px;
      }
    }
    .col-side {
      .card {
        margin-top: 0;
        h2 {
          font-size: .875rem;
          text-transform: uppercase;
          font-weight: 500;
          padding: 8px;
          margin: 0;
          border-bottom: 1px solid #ededed;
        }
        article{
          padding: 4px 0;
          
          h3 {
            font-size: 1rem;
            font-weight: 500;
            padding: 4px 8px 0 8px;
          }
          .input-con {
            padding:8px;
            width: 100%;

            .input-wrap {
              padding: 8px 0;

              select {
                font-size: .875rem;
                padding-left: 16px;
                height: 40px;
                border: 1px solid #c7c7cd;
                border-radius: 4px;
                width: 100%;

                option {
                  color: #c7c7cd;
                }
              }
            }
          }
        }
        .return {
          padding: 4px 8px;
          display:flex;

          i {
            margin-right: 8px;
            padding: 5px;
            align-self: baseline;
            border: 1px solid #ededed;
            border-radius: 4px;
            color: #282828;
            font-size: 20px;
          }
          .d-info-text-con {
            display: flex;
            flex-direction: column;

            h4 {
              font-weight: 500;
              font-size: .875rem;
              width: 100%;
              margin: 0;
              padding: 0;
            }
            .d-info-text {
              margin-top: 4px;
              margin: 0;
              padding: 0;
              font-size: 0.75rem;
            }
          }
        }
      }
    }
  }
}
</style>