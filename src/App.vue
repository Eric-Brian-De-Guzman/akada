<script setup>
import { RouterView } from 'vue-router'
import 'flowbite'
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite()
})
</script>

<template>
  <RouterView />
</template>
<style></style>
