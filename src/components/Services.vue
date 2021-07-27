<template>
  <section>
      <div class="container">
          <div class="services">
              <h2 class="title">Services to help you shop</h2>
              <div class="cards">
                  <div class="card" v-for="(item, i) in items" :key="i">
                  <img :src="require(`@/Images/Icons/${item.icon}.svg`)" alt="">
                  <h3>{{item.label}}</h3>
                  <div class="text">
                      <p>{{item.text}}</p>
                      <router-link :to="item.link">Learn More</router-link>
                  </div>
              </div>
              </div>
          </div>
      </div>
  </section>
</template>

<script>
export default {
name: 'Services',
data(){
    return {
        items: [
            {
                text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores iste dolore quaerat nostrum ', link:'#', icon:'question', label:'FAQs'
            },
            {
                text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores iste dolore quaerat nostrum ', link:'#', icon:'truck', label:'Delivery'
            },
            {
                text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores iste dolore quaerat nostrum ', link:'#', icon:'card', label:'Payment Options'
            },
        ]
    }
}
}
</script>

<style lang="scss" scoped>
section {
    background: #fff;
    .container {
        .services {
            display: flex;
            flex-direction: column;

            .title {
                text-align: center;
                font-size: 32px;
                margin-bottom: 50px;
                color: rgba(27, 28, 28);
            }

            .cards {
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                align-items: center;
                gap: 10px;

                .card {
                    width: 250px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    background-color: #f5f5f5;
                    padding: 25px 15px;
                    box-shadow: 2px 4px 5px rgba(0,0,0,0.3);
                    color: rgba(27, 28, 28);
                    img {
                        width: 27px;
                        height: 27px;
                        margin-bottom: 10px;
                    }
                    .text {
                        text-align: center;
                        
                        a {
                            text-decoration: underline;
                            color: rgba(27, 28, 28);
                        }
                    }
                }
            }
        }
    }
}
@media (max-width: 873px) {
    section{
        padding: 30px 0;
        .container{
            padding: 0 25px;
        }
    }
}
@media (max-width: 740px) {
    section{
        padding: 30px 0;
        .container{
            padding: 0 25px;
            .services {
                .title {
                    font-size: 25px;
                    margin-bottom: 35px;
                }
            }
        }
    }
}
@media (max-width: 590px) {
    ection{
        padding: 30px 0;
        .container{
            padding: 0 15px;
            .services {
                .title {
                    font-size: 23px;
                    margin-bottom: 25px;
                }
            }
        }
    }
}
</style>