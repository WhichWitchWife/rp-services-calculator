<script setup>
import Font from "@/setting-inputs/Font.vue";
import NumericalInput from "@/setting-inputs/NumericalInput.vue";
import {BIG_TIP_THRESHOLD, HOUSE_CUT, NUMBER_WORKERS_PRESENT} from "@/setting-inputs/settingConstants.js";

defineProps({
  font: String,
});
defineEmits([
  'onFontChange',
  'closeSettings',
]);
</script>

<template>
  <div class="pop-up">
    <div class="pop-up-header">
      <h2>Settings</h2>
      <button @click="$emit('closeSettings')">X</button>
    </div>
    <div class="settings">
      <Font @input="(e) => $emit('onFontChange', e.target.value)" :modelValue="font"/>
      <NumericalInput
          :setting-key="HOUSE_CUT"
          setting-name="House Cut (%)"
          :setting-input-options="{ max: 100 }"
      />
      <NumericalInput
          :setting-key="BIG_TIP_THRESHOLD"
          setting-name="Big Tip Threshold"
          :setting-input-options="{ min: 1 }"
      />
      <NumericalInput
          :setting-key="NUMBER_WORKERS_PRESENT"
          setting-name="# of Workers Currently Present"
          :setting-input-options="{ min: 1 }"
      />
    </div>
    <button class="close" @click="$emit('closeSettings')">Close</button>
  </div>
</template>