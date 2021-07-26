<template>
  <header class="header-wrap">
    <div class="container">
      <div class="left">
        taeillo
      </div>
      <div class="right">
        <div class="icons" @click="showDrawer('search')">
            <img
            class="search"
            :src="require('@/Images/Icons/search.svg')"
            alt=""
            />
        </div>
        <div @click="showDrawer('cart')" class="cart-div icons">
          <div class="cart-counter">
            <img
              class="cart"
              :src="require('@/Images/Icons/cart.svg')"
              alt=""
            />
            <span>0</span>
          </div>
        </div>
        <div class="bars icons" @click="showDrawer('menu')">
          <div class="bar"></div>
          <div class="bar"></div>
          <div  class="bar"></div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "navigation",
  emits: ["showDrawer"],
  methods: {
    showDrawer(value) {
      this.$emit("showDrawer", value);
    },
  },
};
</script>

<style lang="scss" scoped>
.header-wrap {
  padding: 20px 0;
  background: rgb(224, 223, 229);
  box-shadow: 2px 4px -1px rgba(0, 0, 0, 0.3), 4px 8px -1px rgba(0, 0, 0, 0.16);
  z-index: 999;
  width: 100%;
  position: fixed;
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .left {
      font-size: 25px;
      color: rgba(27, 28, 28);
    }
    .right {
      display: flex;
      justify-items: center;
      justify-content: center;
      .icons {
        margin-right: 30px;
        cursor: pointer;
        &:last-child {
            margin-right: 0;
        }
      }
      .cart-div {
        cursor: pointer;

        .cart-counter {
          display: flex;
          width: 24px;
          height: 27px;
          position: relative;
          .cart {
            width: 100%;
            position: absolute;
          }
          span {
            position: absolute;
            top: 5px;
            left: 8px;
            font-weight: bold;
          }
        }
      }
      .search {
        width: 27px;
        height: 26px;
        transform: rotateZ();
        cursor: pointer;
        transition: transform 0.25s ease;

        &:hover {
          transform: rotateZ(-15deg);
        }
      }
      .bars {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;
        transform: rotateZ(-180deg);
        cursor: pointer;

        .bar {
          height: 2px;
          width: 26px;
          background: rgba(27, 28, 28);
          margin-bottom: 4px;
          transition: width 0.25s ease;
        }
        &:hover {
          div:nth-child(1),
          div:nth-child(3) {
            width: 15px;
          }
        }
      }
    }
  }
}
</style>
