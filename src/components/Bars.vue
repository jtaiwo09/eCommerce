<template>
  <div class="top">
      <nav class="primary-menu">
          <ul class="link-list">
              <li class="has-submenu">
                  <div class="menu-link" @click="showCategories">
                      <span class="text">Shop</span>
                      <i class="fas fa-angle-down"></i>
                  </div>
                  <ul class="submenu" v-if="showList">
                      <div class="submenu-holder">
                          <li class="mega-link" v-for="(item, i) in items" :key="i">
                              <router-link to="#">{{item}}</router-link>
                          </li>
                      </div>
                  </ul>
              </li>
              <li>
                  <router-link to="#">Inspiration</router-link>
              </li>
              <li>
                  <router-link to="#">Login</router-link>
              </li>
          </ul>
      </nav>
      <div class="media">
          <router-link to="#">
              <i class="fab fa-facebook-square"></i>
          </router-link>
          <router-link to="#">
              <i class="fab fa-youtube"></i>
          </router-link>
          <router-link to="#">
              <i class="fab fa-instagram"></i>
          </router-link>
          <router-link to="#">
              <i class="far fa-envelope"></i>
          </router-link>
      </div>
  </div>
</template>

<script>
export default {
name: 'bars',
data(){
    return {
        items: ['Occasional Chairs', 'Tables', 'Sofas', 'Coffee Tables', 'Bed and Beddings', 'Barstools', 'Consoles', 'Wardrobes & Storage', 'Kitchen'],
        showList: false
    }
},
methods: {
    showCategories(){
        this.showList = !this.showList
    }
}
}
</script>

<style lang="scss" scoped>
.top {
    padding: 25px 0px 50px 50px;
    position: relative;

    nav {
        display: block;
        li {
            margin-bottom: 12px;
        }

        .link-list {
            list-style: none;

            a {
                font-weight: 400;
                color: rgb(27, 28, 28);
                font-size: 16px;
            }

            .has-submenu {
                position: relative;

                .menu-link {
                    display: flex;
                    align-items: center;
                    cursor: pointer;

                    .text {
                        font-weight: 400;
                        color: rgb(27, 28, 28);
                        font-size: 16px;
                        margin-right: 10px;
                    }
                    i {
                        width: 12px;
                    }
                }
                .submenu {
                    padding: 15px 15px 5px 15px;
                    list-style: none;

                    .mega-link {
                        margin-bottom: 10px;
                        color: rgb(27, 28, 28);
                        opacity: 0.62;
                        transition: all .25s ease;
                        transform: translateX(0);
                        font-size: .875rem;

                        &:hover {
                                opacity: 1;
                                transform: translateX(10px);
                            }
                    }
                }
            }
        }
    }
    .media {
        display: flex;
        i {
            margin-right: 25px;
            font-size: 26px;
            color: rgb(27, 28, 28);
            opacity: 0.62;
            transition: color .25s ease;
            
            &:hover {
                opacity: 1;
            }
        }
    }
}
</style>