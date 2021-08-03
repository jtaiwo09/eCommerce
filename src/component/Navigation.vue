<template>
  <header class="header">
      <section class="wrapper">
          <div class="row">
              <div class="left">
                  <div class="account">
                      <input type="checkbox" class="tgl">
                      <!-- <label class='trig'>
                          <span class="bars" @click="openMenuCategory">
                              <i class="fas fa-bars"></i>
                          </span>
                      </label> -->
                      <!-- <div class="box" v-if="isMenuCategory">
                          <div class="inbox">
                              <div class="flyout">
                                  <router-link class="itm" to="#">
                                      <img src="" alt="">
                                      <span class="text">Supermarket</span>
                                  </router-link>
                              </div>
                          </div>
                      </div> -->
                  </div>
                  <router-link to="#">
                      <h3>Logo</h3>
                  </router-link>
              </div>
              <form class="center">
                  <div class="find">
                      <i class="fas fa-search"></i>
                      <input type="text" placeholder="Saerch products, brands and categories" autocomplete="off" required v-model="search">
                  </div>
                  <button class="btn">Search</button>
              </form>
              <div class="right">
                  <div class="account" :class='isOpen ? "account-bg": null' @click="showMenu">
                      <input type="checkbox" class="tgl">
                      <label class="trig">
                          <span class="act">
                              <i class="fas fa-user"></i>
                          </span>
                           Account
                          <i class="fas fa-angle-up" v-if="isOpen"></i>
                          <i class="fas fa-angle-down" v-if="!isOpen"></i>
                      </label>
                      <div class="box" v-if="isOpen">
                          <div class="inbox">
                              <div class="sign-in-btn">
                                  <router-link to='#' class="btn">Sign In</router-link>
                              </div>
                              <router-link class="link -df" to='#'>
                                  <i class="fas fa-user"></i>
                                  My Account
                              </router-link>
                              <router-link class="link" to='#'>
                                  <i class="fas fa-box"></i>
                                  Orders
                              </router-link>
                              <router-link class="link" to='#'>
                                  <i class="far fa-heart"></i>
                                  Saved Items
                              </router-link>
                          </div>
                      </div>
                  </div>
                  <div class="account" :class='isHelpOpen ? "account-bg": null' @click="showHelpMenu">
                      <input type="checkbox" class="tgl">
                      <label class="trig">
                          <span class="act">
                              <i class="far fa-question-circle"></i>
                          </span>
                          Help
                          <i class="fas fa-angle-up" v-if="isHelpOpen"></i>
                          <i class="fas fa-angle-down" v-if="!isHelpOpen"></i>
                      </label>
                      <div class="box" v-if="isHelpOpen">
                          <div class="inbox">
                              <router-link class="link" to="#">Help Center</router-link>
                              <router-link class="link" to="#">Place and track order</router-link>
                              <router-link class="link" to="#">Order Cancellation</router-link>
                              <router-link class="link" to="#">Returns and Refunds</router-link>
                          </div>
                      </div>
                  </div>
                  <router-link to="#" class="link">
                      <span class="act">
                          <i class="fas fa-shopping-cart"></i>
                      </span>
                      cart
                  </router-link>
              </div>
          </div>
      </section>
  </header>
</template>

<script>
export default {
nmae: 'Navigation',
data(){
    return {
        isOpen: false,
        isHelpOpen: false,
        search: '',
        isMenuCategory: false,
    }
},
methods: {
    showMenu(){
        this.isHelpOpen = false;
        this.isOpen = !this.isOpen;
    },
    showHelpMenu(){
        this.isOpen = false;
        this.isHelpOpen = !this.isHelpOpen;
    },
    openMenuCategory(){
        this.isMenuCategory = !this.isMenuCategory;
    }
}
}
</script>

