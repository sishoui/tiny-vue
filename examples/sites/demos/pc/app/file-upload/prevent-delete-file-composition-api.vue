<template>
  <tiny-file-upload ref="uploadRef" :action="action" :file-list="fileList" :before-remove="beforeRemove">
    <template #trigger>
      <tiny-button>选取文件</tiny-button>
    </template>
  </tiny-file-upload>
</template>

<script setup>
import { ref } from 'vue'
import { FileUpload as TinyFileUpload, Button as TinyButton, Modal } from '@opentiny/vue'

const action = ref('http://localhost:3000/api/upload')
const fileList = ref([
  {
    name: 'test1',
    url: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/fruit.jpg`
  }
])

function beforeRemove(file) {
  return new Promise((resolve, reject) => {
    Modal.confirm(`确定移除 ${file.name}？`).then((res) => {
      res === 'confirm' ? resolve() : reject(new Error('取消移除'))
    })
  })
}
</script>
