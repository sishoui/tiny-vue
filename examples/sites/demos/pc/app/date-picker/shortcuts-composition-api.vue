<template>
  <div>
    <div class="demo-date-picker-wrap">
      <tiny-date-picker v-model="value" :picker-options="pickerOptions" placeholder="请选择日期"></tiny-date-picker>
      <tiny-date-picker
        v-model="dateRangeValue"
        type="daterange"
        :picker-options="pickerOptionsDateRange"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
      ></tiny-date-picker>
      <tiny-date-picker
        v-model="monthRangeValue"
        type="monthrange"
        :picker-options="pickerOptionsMonthRange"
        start-placeholder="开始月份"
        end-placeholder="结束月份"
      ></tiny-date-picker>
    </div>
    <br />
    <p>某日起始、某日为止：</p>
    <div class="demo-date-picker-wrap">
      <tiny-date-picker
        v-model="startFromValue"
        type="daterange"
        :picker-options="pickerOptionsStartFrom"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
      ></tiny-date-picker>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { DatePicker as TinyDatePicker } from '@opentiny/vue'

const value = ref('')
const dateRangeValue = ref('')
const monthRangeValue = ref('')
const startFromValue = ref('')

const pickerOptions = {
  shortcuts: [
    {
      text: '今天',
      onClick(picker) {
        const date = new Date()
        picker.$emit('pick', date)
      }
    },
    {
      text: '昨天',
      onClick(picker) {
        const date = new Date()
        date.setTime(date.getTime() - 3600 * 1000 * 24)
        picker.$emit('pick', date)
      }
    },
    {
      text: '一周前',
      onClick(picker) {
        const date = new Date()
        date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
        picker.$emit('pick', date)
      }
    }
  ]
}

const pickerOptionsDateRange = {
  shortcuts: [
    {
      text: '最近一周',
      onClick(picker) {
        const end = new Date()
        const start = new Date()
        start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
        picker.$emit('pick', [start, end])
      }
    },
    {
      text: '最近一个月',
      onClick(picker) {
        const end = new Date()
        const start = new Date()
        start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
        picker.$emit('pick', [start, end])
      }
    },
    {
      text: '最近三个月',
      onClick(picker) {
        const end = new Date()
        const start = new Date()
        start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
        picker.$emit('pick', [start, end])
      }
    }
  ]
}

const pickerOptionsMonthRange = {
  shortcuts: [
    {
      text: '本月',
      onClick(picker) {
        const date = new Date()
        const tmp = new Date(date.getFullYear(), date.getMonth() + 1, 1, 0, 0, 0)
        const start = new Date(date.getFullYear(), date.getMonth(), 1, 0, 0, 0)
        const end = new Date(tmp.getTime() - 1)
        picker.$emit('pick', [start, end])
      }
    },
    {
      text: '今年至今',
      onClick(picker) {
        const date = new Date()
        const start = new Date(date.getFullYear(), 0)
        const end = new Date()
        picker.$emit('pick', [start, end])
      }
    },
    {
      text: '最近六个月',
      onClick(picker) {
        const end = new Date()
        const start = new Date()
        start.setMonth(start.getMonth() - 6)
        picker.$emit('pick', [start, end])
      }
    }
  ]
}

const pickerOptionsStartFrom = {
  shortcuts: [
    {
      text: '某日起始', // text可以自定义
      type: 'startFrom'
    },
    {
      text: '某日为止', // text可以自定义
      type: 'endAt'
    },
    {
      text: '自定义结束日期',
      type: 'startFrom',
      endDate: new Date('2030-10-10') // 传入的日期必须为一个日期对象
    },
    {
      text: '自定义开始日期',
      type: 'endAt',
      startDate: new Date('2000-10-10') // 传入的日期必须为一个日期对象
    }
  ]
}
</script>

<style scoped lang="less">
.demo-date-picker-wrap {
  width: 360px;

  & > * {
    margin-top: 12px;
  }
}
</style>
