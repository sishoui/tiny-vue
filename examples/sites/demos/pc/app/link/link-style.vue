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

<script>
import { Link } from '@opentiny/vue'

export default {
  components: {
    TinyLink: Link
  }
}
</script>

<style scoped>
.tiny-link {
  margin-right: 48px;
}
</style>
