<script setup>
import TipInput from "@/tips/TipInput.vue";

defineProps({
  tipHistory: Array,
  onPushedTip: Function,
  deleteTip: Function,
})
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
