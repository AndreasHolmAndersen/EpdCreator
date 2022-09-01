<script setup lang="ts">
    import { ref } from 'vue';
    import EPDInput from './EPDInput.vue'
    import { getStageTypeEnum } from '../../api/services/MaterialApi';
    
    const amountOfInputs = ref(1);
    const stages = ref([]);
    const inputsData: any = ref([]);
    
    const addNewInput = () => {
      amountOfInputs.value++;
      inputsData.value.push([]);
    };
    
    const handleCollectData = (data, id) => {
      inputsData.value[id] = data;
    };
    
    const collectStages = async () => {
      const stageEnums = await getStageTypeEnum();
      Object.keys(stageEnums).forEach((stageNumber) => {
        const result = {};
        result.description = "";
        result.stageType = stageNumber;
        result.stageStatus = 2; //declared
        result.measures = {};
        inputsData.value.forEach((inputfield) => {
          Object.keys(inputfield).forEach((field) => {
            if (inputfield[field][stageEnums[stageNumber].Enum] === undefined) {
              result.measures[field] = null;
              result.stageStatus = 1; //not declared
              return;
            }
       
            if (inputfield[field][stageEnums[stageNumber].Enum] === "MNR") { //TODO Discuss B2-B7 -> Stagenumber has to be in getStageTypeEnum
              result.measures[field] = null
              result.stageStatus = 2; //not relevant
            }
    
            result.measures[field] =
              inputfield[field][stageEnums[stageNumber].Enum] +
              " " +
              inputfield[field].unit.replace(/[\[\]']+/g, "");
          });
        });
        stages.value.push(result);
      });
      console.log(stages.value);
    };
    </script>
    
    <template>
      <div
        class="flex items-center justify-center flex-col gap-6"
      >
        <div v-for="amount in amountOfInputs">
          <EPDInput @handleCollectData="handleCollectData" :id="amount" />
        </div>
        <div class="flex gap-6">
          <button
            @click="collectStages"
            class="bg-slate-300 p-2 rounded-md shadow-md"
          >
            Submit
          </button>
          <button
            @click="addNewInput"
            class="bg-slate-300 p-2 rounded-md shadow-md"
          >
            +
          </button>
        </div>
        <div class="gap-4 flex flex-col">
          <div v-for="input in inputsData" class="flex flex-col gap-1">
            <div
              v-for="(value, key) in input"
              class="bg-slate-200 rounded-md p-1 justify-between flex w-96"
            >
              <span>{{ key }}</span>
              <span>{{ value.unit.replace(/[\[\]']+/g, "") }}</span>
            </div>
          </div>
        </div>
      </div>
    </template>
    