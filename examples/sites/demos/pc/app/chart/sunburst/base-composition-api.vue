<template>
  <div>
    <tiny-chart-sunburst :options="options"></tiny-chart-sunburst>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { HuichartsSunburst as TinyChartSunburst } from '@opentiny/vue'

const options = ref({
  data: [
    {
      name: '展示平台',
      children: [
        {
          name: '手机端',
          children: [
            {
              name: '安卓',
              children: [
                {
                  name: 'SVG ↑↑↑',
                  value: 1
                }
              ]
            },
            {
              name: 'iOS',
              children: [
                {
                  name: 'SVG ↑',
                  value: 1
                }
              ]
            }
          ]
        },
        {
          name: '电脑端',
          children: [
            {
              name: 'Mac',
              children: [
                {
                  name: 'Chrome',
                  children: [
                    {
                      name: 'SVG ↑',
                      value: 1
                    }
                  ]
                },
                {
                  name: 'Safari',
                  children: [
                    {
                      name: '-',
                      value: 1
                    }
                  ]
                },
                {
                  name: 'Firefox',
                  children: [
                    {
                      name: '-',
                      value: 1
                    }
                  ]
                }
              ]
            },
            {
              name: 'Windows',
              children: [
                {
                  name: 'IE',
                  children: [
                    {
                      name: 'Canvas ↑↑',
                      value: 1
                    }
                  ]
                },
                {
                  name: 'Chrome',
                  children: [
                    {
                      name: '-',
                      value: 1
                    }
                  ]
                },
                {
                  name: 'Firefox',
                  children: [
                    {
                      name: 'SVG ↑',
                      value: 1
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      name: '图表类型',
      children: [
        {
          name: '折线图',
          children: [
            {
              name: 'SVG ↑↑',
              value: 1
            }
          ]
        },
        {
          name: '柱状图',
          children: [
            {
              name: 'Canvas ↑↑',
              value: 1
            }
          ]
        },
        {
          name: '饼图',
          children: [
            {
              name: '-',
              value: 1
            }
          ]
        }
      ]
    },
    {
      name: '数据量',
      children: [
        {
          name: '< 1000',
          children: [
            {
              name: '-',
              value: 1
            }
          ]
        },
        {
          name: '>= 1000',
          children: [
            {
              name: 'Canvas ↑',
              value: 1
            }
          ]
        }
      ]
    },
    {
      name: '图表个数',
      children: [
        {
          name: '< 10',
          children: [
            {
              name: '-',
              value: 1
            }
          ]
        },
        {
          name: '>= 10',
          children: [
            {
              name: 'SVG ↑↑↑',
              value: 1
            }
          ]
        }
      ]
    },
    {
      name: '特殊\n渲染\n需求',
      children: [
        {
          name: '仅 Canvas\n支持',
          value: 1
        }
      ]
    }
  ]
})
</script>
