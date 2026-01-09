<script setup>
import { ref, onMounted } from "vue";
import Settings from "@/Settings.vue";
import Tips from "@/Tips.vue";
import "./style.css";

onMounted(() => {
  font.value = localStorage.getItem('font') || 'open-dyslexia';
});
const settingsOpen = ref(false);

const onCloseSettings = () => {
  settingsOpen.value = false;
}

const font = ref("open-dyslexia");

const onFontChange = (newFont) => {
  font.value = newFont;
  localStorage.setItem('font', newFont);
}

</script>

<template>
  <div class="app-wrapper" :class="font">
    <h1 class="header">Role-playing Services Form</h1>
    <button @click="() => settingsOpen = true">Settings</button>
    <Settings
        v-if="settingsOpen"
        @on-font-change="onFontChange"
        :font=font
        @close-settings="onCloseSettings"
    />
    <div class="input-grid">
      <label for="starting_amount">Starting Gil</label>
      <input id="starting_amount" type="number" min="1" step="1" />
      <label for="ending_amount">Ending Gil</label>
      <input id="ending_amount" type="number" min="1" step="1" />
    </div>
    <Tips />
  </div>
</template>
