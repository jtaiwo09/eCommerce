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
                      <span>{{item.text}}</span>
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
                text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores iste dolore quaerat nostrum, recusandae modi sequi aut est unde odit? ', link:'#', icon:'question', label:'FAQs'
            },
            {
                text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores iste dolore quaerat nostrum, recusandae modi sequi aut est unde odit? ', link:'#', icon:'truck', label:'Delivery'
            },
            {
                text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores iste dolore quaerat nostrum, recusandae modi sequi aut est unde odit? ', link:'#', icon:'card', label:'Payment Options'
            },
            {
                text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores iste dolore quaerat nostrum, recusandae modi sequi aut est unde odit? ', link:'#', icon:'truck', label:'Delivery'
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
</style>