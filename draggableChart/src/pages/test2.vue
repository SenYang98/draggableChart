<template>
  <div>
  <div>{{drag?'拖拽中':'拖拽停止'}}</div>
  <!--使用draggable组件-->
      <draggable v-model="componentApp"  chosenClass="chosen" forceFallback="true" group="name" animation="1000" @start="onStart" @end="onEnd">
        <transition-group>
            <vue-draggable-resizable>
                <component class="item" v-for="element in componentApp" :is="element.tag" :key="element.id"  >{{element.name}}</component>
            </vue-draggable-resizable>
        </transition-group>
      </draggable> 
  </div>
</template>
<style scoped>
        /*被拖拽对象的样式*/
        .item {
            display: inline-flex;
            width:auto ;
            height: auto;
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
</style>
<script>
//导入draggable组件
import draggable from 'vuedraggable'
import test1 from './test1'
export default {
  //注册draggable组件
   components: {
            draggable,test1
        },
   data() {
    return {
      drag:false,
      //定义要被拖拽对象的数组
      myArray:[
        {people:'cn',id:1,name:'www.itxst.com'},
        {people:'cn',id:2,name:'www.baidu.com'},
        {people:'cn',id:3,name:'www.taobao.com'},
        {people:'us',id:4,name:'www.google.com'}
        ] ,
      componentApp:[
        {name:"item1",tag:'test1',id:1},
        {name:"item2",tag:'test1',id:2},
        {name:"item3",tag:'test1',id:3},
        {name1:"item3",tag:'test1',id:4},
        ]
      
    };
  },
  methods: {
     //开始拖拽事件
      onStart(){
        this.drag=true;
      },
      //拖拽结束事件
       onEnd() {
       this.drag=false;
    },
  },
};
</script>