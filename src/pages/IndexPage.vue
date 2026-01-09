<script setup>
import { ref, onMounted } from "vue";
import Settings from "@/components/Settings.vue";
import Tips from "@/components/Tips.vue";
import Results from "@/components/Results.vue";
import {
  deleteIndexInLocalStorageTips,
  pushOntoLocalStorageTips,
  TIP_HISTORY,
} from "@/components/tips/tipsConstants.js";
import {
  getBigTipThreshold,
  getHouseCut,
  getNumberWorkersPresent,
} from "@/components/setting-inputs/settingConstants.js";
import "./style.css";

onMounted(() => {
  font.value = localStorage.getItem("font") || "aevnir";
  houseCut.value = getHouseCut();
  numWorkers.value = getNumberWorkersPresent();
  bigTip.value = getBigTipThreshold();
  tipHistory.value = JSON.parse(localStorage.getItem(TIP_HISTORY)) || [];
  startingGil.value = Number(localStorage.getItem("startingGil")) || 0;
  endingGil.value = Number(localStorage.getItem("endingGil")) || 0;
});
const settingsOpen = ref(false);

const onCloseSettings = () => {
  settingsOpen.value = false;
};

const font = ref("open-dyslexia");
const houseCut = ref(0);
const numWorkers = ref(1);
const bigTip = ref(1);

const getSettingChangeFn = settingsRef => {
  return val => {
    settingsRef.value = val;
  };
};

const houseCutChange = getSettingChangeFn(houseCut);
const numWorkersChange = getSettingChangeFn(numWorkers);
const bigTipChange = getSettingChangeFn(bigTip);

const tipHistory = ref([]);

const onPushedTip = tip => {
  tipHistory.value = [...tipHistory.value, tip];
  pushOntoLocalStorageTips(tip);
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

const startingGilChange = val => {
  localStorage.setItem("startingGil", val);
  startingGil.value = Number(val);
};

const endingGilChange = val => {
  localStorage.setItem("endingGil", val);
  endingGil.value = Number(val);
};

const clearValues = () => {
  localStorage.setItem(TIP_HISTORY, "[]");
  localStorage.setItem("startingGil", 0);
  localStorage.setItem("endingGil", 0);
  tipHistory.value = [];
  startingGil.value = 0;
  endingGil.value = 0;
};
</script>

<template>
  <div class="app-wrapper" :class="font">
    <h1 class="header">Role-playing Services Form</h1>
    <div class="actions">
      <button @click="() => (settingsOpen = true)">Settings</button>
      <button @click="clearValues">Clear All Values</button>
    </div>
    <Settings
      v-if="settingsOpen"
      @on-font-change="onFontChange"
      :font="font"
      @close-settings="onCloseSettings"
      :house-cut="houseCut"
      :num-workers="numWorkers"
      :big-tip="bigTip"
      @onHouseCutChange="houseCutChange"
      @onNumWorkersChange="numWorkersChange"
      @onBigTipChange="bigTipChange"
    />
    <div class="input-grid">
      <label for="starting_amount">Starting Gil</label>
      <input
        id="starting_amount"
        type="number"
        min="1"
        step="1"
        :value="startingGil"
        @input="e => startingGilChange(e.target.value)"
      />
      <label for="ending_amount">Ending Gil</label>
      <input
        id="ending_amount"
        type="number"
        min="1"
        step="1"
        :value="endingGil"
        @input="e => endingGilChange(e.target.value)"
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
      :house-cut="houseCut"
      :num-workers="numWorkers"
      :big-tip-threshold="bigTip"
    />
  </div>
</template>
