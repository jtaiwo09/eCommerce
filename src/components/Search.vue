<template>
  <div class="search-wrap">
    <input type="text" placeholder="Enter a keyword" v-model="search">
    <i class="fas fa-search"></i>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.search-wrap {
  position: relative;
  display: flex;
  align-items: center;
  margin-top: 30px;
  input {
    border: none;
    background-color: rgb(199, 198, 208);
    color: rgba(27, 28, 28);
    width: 100%;
    height: 55px;
    position: absolute;
    padding: 8px 20px;
    font-weight: 500;
    font-size: .9375rem;

    &:focus {
      outline: none;
      border: rgba(27, 28, 28);
    }
  }
  
    i {
      font-size: 25px;
      position: absolute;
      right: 15px;
      z-index: 1;
      cursor: pointer;
      color: rgba(27, 28, 28, 0.42);
    }
}
</style>