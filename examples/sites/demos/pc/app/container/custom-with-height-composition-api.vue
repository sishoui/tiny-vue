<template>
  <div class="demo-container">
    <tiny-container
      :pattern="pattern"
      :aside-width="asideWidth"
      :footer-height="footerHeight"
      :header-height="headerHeight"
    >
      <template #header>
        <tiny-layout class="demo-center">header-height：80px</tiny-layout>
      </template>
      <template #aside>
        <tiny-layout class="demo-center">aside-width：200px</tiny-layout>
      </template>
      <tiny-layout class="demo-center">Main 自动填充空间</tiny-layout>
      <template #footer>
        <tiny-layout class="demo-center">footer-height：80px</tiny-layout>
      </template>
    </tiny-container>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { TinyContainer, TinyLayout } from '@opentiny/vue'

const pattern = ref('legend')
const asideWidth = ref(200)
const footerHeight = ref(80)
const headerHeight = ref(80)
</script>

<style scoped>
.demo-container .tiny-container {
  height: 300px;
  color: #5f6774;
  text-align: center;
  font-size: 18px;
  position: relative;
}

.demo-container .tiny-container :deep(.tiny-container__header) {
  background-color: #ecf8ff;
  border: 3px solid #ffffff;
  color: #5b90af;
}

.demo-container .tiny-container :deep(.tiny-container__aside) {
  background-color: #fff0f0;
  border: 3px solid #ffffff;
  color: #d27070;
}

.demo-container .tiny-container :deep(.tiny-container__main) {
  background-color: #fffdec;
  border: 3px solid #ffffff;
  color: #b1a859;
}

.demo-container .tiny-container :deep(.tiny-container__footer) {
  background-color: #e8ffed;
  border: 3px solid #ffffff;
  color: #84a18a;
}

.demo-container .tiny-container :deep(.main .changePattern .tiny-radio) {
  color: #a3a355;
  font-size: 16px;
  margin: 0 7px;
}
.demo-center {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
