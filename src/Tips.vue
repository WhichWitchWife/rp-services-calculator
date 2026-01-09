<script setup>
import { onMounted, ref } from "vue";
import TipInput from "@/tips/TipInput.vue";
import { deleteIndexInLocalStorageTips } from "@/tips/tipsConstants.js";

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

onMounted(() => {
  tipHistory.value = JSON.parse(localStorage.getItem("tipHistory"));
});
</script>

<template>
  <TipInput @push-tip="onPushedTip" />
  <table class="tips-table">
    <tr>
      <th>Timestamp</th>
      <th>Tip Amount</th>
      <th>Tip Actions</th>
    </tr>
    <tr v-for="tip in tipHistory">
      <td>{{ tip.timestamp }}</td>
      <td>{{ tip.amount }}</td>
      <td><button @click="() => deleteTip(tip)">Delete Tip</button></td>
    </tr>
  </table>
</template>
