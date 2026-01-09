<script setup>
import { ref, onMounted } from "vue";
import Settings from "@/Settings.vue";
import Tips from "@/Tips.vue";
import Results from "@/Results.vue";
import { deleteIndexInLocalStorageTips } from "@/tips/tipsConstants.js";
import {
  getBigTipThreshold,
  getHouseCut,
  getNumberWorkersPresent,
} from "@/setting-inputs/settingConstants.js";
import "./style.css";

onMounted(() => {
  font.value = localStorage.getItem("font") || "open-dyslexia";
  numericalSettings.value = {
    houseCut: getHouseCut(),
    numWorkers: getNumberWorkersPresent(),
    bigTip: getBigTipThreshold(),
  };
  tipHistory.value = JSON.parse(localStorage.getItem("tipHistory"));
  startingGil.value = Number(localStorage.getItem('startingGil')) || 0;
  endingGil.value = Number(localStorage.getItem('endingGil')) || 0;
});
const settingsOpen = ref(false);

const onCloseSettings = () => {
  settingsOpen.value = false;
};

const font = ref("open-dyslexia");
const numericalSettings = ref({ houseCut: 0, numWorkers: 1, bigTip: 1 });

const tipHistory = ref([]);

const onPushedTip = tip => {
  tipHistory.value = [...tipHistory.value, tip];
};

const deleteTip = tip => {
  const history = tipHistory.value;
  const deletedIndex = history.findIndex(
    t => t.timestamp === tip.timestamp && t.amount === tip.amount
  );
  tipHistory.value = [
    ...history.slice(0, deletedIndex),
    ...history.slice(deletedIndex + 1, history.length),
  ];
  deleteIndexInLocalStorageTips(deletedIndex);
};

const onFontChange = newFont => {
  font.value = newFont;
  localStorage.setItem("font", newFont);
};

const startingGil = ref(0);
const endingGil = ref(0);

const startingGilChange = (val) => {
  localStorage.setItem('startingGil', val);
  startingGil.value = Number(val);
}

const endingGilChange = (val) => {
  localStorage.setItem('endingGil', val);
  endingGil.value = Number(val);
}

</script>

<template>
  <div class="app-wrapper" :class="font">
    <h1 class="header">Role-playing Services Form</h1>
    <button @click="() => (settingsOpen = true)">Settings</button>
    <Settings
      v-if="settingsOpen"
      @on-font-change="onFontChange"
      :font="font"
      @close-settings="onCloseSettings"
      :numerical-settings="numericalSettings"
    />
    <div class="input-grid">
      <label for="starting_amount">Starting Gil</label>
      <input
        id="starting_amount"
        type="number"
        min="1"
        step="1"
        :value="startingGil"
        @input="(e) => startingGilChange(e.target.value)"
      />
      <label for="ending_amount">Ending Gil</label>
      <input
        id="ending_amount"
        type="number"
        min="1"
        step="1"
        :value="endingGil"
        @input="(e) => endingGilChange(e.target.value)"
      />
    </div>
    <Tips
      :tip-history="tipHistory"
      :on-pushed-tip="onPushedTip"
      :delete-tip="deleteTip"
    />
    <Results
      :starting-gil="startingGil"
      :ending-gil="endingGil"
      :tip-history="tipHistory"
      :settings="numericalSettings"
    />
  </div>
</template>
