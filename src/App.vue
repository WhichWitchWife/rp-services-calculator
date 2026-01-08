<script setup>
import { ref, onMounted } from "vue";
import Font from "@/Font.vue";
import "./style.css";

onMounted(() => {
  font.value = localStorage.getItem('font') || 'open-dyslexia';
});

const font = ref("open-dyslexia");
const onFontChange = (e) => {
  const newFont = e.target.value;
  font.value = newFont;
  localStorage.setItem('font', newFont);
}

</script>

<template>
  <div class="app-wrapper" :class="font">
    <h1 class="header">Role-playing Services Form</h1>
    <Font @input="onFontChange" :modelValue="font" />
    <div class="input-grid">
      <label for="starting_amount">Starting Gil</label>
      <input id="starting_amount" type="number" min="1" step="1" />
      <label for="ending_amount">Ending Gil</label>
      <input id="ending_amount" type="number" min="1" step="1" />
    </div>
  </div>
</template>
