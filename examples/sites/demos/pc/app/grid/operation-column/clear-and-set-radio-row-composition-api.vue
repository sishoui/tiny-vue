<template>
  <tiny-grid ref="gridRef" :data="tableData" @toolbar-button-click="toolbarButtonClickEvent">
    <template #toolbar>
      <tiny-grid-toolbar :buttons="toolbarButtons"></tiny-grid-toolbar>
    </template>
    <tiny-grid-column type="radio" width="40"></tiny-grid-column>
    <tiny-grid-column field="name" title="名称"></tiny-grid-column>
    <tiny-grid-column field="area" title="所属区域"></tiny-grid-column>
    <tiny-grid-column field="address" title="地址"></tiny-grid-column>
    <tiny-grid-column field="introduction" title="公司简介" show-overflow></tiny-grid-column>
  </tiny-grid>
</template>

<script setup>
import { ref } from 'vue'
import { Grid as TinyGrid, GridColumn as TinyGridColumn, GridToolbar as TinyGridToolbar } from '@opentiny/vue'

const toolbarButtons = ref([
  {
    code: 'clearRadioRowData',
    name: '手动取消单选行'
  },
  {
    code: 'setRadioRow',
    name: '手动选中某一行'
  }
])
const tableData = ref([
  {
    id: '1',
    name: 'GFD科技YX公司',
    area: '华东区',
    address: '福州',
    introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
  },
  {
    id: '2',
    name: 'WWWW科技YX公司',
    area: '华南区',
    address: '深圳福田区',
    introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
  },
  {
    id: '3',
    name: 'RFV有限责任公司',
    area: '华南区',
    address: '中山市',
    introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
  },
  {
    id: '4',
    name: 'TGBYX公司',
    area: '华北区',
    address: '梅州',
    introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
  },
  {
    id: '5',
    name: 'YHN科技YX公司',
    area: '华南区',
    address: '韶关',
    introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
  },
  {
    id: '6',
    name: '康康物业YX公司',
    area: '华北区',
    address: '广州天河区',
    introduction: '公司技术和研发实力雄厚，是国家863项目的参与者，并被政府认定为“高新技术企业”。'
  }
])
const gridRef = ref('gridRef')

function toolbarButtonClickEvent({ code }) {
  switch (code) {
    case 'clearRadioRowData': {
      gridRef.value.clearRadioRow()
      break
    }
    case 'setRadioRow': {
      gridRef.value.setRadioRow(tableData.value[4])
      break
    }
  }
}
</script>

<style scoped lang="less">
:deep(.tiny-grid) {
  &-header__column,
  &-body__column {
    &.col__radio {
      padding: 0 8px 0 16px;
      & + th,
      + td {
        padding-left: 0;
      }
    }
  }
}
</style>
