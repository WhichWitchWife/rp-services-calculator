<script setup>
const font = defineModel();
</script>

<template>
  <div class="font-selector">
    <label for="font-selector">Font choice</label>
    <select name="font-selector" v-model="font" :value="font">
      <option value="open-dyslexia">Open Dyslexia</option>
      <option value="times-new-roman">Times New Roman</option>
      <option value="aevnir">Aevnir</option>
    </select>
  </div>
</template>
