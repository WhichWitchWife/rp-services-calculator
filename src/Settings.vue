<script setup>
import Font from "@/Font.vue";

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
    </div>
    <button class="close" @click="$emit('closeSettings')">Close</button>
  </div>
</template>