<template>
  <div :class="['tiny-filter-box', disabled && 'disabled', blank && 'is-blank']" @click="handeClick">
    <p :class="['title', dropDownVisible && 'active']">
      <label>{{ label }}</label>
      <tiny-tooltip v-if="tip" effect="light" :content="tip" placement="top">
        <icon-help-circle></icon-help-circle>
      </tiny-tooltip>
    </p>
    <p class="value" :class="['value', !value && value !== 0 && 'placeholder']">
      {{ value || value === 0 ? value : placeholder }}
    </p>
    <icon-error v-if="value && showClose && !disabled" class="filter-icon-close" @click.stop="handleClear"></icon-error>
    <component
      v-else
      :is="state.expandButtonIcon"
      :class="['filter-box-icon', dropDownVisible && 'is-reverse']"
    ></component>
  </div>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/filter-box/vue'
import { $props, $prefix, setup, defineComponent } from '@opentiny/vue-common'
import { iconDownWard, iconError, iconHelpCircle } from '@opentiny/vue-icon'
import TinyTooltip from '@opentiny/vue-tooltip'

export default defineComponent({
  name: $prefix + 'FilterBox',
  emits: ['click', 'handle-clear'],
  components: {
    IconDownWard: iconDownWard(),
    IconError: iconError(),
    IconHelpCircle: iconHelpCircle(),
    TinyTooltip
  },
  props: {
    ...$props,
    label: String,
    value: [String, Number],
    tip: String,
    placeholder: {
      type: String,
      default: ''
    },
    showClose: {
      type: Boolean,
      default: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    dropDownVisible: {
      type: Boolean,
      default: false
    },
    blank: {
      type: Boolean,
      default: false
    }
  },
  setup(props, context) {
    return setup({ props, context, renderless, api, mono: true })
  }
})
</script>
