<script setup>
import Font from "@/components/setting-inputs/Font.vue";
import NumericalInput from "@/components/setting-inputs/NumericalInput.vue";
import {
  BIG_TIP_THRESHOLD,
  HOUSE_CUT,
  NUMBER_WORKERS_PRESENT,
} from "@/components/setting-inputs/settingConstants.ts";

const props = defineProps({
  font: String,
  numericalSettings: Object,
});
defineEmits(["onFontChange", "closeSettings"]);

const getUnmountFunction = key => {
  return val =>
    (props.numericalSettings.value = {
      ...props.numericalSettings.value,
      [key]: val,
    });
};
</script>

<template>
  <div class="pop-up">
    <div class="pop-up-header">
      <h2>Settings</h2>
      <button @click="$emit('closeSettings')">X</button>
    </div>
    <div class="settings">
      <Font
        @input="e => $emit('onFontChange', e.target.value)"
        :modelValue="font"
      />
      <NumericalInput
        :setting-key="HOUSE_CUT"
        setting-name="House Cut (%)"
        :setting-input-options="{ max: 100, step: 0.1 }"
        @onUnmount="getUnmountFunction('houseCut')"
      />
      <NumericalInput
        :setting-key="BIG_TIP_THRESHOLD"
        setting-name="Big Tip Threshold"
        :setting-input-options="{ min: 1 }"
        @unMount="getUnmountFunction('bigTip')"
      />
      <NumericalInput
        :setting-key="NUMBER_WORKERS_PRESENT"
        setting-name="# of Workers Currently Present"
        :setting-input-options="{ min: 1 }"
        @unMount="getUnmountFunction('numWorkers')"
      />
    </div>
    <button class="close" @click="$emit('closeSettings')">Close</button>
  </div>
</template>
