<template>
    <draggable handle=".mover" v-model="componentList" item-key="id" class="content" :group="{ name: 'component' }">
        <!-- 
      组件点击后，修改样式为激活状态
    -->
        <div v-for="element in componentList" :key="element.id">
            <vue-draggable-resizable :min-width="250" :min-height="250">
                <div :class="avtive == element.tag ? 'item-content active' : 'item-content'"
                    @click="avtive = element.tag">

                    <component :is="element.tag" v-bind="element.props" v-on="element.event">{{ element.tag ==
                            "a-button" ?
                            "a-button" : ""
                    }}</component>
                </div>
            </vue-draggable-resizable>
        </div>

    </draggable>
</template>
<script>

// 引入vuedraggable
import draggable from "vuedraggable";

export default {
    name: "content",
    components: { draggable },
    data() {
        return { avtive: "", componentList: [] };
    },
}
</script>
<style scoped>
.content {
    height: 100%;
}

.item-content {
    margin: 10px;
}

.active {
    padding: 10px;
    /* border: springgreen 1px solid; */
}
</style>
