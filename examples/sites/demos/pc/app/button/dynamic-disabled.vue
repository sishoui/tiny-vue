<template>
  <tiny-layout>
    <tiny-row> 是否禁用：<tiny-switch v-model="disabled"></tiny-switch> </tiny-row>
    <tiny-row>
      <tiny-button type="primary" :disabled="disabled">主要按钮</tiny-button>
      <tiny-button :disabled="disabled">次要按钮</tiny-button>
      <tiny-button type="success" :disabled="disabled">成功按钮</tiny-button>
      <tiny-button type="info" :disabled="disabled">信息按钮</tiny-button>
      <tiny-button type="warning" :disabled="disabled">警告按钮</tiny-button>
      <tiny-button type="danger" :disabled="disabled">危险按钮</tiny-button>
    </tiny-row>

    <tiny-row>
      <tiny-button type="primary" :disabled="disabled" plain>主要按钮</tiny-button>
      <tiny-button :disabled="disabled" plain>次要按钮</tiny-button>
      <tiny-button type="success" :disabled="disabled" plain>成功按钮</tiny-button>
      <tiny-button type="info" :disabled="disabled" plain>信息按钮</tiny-button>
      <tiny-button type="warning" :disabled="disabled" plain>警告按钮</tiny-button>
      <tiny-button type="danger" :disabled="disabled" plain>危险按钮</tiny-button>
    </tiny-row>

    <tiny-row>
      <tiny-button :disabled="disabled" ghost>幽灵按钮</tiny-button>
      <tiny-button :icon="TinyIconSearch" :disabled="disabled">图标按钮</tiny-button>
      <tiny-button :icon="TinyIconSearch" :disabled="disabled"> </tiny-button>
      <tiny-button :icon="TinyIconSearch" :disabled="disabled" circle> </tiny-button>
    </tiny-row>
  </tiny-layout>
</template>

<script>
import { Button, Layout, Row, Switch } from '@opentiny/vue'
import { iconSearch } from '@opentiny/vue-icon'

export default {
  components: {
    TinyButton: Button,
    TinyLayout: Layout,
    TinyRow: Row,
    TinySwitch: Switch
  },
  data() {
    return {
      disabled: false,
      TinyIconSearch: iconSearch()
    }
  }
}
</script>

<style scoped>
.tiny-row {
  margin-bottom: 20px;
}
.tiny-button {
  margin-bottom: 10px;
  margin-left: 0;
  margin-right: 24px;
}
</style>
