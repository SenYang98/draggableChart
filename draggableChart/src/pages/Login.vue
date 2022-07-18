<template>
  
  <div>
    <div class="cha" id="cha"></div>
  </div>
</template>

<script>
export default {
  beforeCreate() {
  },


  methods: {
    drawChart() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("cha"));
      // 指定图表的配置项和数据
      let option = {
        legend: {},
        tooltip: {},
        dataset: {
          dimensions: ['product', '业务类型', '额度占用情况', '缴纳情况'],
          source: [
            { product: '水果1', '业务类型': 43.3, '额度占用情况': 85.8, '缴纳情况': 93.7 },
            { product: '水果2', '业务类型': 83.1, '额度占用情况': 73.4, '缴纳情况': 55.1 },
            { product: '水果3', '业务类型': 86.4, '额度占用情况': 65.2, '缴纳情况': 82.5 },
            { product: '水果4', '业务类型': 72.4, '额度占用情况': 53.9, '缴纳情况': 39.1 },
            { product: '水果5', '业务类型': 43.3, '额度占用情况': 85.8, '缴纳情况': 93.7 },
            { product: '水果6', '业务类型': 83.1, '额度占用情况': 73.4, '缴纳情况': 55.1 },
            { product: '水果7', '业务类型': 86.4, '额度占用情况': 65.2, '缴纳情况': 82.5 },
            { product: '水果8', '业务类型': 72.4, '额度占用情况': 53.9, '缴纳情况': 39.1 }
          ]
        },
        xAxis: { type: 'category' },
        yAxis: {},
        // Declare several bar series, each will be mapped
        // to a column of dataset.source by default.
        series: [
          { type: 'bar' },
          { type: 'bar' },
          { type: 'bar' }
        ]
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    }
  },
  mounted() {
    this.drawChart();
  }
};
</script>
<style>
.login-form {
  max-width: 300px;
  margin: auto !important;
}

.login-form-forgot {
  float: right;
}

.login-form-button {
  width: 100%;
}
.cha{
  width: 500px;
  height: 500px;
}

</style>

