<script setup>
import { ref } from "vue";
import Font from "@/Font.vue";
import "./style.css";

const font = ref("open-dyslexia");
</script>

<template>
  <div class="app-wrapper" :class="font">
    <h1 class="header">Role-playing Services Form</h1>
    <Font v-model="font" />
    <div class="input-grid">
      <label for="starting_amount">Starting Gil</label>
      <input id="starting_amount" type="number" min="1" step="1" />
      <label for="ending_amount">Ending Gil</label>
      <input id="ending_amount" type="number" min="1" step="1" />
    </div>
  </div>
</template>