<style lang="scss">
.header {
    z-index: 70;
    height: 72px;
    .wrapper {
        padding-bottom: 16px;
        padding-top: 16px;
        box-shadow: 0 4px 4px -4px rgba(0,0,0,0.12);
        background-color: #fff;
        display: block;

        .row {
            .left {
                display: flex;
                align-items: center;
                flex-basis: 18.75%;
                max-width: 18.75%;
                min-width: 18.75%;
                width: 18.75%;
                padding-right: 8px;

                .account {
                    // margin-right: auto;
                    padding-right: 8px;
                    align-items: center;
                    display: flex;
                    position: relative;

                    .tgl {
                        z-index: -1;
                        position: absolute;
                        opacity: 0;
                        padding: 0;
                        margin: 0;
                        overflow: visible;
                        border-radius: 0;
                    }
                    .trig {
                        padding: 0;
                        display: flex;
                        color: rgb(135, 206, 235);
                        user-select: none;
                        border-radius: 4px;

                        .bars {
                            flex-shrink: 0;
                            cursor: pointer;

                            i {
                                font: 24px;
                                color: #282828;
                            }
                        }
                    }
                    .box {
                        display: block;
                        z-index: 10;
                        width: auto;
                        top: calc(100% + 16px);
                        left: 0;
                        min-width: 206px;
                        position: absolute;
                        
                        .inbox {
                            box-shadow: 0 0 10px 0 rgba(0,0,0, 0.15);
                            overflow: hidden;
                            background-color: #fff;
                            border-radius: 4px;

                            
                        }
                    }
                }
            }
            .center {
                display: flex;
                padding-left: 8px;
                padding-right: 8px;
                max-width: 100%;
                flex-grow: 1;

                .find{
                    display: flex;
                    width: 100%;
                    position: relative;
                    align-items: center;
                    border: 1px solid #c7c7cd;
                    border-radius: 4px;
                    
                    i {
                        margin-left: 8px;
                        margin-right: 8px;
                        flex-shrink: 0;
                        color: #75757a;
                    }
                    input {
                        font-size: 1rem;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        margin-right: 8px;
                        height: 100%;
                        box-shadow: none;
                        flex-grow: 1;
                        overflow: hidden;
                        border: 0;
                        margin: 0;
                        border-radius: 0;

                        &:focus {
                            outline: none;
                        }
                    }
                }
                .btn {
                    margin-left: 8px;
                    flex-shrink: 0;
                    transform: translate3d(0, 0, 0);
                    padding: 12px 16px;
                    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
                    position: relative;
                    overflow: hidden;
                    color: #fff;
                    background-color: rgb(135, 206, 235);
                    cursor: pointer;
                    font-size: .875rem;
                    line-height: 1rem;
                    text-align: center;
                    text-transform: uppercase;
                    font-weight: 500;
                    outline: 0;
                    border: 0;
                    border-radius: 4px;
                    -webkit-appearance: button;
                    margin: 0;
                }
            }
            .right {
                padding-left: 0;
                padding-right: 0;
                align-items: center;
                display: flex;
                justify-content: space-between;
                font-weight: 500;
                flex: 0 1 auto;

                .account {
                    position: relative;
                    .tgl {
                        z-index: -1;
                        position: absolute;
                        opacity: 0;
                        padding: 0;
                        margin: 0;
                        overflow: visible;
                        border-radius: 0;
                    }
                    .trig {
                        font-size: 1rem;
                        align-items: center;
                        display: flex;
                        color: #282828;
                        cursor: pointer;
                        user-select: none;
                        padding: 8px;

                        .act {
                            margin-right: 8px;
                            flex-shrink: 0;
                            font-size: 1rem;
                            color: #282828;
                            font-weight: 500;

                            i {
                                color: #282828;
                                font-size: 24px;
                            }

                        }
                        i {
                            margin-left: 8px;
                            flex-shrink: 0;
                            color: #282828;
                            font-size: 18px;
                        }
                        &:hover {
                            color: rgb(135, 206, 235);
                            i {
                                color: rgb(135, 206, 235)
                            }
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

                        .inbox {
                            box-shadow: 0 0 10px 0 rgba(0,0,0,0.15);
                            overflow: hidden;
                            background-color: #fff;
                            border-radius: 4px;

                            .sign-in-btn {
                                padding: 12px 16px;
                                border-bottom: 2px solid #ededed;

                                .btn {
                                    width: 100%;
                                    transform: translate3d(0,0,0);
                                    padding: 12px 16px;
                                    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                                    position: relative;
                                    overflow: hidden;
                                    color: #fff;
                                    background-color: rgb(135, 206, 235);
                                    cursor: pointer;
                                    line-height: 1rem;
                                    text-align: center;
                                    text-transform: uppercase;
                                    font-weight: 500;
                                    border: 0;
                                    border-radius: 4px;
                                    text-decoration: none;
                                    display: inline-block;
                                    font-size: .875rem;
                                }
                            }
                            .link {
                                padding: 8px;
                                align-items: center;
                                display: flex;
                                color: inherit;
                                text-decoration: none;
                                background-color: rgba(0,0,0,0);
                                font-weight: 400;

                                i {
                                    margin-right: 16px;
                                    flex-shrink: 0;
                                    color: #282828;
                                    font-size: 24px;
                                }
                            }
                        }
                    }
                }
                .link {
                    color: #282828;
                }
                .account-bg {
                    background-color: #ededed;
                }
            }
        }
    }
}
</style>