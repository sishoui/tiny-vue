<template>
  <div>
    <tiny-pie :options="options"></tiny-pie>
  </div>
</template>

<script lang="jsx">
import { HuichartsPie } from '@opentiny/vue'

export default {
  components: {
    TinyPie: HuichartsPie
  },
  data() {
    return {
      options: {
        type: 'pie',
        tipHtml: (params, ticket, callback) => {
          let htmlString =
            '<div>' +
            '<span style="display:inline-block;width:10px;height:10px;border-radius:5px;background-color:' +
            params.color +
            ';">' +
            '</span>' +
            '<span style="margin-left:5px;">' +
            '<span style="display:inline-block;padding-right:5px">' +
            params.name +
            '</span>' +
            '<span style="font-weight:normal">' +
            params.value +
            '</span>' +
            '<span>(' +
            params.percent +
            '%)</span>' +
            '</span>' +
            '</div>'
          return htmlString
        },
        label: {
          show: true
        },
        data: [
          { value: 100, name: '架构设计' },
          { value: 90, name: '开发' },
          { value: 49, name: '性能' },
          { value: 14, name: '测试' }
        ]
      }
    }
  }
}
</script>
