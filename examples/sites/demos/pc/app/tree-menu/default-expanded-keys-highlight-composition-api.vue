<template>
  <div>
    <tiny-button @click="changeHighlight" type="primary">设置展开并高亮</tiny-button>
    <tiny-tree-menu
      class="demo-tree-menu"
      node-key="id"
      :data="treeData"
      :default-expanded-keys="expandeArr"
      :default-expanded-keys-highlight="highlight"
    ></tiny-tree-menu>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { TreeMenu as TinyTreeMenu, Button as TinyButton } from '@opentiny/vue'

let expandeArr = reactive([30101])
const highlight = ref(30101)
const treeData = reactive([
  {
    id: 100,
    label: '首页'
  },
  {
    id: 200,
    label: '指南',
    children: [
      {
        id: 201,
        label: '引入组件',
        children: [
          { id: 20101, label: '按需引入' },
          { id: 20102, label: '完整引入' }
        ]
      },
      { id: 202, label: '后端适配器' },
      { id: 203, label: '服务代理' },
      { id: 204, label: '构建部署' }
    ]
  },
  {
    id: 300,
    label: '组件',
    children: [
      {
        id: 301,
        label: '表单组件',
        children: [
          {
            id: 30101,
            label: 'Button 按钮',
            url: 'http://his-beta.huawei.com/aurora/#/webcore/v3/zh-CN/component/button'
          },
          { id: 30102, label: 'Datepicker 日期', url: '' },
          { id: 30103, label: 'Dropdown 下拉框', url: '' },
          { id: 30104, label: 'DropTimes 下拉时间', url: '' },
          { id: 30105, label: 'Input 输入框', url: '' }
        ]
      },
      { id: 302, label: '数据组件' },
      { id: 303, label: '导航组件' },
      { id: 304, label: '业务组件' }
    ]
  },
  {
    id: 400,
    label: '教程',
    children: [
      {
        id: 401,
        label: '页面布局',
        children: [
          { id: 40101, label: '添加标签页', url: '' },
          { id: 40102, label: '标签页配置', url: '' }
        ]
      },
      {
        id: 402,
        label: '查询功能',
        children: [
          { id: 40201, label: '添加查询页面', url: '' },
          { id: 40202, label: '列表属性配置', url: '' },
          { id: 40203, label: '通讯录查询', url: '' }
        ]
      },
      {
        id: 403,
        label: '新增功能',
        children: [
          { id: 40301, label: '表单新增功能', url: '' },
          { id: 40302, label: '表单数据验证', url: '' }
        ]
      },
      {
        id: 404,
        label: '编辑功能',
        children: [
          { id: 40401, label: '开启编辑功能', url: '' },
          { id: 40402, label: '保存表格数据', url: '' }
        ]
      }
    ]
  },
  {
    id: 500,
    label: '规范'
  },
  {
    id: 600,
    label: '性能'
  },
  {
    id: 700,
    label: '案例'
  },
  {
    id: 800,
    label: '更新日志'
  }
])

const changeHighlight = () => {
  setTimeout(() => {
    expandeArr = expandeArr.concat([401])
    highlight.value = 401
  }, 100)
}
</script>

<style lang="less" scoped>
.demo-tree-menu ::v-deep .tiny-tree {
  height: 320px;
  overflow: auto;
}
.tiny-button {
  margin-bottom: 10px;
}
</style>
