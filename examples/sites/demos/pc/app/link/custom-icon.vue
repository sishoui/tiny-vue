<template>
  <div>
    <tiny-link>
      <template #icon> <icon-fillet-external-link class="tiny-svg-link"></icon-fillet-external-link> </template
      >链接按钮</tiny-link
    >
    <tiny-link disabled>
      <template #icon> <icon-fillet-external-link class="tiny-svg-size"></icon-fillet-external-link> </template
      >链接按钮</tiny-link
    >
    <tiny-link :underline="false" :icon="IconEdit">编辑</tiny-link>
    <tiny-link :underline="false" :icon="IconEdit" disabled>禁用</tiny-link>
    <tiny-link :underline="false">查看<icon-view class="tiny-svg-size"></icon-view> </tiny-link>
    <tiny-link :underline="false">
      <template #icon> <icon-del class="tiny-svg-size"></icon-del> </template>删除</tiny-link
    >
  </div>
</template>

<script>
import { Link } from '@opentiny/vue'
import { IconEditor, IconView, IconDeleteL, IconFilletExternalLink } from '@opentiny/vue-icon'

export default {
  components: {
    TinyLink: Link,
    IconView: IconView(),
    IconDel: IconDeleteL(),
    IconFilletExternalLink: IconFilletExternalLink()
  },
  data() {
    return {
      IconEdit: IconEditor()
    }
  }
}
</script>

<style scoped>
.tiny-link {
  margin-right: 48px;
}
</style>
