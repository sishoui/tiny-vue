<template>
  <div>
    <tiny-link>默认链接</tiny-link>
    <tiny-link type="primary">主要链接</tiny-link>
    <tiny-link type="success">成功链接</tiny-link>
    <tiny-link type="warning">警告链接</tiny-link>
    <tiny-link type="danger">危险链接</tiny-link>
    <tiny-link type="info">信息链接</tiny-link>
  </div>
</template>

<script setup>
import { Link as TinyLink } from '@opentiny/vue'
</script>

<style scoped>
.tiny-link {
  margin-right: 48px;
}
</style>
