<template>
  <section>
      <div class="container">
          <h2 class="title">Shop Our Top Categories</h2>
          <div class="categories">
              <div class="cards" v-for="(item, i) in items" :key="i">
                  <img :src="require(`@/Images/Categories/${item}.jpg`)" alt="">
                  <div class="overlay">
                      <div class="text">{{item}}</div>
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
        items: ['bed', 'single', 'double', 'bed', 'single', 'double', 'bed', 'single',]
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

                &:hover {
                    box-shadow:4px 8px 5px rgba(0,0,0,0.3);
                    img {
                        transform: scale(1.2, 1.2)
                    }
                }

                img {
                    // position: absolute;
                    width: 100%;
                    height:auto;
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
                        background: transparent;
                        color: #fff;
                        padding: 8px 16px;
                        border: 3px solid #fff;
                        font-size: 18px;
                        font-weight: 400;
                        cursor: pointer;
                    }

                    &:hover {
                        opacity: 0.8;
                    }
                }
            }
        }
    }
}
</style>