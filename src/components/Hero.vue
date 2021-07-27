<template>
  <header :class="hero">
      <slot></slot>
  </header>
</template>

<script>
export default {
    name: 'Hero',
    props: ['hero']

}
</script>

<style>

</style>