<template>
  <div>
    <tiny-funnel :options="options"></tiny-funnel>
  </div>
</template>

<script lang="jsx">
import { HuichartsFunnel } from '@opentiny/vue'

export default {
  components: {
    TinyFunnel: HuichartsFunnel
  },
  data() {
    return {
      options: {
        sort: 'ascending',
        data: [
          { value: 100, name: 'Show' },
          { value: 75, name: 'Click' },
          { value: 50, name: 'Visit' },
          { value: 25, name: 'Order' }
        ]
      }
    }
  }
}
</script>
