<template>
  <div class="demo-drop">
    <p class="demo-dropdown">场景1：默认</p>
    <tiny-dropdown split-button type="success">
      更多菜单（标题很长示例）
      <template #dropdown>
        <tiny-dropdown-menu>
          <tiny-dropdown-item>黄金糕</tiny-dropdown-item>
          <tiny-dropdown-item>狮子头</tiny-dropdown-item>
          <tiny-dropdown-item>螺蛳粉</tiny-dropdown-item>
          <tiny-dropdown-item disabled>双皮奶</tiny-dropdown-item>
          <tiny-dropdown-item divided>蚵仔煎</tiny-dropdown-item>
        </tiny-dropdown-menu>
      </template>
    </tiny-dropdown>
    <br /><br />
    <p class="demo-dropdown">场景2：设置 inherit-width</p>
    <tiny-dropdown split-button type="success" :inherit-width="true">
      更多菜单（标题很长示例）
      <template #dropdown>
        <tiny-dropdown-menu>
          <tiny-dropdown-item>黄金糕</tiny-dropdown-item>
          <tiny-dropdown-item>狮子头</tiny-dropdown-item>
          <tiny-dropdown-item>螺蛳粉</tiny-dropdown-item>
          <tiny-dropdown-item disabled>双皮奶</tiny-dropdown-item>
          <tiny-dropdown-item divided>蚵仔煎</tiny-dropdown-item>
        </tiny-dropdown-menu>
      </template>
    </tiny-dropdown>
  </div>
</template>

<script setup>
import {
  Dropdown as TinyDropdown,
  DropdownMenu as TinyDropdownMenu,
  DropdownItem as TinyDropdownItem
} from '@opentiny/vue'
</script>

<style lang="less" scoped>
p {
  font-size: 14px;
  line-height: 1.5;
}
.demo-dropdown {
  margin-bottom: 8px;
}
</style>
