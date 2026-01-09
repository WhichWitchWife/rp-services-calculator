<script setup>
defineProps({
  result: Number,
  name: String,
});
</script>

<template>
  <div class="result">
    <h3>{{ name }}</h3>
    <p>{{ result }}</p>
  </div>
</template>
