<template>
  <div class="demo-split">
    <tiny-split v-model="split1" mode="vertical">
      <template #top>
        <div class="demo-split-pane">自定义上面板</div>
      </template>
      <template #bottom>
        <div class="demo-split-pane">自定义下面板</div>
      </template>
    </tiny-split>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Split as TinySplit } from '@opentiny/vue'

const split1 = ref(0.3)
</script>

<style scoped>
.demo-split {
  height: 200px;
  margin-bottom: 20px;
}

.demo-split-pane {
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  height: 100%;
}
</style>
