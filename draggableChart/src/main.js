import Vue from "vue";
import App from "./App.vue";
//引入Antd组件库
import Antd from "ant-design-vue";
//引入Antd组件库CSS文件
import "ant-design-vue/dist/antd.css";import * as echarts from 'echarts'
import VueDraggableResizable from 'vue-draggable-resizable'
 
// 可选择导入默认样式
import 'vue-draggable-resizable/dist/VueDraggableResizable.css'
Vue.component('vue-draggable-resizable', VueDraggableResizable)
//vue中使用e-charts
Vue.prototype.$echarts = echarts
//Vue使用Antd组件库
Vue.use(Antd);
Vue.config.productionTip = false;
new Vue({
  render: (h) => h(App),
}).$mount("#app");

