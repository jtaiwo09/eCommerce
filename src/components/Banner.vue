<template>
  <div class="banner">
      <h1>{{title}}</h1>
      <div />
      <router-link :to="{name: 'Home'}" class="btn-primary">Back Home</router-link>
  </div>
</template>

<script>
export default {
name: 'Banner',
props: ['title']
}
</script>

<style lang="scss" scoped>
.banner {
  display: inline-block;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  padding: 2rem 1rem;
  text-align: center;
  text-transform: capitalize;
  letter-spacing: 3px;

  h1 {
    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 0;
    }
  div {
    width: 10rem;
    height: 5px;
    background: #af9a7d;
    margin: 0 auto 1rem;
  }
}

@media screen and (min-width: 576px) {
  .banner {
    padding: 2rem 3rem;
  }
  .banner h1 {
    font-size: 3rem;
  }
}
@media screen and (min-width: 992px) {
  .banner {
    padding: 2rem 6rem;
  }
  .banner h1 {
    font-size: 4rem;
  }
}
</style>