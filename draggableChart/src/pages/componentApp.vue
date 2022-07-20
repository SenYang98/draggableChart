<template>
  <a-layout class="main">
    <a-layout>
      <a-layout-sider style="margin-right: 8px">
        <list />
      </a-layout-sider>
      <a-layout-content class="content">
        <Content />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
import list from './list'
import Content from './content';

export default {
  name: "App",
  components: {
    list,
    Content,
  },
  data() {
    return{

    }
  },
}
</script>
<style scoped>
.main {
  height: 100vh;
}
.content {
  background: #ffffff;
}
.ant-layout-sider {
  background: #ffffff !important;
}
</style>

