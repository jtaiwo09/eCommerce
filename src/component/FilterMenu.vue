<template>
  <div class="card">
    <article>
        <h2>Category</h2>
        <div @click="$emit('showCategory', item)" v-for="(item, i) in categoryList" :key="i" class="link">
            {{item}}
        </div>
    </article>
    <section class="-phm">
        <header>
            <h2>Price (₦)</h2>
            <div @click="clearFilter" class="btn">Clear Filter</div>
        </header>
        <div class="pfs-w">
            <a-slider
            range
            :step="10"
            :min="minVal"
            :max="maxVal"
            :default-value="[minVal, maxVal]"
            @change="onChange"
            />
        </div>
        <div class="pfi-w">
            <div class="pi-w">
                <input
                    type="number"
                    :min="minVal"
                    placeholder="Min"
                    v-model="minP"
                    class="pi"
                    @change="onChange"
                />
            </div>
            <span class="-phs">-</span>
            <div class="pi-w">
                <input
                    type="number"
                    :max="maxVal"
                    placeholder="Max"
                    v-model="maxP"
                    class="pi"
                    @change='onChange'
                />
            </div>
        </div>
    </section>
    <section class="-phm">
        <header>
            <h2>Size</h2>
        </header>
        <div class="size">
            <SizeInput min='' max='' placeholder1="Min-Width" placeholder2="Max-Width" />
            <SizeInput min='' max='' placeholder1="Min-Height" placeholder2="Max-Height" />
            <SizeInput min='' max='' placeholder1="Min-Breadth" placeholder2="Max-Breadth" />
        </div>
    </section>
</div>
</template>

<script>
import SizeInput from "../component/SizeInput";
export default {
name: "filterMenu",
components: { SizeInput },
props: ['priceArray', 'showCategory', 'allProduct', 'showSelected', 'hasFiltered'],
data(){
    return {
      minP: this.minVal,
      maxP: this.maxVal,
    }
},
methods: {
    clearFilter(){
      this.minP = this.minVal
      this.maxP = this.maxVal
    },
    onChange(value){
      this.minP = value[0];
      this.maxP = value[1];
      this.$emit('onChange', this.minP, this.maxP);

    },
},
computed: {
    categoryList(){
      let data = this.allProduct;
      let newArray = []
      for(let x in data){
        newArray.push(data[x].sub)
      }
      return newArray.filter((value, i, a)=> a.indexOf(value) == i);
    },
    minVal(){
      return Math.min(...this.priceArray)
    },
    maxVal(){
      return Math.max(...this.priceArray)
    }
},
mounted(){
    this.minP = this.minVal;
    this.maxP = this.maxVal;
  },
}
</script>

<style lang="scss" scoped>
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
            cursor: pointer;

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
        
      }
</style>