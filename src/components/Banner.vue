<template>
  <div class="banner">
      <h1>{{title}}</h1>
      <div />
      <slot></slot>
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
  background: rgba(0, 0, 0, 0.3);
  color: #fff;
  padding: 2rem 6rem;
  text-align: center;
  text-transform: capitalize;
  letter-spacing: 3px;
  z-index: 5;

  h1 {
    font-size: 4rem;
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

@media (max-width: 992px) {
  .banner {
    padding: 2rem 5rem;

    h1 {
      font-size: 3rem;
    }
  }
}
@media (max-width: 590px) {
  .banner {
    padding: 1.5rem 2.5rem;

    h1 {
      font-size: 1.5rem;
    }
  }
}
</style>