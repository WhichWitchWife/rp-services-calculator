<script setup>
import { onMounted, ref } from "vue";
import TipInput from "@/tips/TipInput.vue";

const tipHistory = ref([]);

const onPushedTip = tip => {
  tipHistory.value = [...tipHistory.value, tip];
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
    </tr>
    <tr v-for="tip in tipHistory">
      <td>{{ tip.timestamp }}</td>
      <td>{{ tip.amount }}</td>
    </tr>
  </table>
</template>
