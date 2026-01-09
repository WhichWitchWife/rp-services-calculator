<script setup>
import ResultColumn from "@/ResultColumn.vue";
import {getResults} from "@/equations/getResults.ts";

const props = defineProps({
  startingGil: Number,
  endingGil: Number,
});

const results = () => getResults(props.startingGil, props.endingGil)
</script>

<template>
  <div v-if="startingGil && endingGil" class="results">
    <ResultColumn name="FC Chest Deposit" :result="results().fcIncome" />
    <ResultColumn name="Worker Profit" :result="results().workerProfit" />
    <ResultColumn name="Tip Share (each non-service worker gets)" :result="results().tipShare" />
  </div>
</template>
