<template>
  <div>
    <tiny-button @click="getImageData" style="margin-bottom: 20px">获取图像数据</tiny-button>
    <tiny-button @click="getCanvasData" style="margin-bottom: 20px">获取画布位置和大小数据</tiny-button>
    <tiny-button text="图片裁剪" @click="visible = !visible" style="margin-bottom: 20px"></tiny-button>
    <tiny-crop ref="cropRef" :cropvisible="visible" @update:cropvisible="visible = $event" :src="imgUrl"></tiny-crop>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { Crop as TinyCrop, Button as TinyButton, Modal } from '@opentiny/vue'

const visible = ref(false)
const cropRef = ref()
const imgUrl = ref(`${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/mountain.png`)

function getImageData() {
  Modal.message({
    message: `图像数据：${JSON.stringify(cropRef.value.getImageData())}`,
    status: 'info'
  })
}
function getCanvasData() {
  Modal.message({
    message: `画布位置和大小数据: ${JSON.stringify(cropRef.value.getCanvasData())}`,
    status: 'info'
  })
}
</script>
