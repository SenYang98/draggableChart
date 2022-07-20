<template>
<div>
    <div class="like">
    <!-- 
      注意需要加上group属性，并配置pull: 'clone'才能进行克隆
     -->
    <draggable
      v-model="likeList"
      item-key="id"
      :group="{ name: 'course', pull: 'clone' }"
    >
      <div v-for="element in likeList" :key="element.id">
      <div class="item">{{ element.id + "、" + element.name }}</div>
      </div>
        
      
    </draggable>
  </div>

  <div class="unlike">
    <draggable
      v-model="unlikeList"
      item-key="id"
      :group="{ name: 'course', pull: 'clone' }"
    >
      <div v-for="element in unlikeList" :key="element.id">
      <div class="item">{{ element.id + "、" + element.name }}</div>
      </div>
    </draggable>
  </div>

  {{ likeList }}
  {{ unlikeList }}
</div>
  
  
</template>
<script>

// 引入vuedraggable
import draggable from "vuedraggable";

export default {
  components: { draggable },
  data() {
    
    return {
        // 需要使用ref
    likeList : [
      { id: 1, name: "java程序设计基础" },
      { id: 2, name: "数据结构与算法" },
      { id: 3, name: "数据库原理" },
      { id: 4, name: "软件工程" },
      { id: 5, name: "财务管理" },
      { id: 6, name: "会计" },
      { id: 7, name: "人力资源管理" },
    ],

    unlikeList : [{ id: 8, name: "企业管理" }]
    };
  },
}
</script>
<style>
.item {
  margin: 10px;
  padding: 10px;
  background: #ffffff;
}

.like {
  background: #fbc531;
  margin-bottom: 10px;
  padding: 10px;
}

.unlike {
  background: #353b48;
  margin-bottom: 10px;
  padding: 10px;
}
</style>
