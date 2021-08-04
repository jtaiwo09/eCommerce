<template>
  <main class="main-wrap">
    <div class="row">
      <div class="cols">
        <router-link class="cbs" to="#">Home</router-link> >
        <router-link class="cbs" to="#">Living room</router-link>
      </div>
      <div class="cols">
        <Carousel :items="items" />
      </div>
      <Products :productImages="productImages" title="Top Selling items" />
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
        <div class="card">
          <article>
            <h2>Category</h2>
            <router-link class="link" to="#">Sofas</router-link>
            <router-link class="link" to="#">Console Table</router-link>
            <router-link class="link" to="#">Sectional</router-link>
            <router-link class="link" to="#">Tv Stand</router-link>
            <router-link class="link" to="#">Coffee Table</router-link>
          </article>
          <section class="-phm">
            <header>
              <h2>Price (₦)</h2>
              <div class="btn">Apply</div>
            </header>
            <div class="pfs-w">
              <a-slider
                range
                v-model="inputValue1"
                :min="1"
                :max="1000000"
                @change="onChange"
              />
            </div>
            <div class="pfi-w">
              <div class="pi-w">
                <input
                  type="number"
                  min="0"
                  placeholder="Min"
                  v-model="min"
                  class="pi"
                />
              </div>
              <span class="-phs">-</span>
              <div class="pi-w">
                <input
                  type="number"
                  min="1000000"
                  placeholder="Max"
                  v-model="max"
                  class="pi"
                />
              </div>
            </div>
          </section>
          <section class="-phm">
            <header>
              <h2>Size</h2>
            </header>
            <div class="size">
              <input type="number" placeholder="Height" />
              <input type="number" placeholder="Width" />
              <input type="number" placeholder="Length" />
            </div>
          </section>
        </div>
      </div>
      <div class="col-main">
        <section class="card">
          <header>
            <div class="-mh-48px">
              <h1>Sofas</h1>
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
                No of product found
              </p>
              <div class="fs0">
                <router-link class="link" to="#">
                  Arrange
                </router-link>
              </div>
            </div>
          </header>
          <div class="row">
            <article
              class="prd"
              v-for="(item, i) in items"
              :key="i"
              @mouseenter="currentItem = i"
              @mouseleave="currentItem = null"
            >
              <router-link
                class="link"
                :to="{ name: 'ProductDetails', params: { slug: `${i}` } }"
              >
                <div class="image-wrap">
                  <img
                    :src="require(`../Images/Carousel/${item}.jpg`)"
                    alt=""
                  />
                </div>
                <div class="info">
                  <h3 class="name">Name</h3>
                  <div class="prc">#74,000</div>
                  <div class="d-price">
                    <div class="old">#85,000</div>
                    <div class="tag-disc">
                      -20%
                    </div>
                  </div>
                </div>
              </router-link>
              <footer class="action">
                <div class="btn-wrap">
                  <button
                    class="btn"
                    :class="currentItem == i || checkScreen ? 'btn-show' : null"
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
  </main>
</template>

