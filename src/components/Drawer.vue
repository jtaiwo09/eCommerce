<template>
  <a-drawer
    :title="title"
    :placement="placement"
    width="500"
    :closable="true"
    :visible="visible"
    @close="onClose"
  >
    <slot></slot>
  </a-drawer>
</template>

<script>
export default {
name: "Drawer",
props: ['visible', 'title'],
data(){
    return {
        placement: "right",
    }
},
methods: {
    showDrawer(){
        this.visible = true;
    },
    onClose(){
        this.$emit('closeDrawer');
    }
},
mounted(){
    console.log(this.$attrs);
}
}
</script>

<style>

</style>