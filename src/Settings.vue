<script setup>
import Font from "@/setting-inputs/Font.vue";
import NumericalInput from "@/setting-inputs/NumericalInput.vue";
import {HOUSE_CUT_KEY} from "@/setting-inputs/settingConstants.js";

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
          :setting-key="HOUSE_CUT_KEY"
          setting-name="House Cut (%)"
          :setting-input-options="{ max: 100 }"
      />
    </div>
    <button class="close" @click="$emit('closeSettings')">Close</button>
  </div>
</template>