<script>
import Carousel from "../component/Carousel";
import Products from "../component/Products";
export default {
  components: { Carousel, Products },
  data() {
    return {
      filterBy: "Newest Arrivals",
      currentItem: null,
      isFilterOpen: false,
      items: [
        "carousel-1",
        "carousel-3",
        "carousel-5",
        "carousel-1",
        "carousel-3",
        "carousel-5",
        "carousel-1",
        "carousel-3",
        "carousel-5",
        "carousel-1",
        "carousel-3",
        "carousel-5",
        "carousel-1",
        "carousel-3",
        "carousel-5",
      ],
      productImages: [
        { image: "table", discount: "-25", price: "₦25,000", name: "Table" },
        { image: "double", discount: "-12", price: "₦36,000", name: "Chair" },
        {
          image: "console",
          discount: "-15",
          price: "₦30,000",
          name: "Console",
        },
        {
          image: "wardrobe",
          discount: "-8",
          price: "₦75,000",
          name: "Wardrobe",
        },
        { image: "table", discount: "-25", price: "₦25,000", name: "Table" },
        { image: "double", discount: "-12", price: "₦36,000", name: "Chair" },
        {
          image: "console",
          discount: "-15",
          price: "₦30,000",
          name: "Console",
        },
        {
          image: "wardrobe",
          discount: "-8",
          price: "₦75,000",
          name: "Wardrobe",
        },
        { image: "table", discount: "-25", price: "₦25,000", name: "Table" },
        { image: "double", discount: "-12", price: "₦36,000", name: "Chair" },
        {
          image: "console",
          discount: "-15",
          price: "₦30,000",
          name: "Console",
        },
        {
          image: "wardrobe",
          discount: "-8",
          price: "₦75,000",
          name: "Wardrobe",
        },
      ],
    };
  },
  computed: {
      checkScreen(){
          return true;
      }
  }
};
</script>
<style lang="scss" scoped>
.main-wrap {
  margin-top: 15px;
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

      .card {
        // height: 100%;
        box-shadow: 0 2px 5px 0 rgb(0, 0, 0, 0.5);
        background-color: #fff;
        border-radius: 4px;

        article {
          border-bottom: 1px solid #ededed;
          h2 {
            font-size: 0.875rem;
            text-transform: uppercase;
            font-weight: 500;
            padding: 8px 16px;
          }
          .link {
            padding: 8px 32px;
            color: #282828;
            display: block;

            &:hover {
              background-color: #ededed;
            }
          }
        }
        .-phm {
          padding-left: 16px;
          padding-right: 16px;
          padding-bottom: 8px;
          border-top: 1px solid #ededed;

          header {
            align-items: center;
            justify-content: space-between;
            display: flex;

            h2 {
              padding-top: 8px;
              font-size: 0.875rem;
              text-transform: uppercase;
            }
            .btn {
              flex-shrink: 0;
              padding: 0;
              position: relative;
              cursor: pointer;
              line-height: 1rem;
              text-align: center;
              text-transform: uppercase;
              font-weight: 500;
              color: rgb(135, 206, 235);
              outline: none;
              border: none;
              border-radius: 4px;
              overflow: visible;
            }
          }
          .pfs-w {
            margin-bottom: 16px;
            width: 100%;
            height: 25px;
          }
          .pfi-w {
            width: 100%;
            align-items: center;
            display: flex;

            .pi-w {
              padding: 8px;
              height: 32px;
              width: 100%;
              align-items: center;
              display: flex;
              border: 1px solid #ededed;
              border-radius: 4px;

              .pi {
                font-size: 0.875rem;
                min-width: 0;
                height: 32px;
                width: 100%;
                color: #282828;
                border: none;
                overflow: visible;

                &:focus {
                  outline: none;
                }
              }
            }
            .-phs {
              font-size: 1rem;
              padding-left: 8px;
              padding-right: 8px;
            }
            .pi-w {
              padding: 8px;
              height: 32px;
              width: 100%;
              align-items: center;
              display: flex;
              border: 1px solid #ededed;
              border-radius: 4px;

              .pi {
                font-size: 0.875rem;
                min-width: 0;
                height: 32px;
                width: 100%;
                box-shadow: none;
                color: #282828;
                outline: none;
                overflow: visible;
              }
            }
          }
        }
        section {
          .size {
            display: flex;
            flex-direction: column;
            align-items: center;
            input {
              border: none;
              border-radius: 4px;
              margin-bottom: 4px;
              border: 1px solid #949090;
              padding: 4px;

              &:focus {
                outline: none;
              }
            }
          }
        }
      }
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
              overflow: hidden;
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
            padding-right: 8px;
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

        .prd {
          order: 0;
          width: calc(100% / 3 - 8px);
          font-size: 0.75rem;
          margin: 4px;
          padding-left: 0;
          padding-right: 0;
          padding-bottom: 0;
          flex-direction: column;
          display: flex;
          overflow: hidden;
          border-radius: 4px;
          position: relative;
          background-color: #fff;

          .link {
            min-height: 1px;
            flex-grow: 1;
            background-color: rgba(0, 0, 0, 0);

            .image-wrap {
              margin-bottom: 4px;
              position: relative;

              img {
                height: auto;
                width: 100%;
                display: block;
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
                .tag-disc {
                  font-size: 0.75rem;
                  text-decoration: none;
                  padding-right: 2px;
                  padding-left: 2px;
                  margin-left: 8px;
                  height: 18px;
                  min-width: 32px;
                  direction: ltr;
                  color: rgb(135, 206, 235);
                  background-color: #feefde;
                  line-height: 1.2;
                  font-weight: 500;
                  justify-content: center;
                  display: inline-flex;
                  border-radius: 2px;
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
                // position: relative;
                // overflow: hidden;
                color: #fff;
                background-color: rgb(70, 68, 192);
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
}
</style>
