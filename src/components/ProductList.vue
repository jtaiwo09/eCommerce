<template>
  <div style="width: 150px">
    <a-button type="primary" @click="toggleCollapsed" style="margin-bottom: 16px">
      <MenuUnfoldOutlined v-if="collapsed" />
      <MenuFoldOutlined v-else />
    </a-button>
    <a-menu
      mode="inline"
      theme="dark"
      :inline-collapsed="collapsed"
      v-model:openKeys="openKeys"
      v-model:selectedKeys="selectedKeys"
    >
        <a-menu-item key="3" v-for="(product, index) in getAllProducts" :key="index">
        <template #icon>
          <InboxOutlined />
        </template>
        <router-link to="/">{{product.name}}</router-link>
      </a-menu-item>
      <a-sub-menu key="sub2">
        <template #icon>
          <AppstoreOutlined />
        </template>
        <template #title>Navigation Two</template>
        <a-menu-item key="9">Option 9</a-menu-item>
        <a-menu-item key="10">Option 10</a-menu-item>
      </a-sub-menu>
    </a-menu>
  </div>
</template>

<script>
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
  MailOutlined,
  DesktopOutlined,
  InboxOutlined,
  AppstoreOutlined,
} from '@ant-design/icons-vue';
export default {
  data(){
    return {
      collapsed: false,
      selectedKeys: ['1'],
      openKeys: ['sub1'],
      preOpenKeys: ['sub1'],
    }
  },
  components: {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PieChartOutlined,
    MailOutlined,
    DesktopOutlined,
    InboxOutlined,
    AppstoreOutlined,
  },
  methods: {
    toggleCollapsed(){
      this.collapsed = !this.collapsed;
      this.openKeys = this.collapsed ? [] : this.preOpenKeys;
    }
  },
  watch: {
    openKeys(val, oldVal){
      this.preOpenKeys = oldVal
    }
  },
  computed: {
    getAllProducts(){
      return this.$store.state.products.filter(product => product.category == this.$route.params.id)
    }
  },
  mounted(){
    console.log(this.$route.params.id);
    console.log(this.$store.state.products.filter(product => product.category == this.$route.params.id));
  }

}
</script>

<style>

</style>