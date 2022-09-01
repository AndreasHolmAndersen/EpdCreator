<script setup lang="ts">
import CreateOwner from "../components/Owners/CreateOwner.vue";
import CreateMaterial from "../components/Materials/CreateMaterial.vue";
</script>

<template>
  <div class="h-screen w-screen bg-slate-300">
    <CreateOwner />
    <CreateMaterial :show-create="true"/>
  </div>
</template>
