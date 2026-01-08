<script setup>
const font = defineModel();
</script>

<template>
  <div class="font-selector">
    <label for="font">Font choice</label>
    <select name="font" v-model="font">
      <option value="open-dyslexia">Open Dyslexia</option>
      <option value="times-new-roman">Times New Roman</option>
      <option value="aevnir">Aevnir</option>
    </select>
  </div>
</template>
