<template>
    <!-- 
    pull: 'clone', put: false
    意思是以克隆的方式拖拽，，不能在组件列表进行放置，目的是不影响原来的组件列表
  -->
    <draggable v-model="componentList" item-key="id" :group="{ name: 'component', pull: 'clone', put: false }">
        <div v-for="element in componentList" :key="element.id">
            <div class="item">
                {{ element.tag }}
            </div>
        </div>
    </draggable>
</template>
<script>

// 引入vuedraggable
import draggable from "vuedraggable";

export default {
    name: "list",
    components: {
        draggable,
    },
    data() {
        return {
            // 组件数据列表
            componentList: [
                {
                    id: 1,
                    tag: "a-button",
                    props: {
                        type: "primary",
                    },
                },
                {
                    id: 2,
                    tag: "a-empty",
                    props: {
                        description: "没有数据捏",
                    },
                },
                {
                    id: 3,
                    tag: "a-spin",
                },]
        };
    },
}
</script>
<style scoped>
.item {
    border: #0083ee 1px solid;
    margin: 10px;
    padding: 10px;
}
</style>
