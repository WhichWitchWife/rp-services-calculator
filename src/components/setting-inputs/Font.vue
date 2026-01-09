<script setup>
const font = defineModel();
</script>

<template>
  <div class="settings-input">
    <label for="font-selector">Font choice</label>
    <select name="font-selector" v-model="font">
      <option value="times-new-roman">Times New Roman</option>
      <option value="aevnir">Aevnir</option>
    </select>
  </div>
</template>
