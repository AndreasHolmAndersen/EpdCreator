<script setup lang="ts">
import SearchDropdown from "search-dropdown-vue";
import { ref } from "vue";

//Industry/Product EPD
const epdType = ref([
  { text: "Industry", value: 0 },
  { text: "Product", value: 1 },
]);

//EPD Specification
const epdSpecification = ref([
  { text: "EN15804A1", value: 0 },
  { text: "EN15804A2", value: 1 },
]);
const stages = ref();
const uploadedFiles = ref<string[]>([]);
const files = ref<HTMLInputElement | null>(null);
  
const newMaterial = ref({
  ownerId: "",
  shortName: "",
  longName: "",
  expectedLifespan: null,
  description: "",
  epdTypeEnum: 0,
  link: uploadedFiles,
  stages: stages.value,
  declaredUnit: {
    declaredUnit: 0,
    declaredValue: 0,
    mass: 0,
    massUnit: 0,
  },
  epdInfo: {
    epdSpecificationForm: 0,
    epdProductIndustryType: 0,
    issuedAt: "",
    validTo: "",
    dateRangeStart: "",
    dateRangeEnd: "",
  },
});
</script>

<template>
  // EPD type (product or branche) // epd specifikation (EN 15084 +A1 | +A2)

  <!-- select owner from list  -->
  <SearchDropdown
    :maxItem="5"
    placeholder="Search for the owner"
    :options="allOwners"
    v-on:selected="onSelectedOwnerOption"
  />
  // Input for short name // Input for long name // Issued at // valid to //
  Upload files (EPD pdf) // Date range start // Date range end // units
  (deklareret enhed) // units (masse) // Lifespan // input fields for emmision
</template>
