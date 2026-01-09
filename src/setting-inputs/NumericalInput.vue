<script setup>
import { onMounted, onUnmounted, ref, useAttrs } from "vue";

defineProps({
  settingKey: String,
  settingName: String,
  settingInputOptions: Object,
});
const settingValue = ref(0);

onMounted(() => {
  const attrs = useAttrs();
  settingValue.value = Number(localStorage.getItem(attrs.settingKey)) || 0;
});

onUnmounted(() => {
  const attrs = useAttrs();
  localStorage.setItem(attrs.settingKey, settingValue.value);
});
</script>

<template>
  <div class="settings-input">
    <label :for="settingKey">{{ settingName }}</label>
    <input
      :id="settingKey"
      type="number"
      :min="settingInputOptions.min || 0"
      :max="settingInputOptions.max"
      :step="settingInputOptions.step || 1"
      v-model="settingValue"
    />
  </div>
</template>
