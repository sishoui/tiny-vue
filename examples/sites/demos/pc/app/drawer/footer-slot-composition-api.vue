<template>
  <div>
    <tiny-button @click="openDrawer" type="primary"> 底部插槽示例 </tiny-button>
    <tiny-drawer title="标题" :visible="visible" @update:visible="visible = $event" :show-footer="true">
      <div>内容区域</div>
      <template #footer>
        <div class="foot-text">
          <div>
            <tiny-button type="text">文本按钮</tiny-button>
          </div>
          <div class="my-footer">
            <tiny-button native-type="submit" @click="visible = false">取消</tiny-button>
            <tiny-button type="primary" native-type="submit" @click="visible = false">确认</tiny-button>
          </div>
        </div>
      </template>
    </tiny-drawer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Drawer as TinyDrawer, Button as TinyButton } from '@opentiny/vue'

const visible = ref(false)

function openDrawer() {
  visible.value = true
}
</script>

<style scoped>
.my-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.foot-text {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
</style>
