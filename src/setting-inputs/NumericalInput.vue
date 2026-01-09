<script setup>
import { onMounted, onUnmounted, ref, useAttrs } from "vue";

const props = defineProps({
  settingKey: String,
  settingName: String,
  settingInputOptions: Object,
});
const emit = defineEmits({ onUnmount: null });
const settingValue = ref(0);

onMounted(() => {
  settingValue.value = Number(localStorage.getItem(props.settingKey)) || 0;
});

onUnmounted(() => {
  localStorage.setItem(props.settingKey, settingValue.value);
  emit("onUnmount");
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
