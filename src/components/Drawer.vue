<template>
  <a-drawer
    :title="title"
    :placement="placement"
    :width="drawerWidth-80"
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
props: ['visible', 'title', 'drawerWidth'],
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