<script setup>
import { ref } from "vue";
import { pushOntoLocalStorageTips } from "@/tips/tipsConstants.js";
const emit = defineEmits({
  pushTip: ({ amount, timestamp }) => {
    return { timestamp, amount };
  },
});

const tipInput = ref(0);
const onSubmit = () => {
  const newTip = {
    amount: tipInput.value,
    timestamp: new Date().toLocaleString(),
  };
  emit("pushTip", newTip);
  pushOntoLocalStorageTips(newTip);
  tipInput.value = 0;
};
</script>

<template>
  <div class="tip-entry">
    <label for="tip-input">Tip Input</label>
    <input name="tip-input" type="number" min="1" step="1" v-model="tipInput" />
    <button @click="onSubmit">Create</button>
  </div>
</template>
