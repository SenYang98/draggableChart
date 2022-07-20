<template>

    <div>

        <vue-draggable-resizable :w="width" :h="height" :x="x" :y="y" :min-width="250" :min-height="250"
            @dragging="onDrag" @resizing="onResize">
            <div class="cha" :id="timeId"></div>
        </vue-draggable-resizable>
    </div>

</template>

<script>

export default ({
    beforeCreate() {
    },

    data() {
        return {
            timeId: Date.now(),
            drag: false,
            width: 250,
            height: 250,
            x: 50,
            y: 50
        };
    },

    methods: {
        onResize: function (x, y, width, height) {
            this.x = x;
            this.y = y;
            this.width = width;
            this.height = height;
            let myChart1 = document.getElementById(this.timeId);
            console.log("myChart1", myChart1.firstChild)
            myChart1.style.width = this.width +`px`;
            myChart1.style.height = this.height+`px`;
        },
        onDrag: function (x, y) {
            this.x = x;
            this.y = y;
        },
        drawChart() {
            // 基于准备好的dom，初始化echarts实例
            let myChart1 = this.$echarts.init(document.getElementById(this.timeId));
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
            window.onresize = function () {
                myChart1.resize()
            }
            let dom = document.getElementById(this.timeId)
            let ro = new ResizeObserver((entries) => {
                console.log(entries)
                myChart1.resize();
            });
            ro.observe(dom);
            // 使用刚指定的配置项和数据显示图表。
            myChart1.setOption(option);
        }
    },
    mounted() {
        this.drawChart();
    }
});
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

.cha {
    width: 250px;
    height: 250px;
    /* background: #fbc531; */
}

.item {
    padding: 6px;
    background-color: #fdfdfd;
    border: solid 1px #eee;
    margin-bottom: 10px;
    cursor: move;
}

/*选中样式*/
.chosen {
    border: solid 2px #3089dc !important;
}

.item {
    margin: 10px;
    padding: 10px;
    background: #ffffff;
}

.like {
    /* background: #fbc531; */
    margin-bottom: 10px;
    padding: 10px;
    height: 300px;
}
</style>

