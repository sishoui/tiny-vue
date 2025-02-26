<template>
  <div class="tiny-color-select-panel" @click.stop v-if="state.isShow" v-clickoutside="onCancel">
    <hue-select :color="state.color" @hue-update="onHueUpdate" @sv-update="onSVUpdate" />
    <alpha-select v-if="alpha" :color="state.color" @alpha-update="onAlphaUpdate" />
    <div class="tiny-color-select-panel__tools">
      <tiny-input v-model="state.res" size="small" />
      <div class="tiny-color-select-panel__tools-btns">
        <tiny-button size="small" @click="onCancel">
          {{ t('ui.colorSelectPanel.cancel') }}
        </tiny-button>
        <tiny-button type="primary" size="small" @click="onConfirm">
          {{ t('ui.colorSelectPanel.confirm') }}
        </tiny-button>
      </div>
    </div>
    <tiny-collapse>
      <tiny-collapse-item :title="t('ui.colorSelectPanel.history')" name="history" v-if="state.enableHistory">
        <div class="tiny-color-select-panel__history" v-if="state.stack.length">
          <div
            class="tiny-color-select-panel__history__color-block"
            v-for="(color, key) in state.stack"
            :key="key"
            :style="{
              background: color
            }"
            @click="() => onHistoryClick(color)"
          ></div>
        </div>
        <div v-if="!state.stack.length">{{ t('ui.colorSelectPanel.empty') }}</div>
      </tiny-collapse-item>
      <tiny-collapse-item
        :title="t('ui.colorSelectPanel.predefine')"
        name="predefine"
        v-if="state.enablePredefineColor"
      >
        <div class="tiny-color-select-panel__predefine" v-if="state.predefineStack.length">
          <div
            class="tiny-color-select-panel__predefine__color-block"
            v-for="(color, key) in state.predefineStack"
            :key="key"
            :style="{
              background: color
            }"
            @click="() => onPredefineColorClick(color)"
          ></div>
        </div>
        <div v-if="!state.predefineStack.length">{{ t('ui.colorSelectPanel.empty') }}</div>
      </tiny-collapse-item>
    </tiny-collapse>
  </div>
</template>

<script>
import Button from '@opentiny/vue-button'
import Collapse from '@opentiny/vue-collapse'
import CollapseItem from '@opentiny/vue-collapse-item'
import Input from '@opentiny/vue-input'
import { renderless, api } from '@opentiny/vue-renderless/color-select-panel/vue'
import { props, setup, defineComponent, directive } from '@opentiny/vue-common'
import HueSelect from './components/hue-select.vue'
import AlphaSelect from './components/alpha-select.vue'
import '@opentiny/vue-theme/color-select-panel/index.less'
import Clickoutside from '@opentiny/vue-renderless/common/deps/clickoutside'

export default defineComponent({
  emits: ['update:modelValue', 'cancel', 'confirm', 'hue-update', 'sv-update', 'color-update'],
  props: [...props, 'modelValue', 'visible', 'alpha', 'history', 'predefine'],
  components: {
    HueSelect,
    AlphaSelect,
    TinyButton: Button,
    TinyInput: Input,
    TinyCollapse: Collapse,
    TinyCollapseItem: CollapseItem
  },
  directives: directive({ Clickoutside }),
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
})
</script>
