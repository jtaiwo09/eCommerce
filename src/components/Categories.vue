<template>
  <section>
      <div class="container">
          <h2 class="title">Shop Our Top Categories</h2>
          <div class="categories">
              <div class="cards" v-for="(item, i) in items" :key="i">
                  <img :src="require(`@/Images/Categories/${item.image}.jpg`)" alt="">
                  <div class="card-footer">
                      {{item.category}}
                  </div>
                  <div class="overlay">
                      <router-link :to="{name:'Products', params: {id:item.image}}">
                          <div class="text">{{item.label}}</div>
                      </router-link>
                  </div>
              </div>
          </div>
      </div>
  </section>
</template>

<script>
export default {
name: 'Categories',
data(){
    return {
        items: [
            {
                image: 'table', category: 'Tables Furnitures', label: 'Table'
            },
            {
                image: 'beds', category: 'Bedroom Furnitures', label:'Bedroom'
            },
            {
                image: 'kitchen', category: 'Kitchen Furnitures', label: 'Kitchen'
            },
            {
                image: 'living-room', category: 'Living Room', label:'Living Room'
            }
        ]
    }
}
}
</script>

<style lang="scss">
section {
    padding: 70px 20px;
    background: #f1f1f1;
    .container {
        .title {
            text-align: center;
            font-size: 32px;
            margin-bottom: 50px;
        }
        .categories {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            grid-gap: 20px;


            .cards {
                box-shadow: 2px 4px 3px rgba(0,0,0,0.3);
                border-radius: 4px;
                transition: all 0.25s ease;
                overflow: hidden;
                position: relative;

                .card-footer {
                    text-align: center;
                    padding: 10px 0;
                    background-color: rgba(27, 28, 28, 0.8);
                    color: #fff;
                    font-size: 16px;
                    text-transform: uppercase;
                }

                &:hover {
                    box-shadow:4px 8px 5px rgba(0,0,0,0.3);
                    img {
                        transform: scale(1.5, 1.5);
                    }
                    .card-footer {
                        display: none;
                    }
                }

                img {
                    // position: absolute;
                    width: 100%;
                    max-height:auto;
                    object-fit: cover;
                    transform: scale(1, 1);
                    transition: all 0.25s ease;
                }
                .overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(0,0,0);
                    opacity: 0;
                    z-index: 1;
                    transition: all 0.25s ease;
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    .text {
                        background: rgb(27, 28, 28);
                        color: #fff;
                        padding: 4px 20px;
                        border: 2px solid #fff;
                        font-size: 16px;
                        cursor: pointer;
                        text-transform: uppercase;
                    }

                    &:hover {
                        opacity: 0.8;
                    }
                }
            }
        }
    }
}
@media (max-width: 740px) {
    section {
        padding: 30px 0;
        .container{
            padding: 0 25px;
            .title {
                font-size: 25px;
                margin-bottom: 35px;
            }
            .categories {
                grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
                .cards {
                    .card-footer {
                        font-size: 14px;
                    }
                    .overlay {
                        .text {
                           padding: 6px 14px;
                           font-size: 14px; 
                        }
                    }
                }
            }
        }
    }
}
@media (max-width: 590px) {
    section {
        .container{
            padding: 0 20px;
            .title {
                font-size: 23px;
                margin-bottom: 25px;
            }
            .categories {
                // grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
                grid-gap: 10px;
                .cards {
                    .card-footer {
                        font-size: 12px;
                    }
                }
            }
        }
    }
}
@media (max-width: 500px) {
    section {
        .container{
            .categories {
                // grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
                .cards {
                    .overlay {
                        .text {
                           padding: 4px 12px;
                           font-size: 10px; 
                        }
                    }
                }
            }
        }
    }
}
</style>