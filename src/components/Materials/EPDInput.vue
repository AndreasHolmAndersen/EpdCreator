<script setup lang="ts">
    import { ref, watch } from "vue";
    
    const props = defineProps({
        id: Number
    })
    
    const data: any = ref();
    
    const emit = defineEmits(["handleCollectData"]);
    watch(data, (newData, _oldData) =>{
        emit("handleCollectData", handleSubmit(), props.id)
    })
    
    const handleSubmit = () => {
      const firstNewLineIndex = data.value.indexOf("\n");
    
      const allColumns = data.value.substr(0, firstNewLineIndex).split(" ");
    
      if (!allColumns[0].toLowerCase().includes("para")) {
        allColumns.splice(0, 0, "Parameter");
        console.log(allColumns);
      }
      if (
        allColumns[1].toLowerCase().includes("enhed") ||
        allColumns[1].toLowerCase().includes("unit")
      ) {
        //do nothing
      } else {
        allColumns.splice(1, 0, "Enhed");
        console.log(allColumns);
      }
    
      const allRows = data.value
        .substr(firstNewLineIndex, data.value.length)
        .split(/(?<!\[[^\]]*)[ \n]/);
    
      allRows.splice(0, 1); //remove leading ''
    
      const rowChunks = [];
    
      for (let i = 0; i < allRows.length; i += allColumns.length) {
        const chunk = allRows.slice(i, i + allColumns.length);
        rowChunks.push(chunk);
      }
    
      const result = {};
    
      rowChunks.forEach((row: Array<String>, rowIndex: number) => {
        let currentKey = "";
        row.forEach((value, valueIndex) => {
          value = value.replace(/\n/g, " ");
          if (valueIndex === 0) {
            value = value.replace(/[0-9]/g, "");
            currentKey = value;
            result[currentKey] = {};
            return;
          }
          if (valueIndex === 1) {
            if (value.includes("SO2")) {
              value.replace("SO2", "SO\u2082");
            } else if (value.includes("PO43")) {
              value.replace("PO43", "SO\u2084\u00B3");
            } else if (value.includes("M2")) {
              value.replace("M2", "M\u00B2");
            } else if (value.includes("M3")) {
              value.replace("M3", "M\u00B3");
            } else if (value.includes("CO2")) {
              value.replace("CO2", "CO\u2082");
            }
            result[currentKey].unit = value;
            return;
          }
          result[currentKey][allColumns[valueIndex]] = value;
        });
      });
    
      return result;
    };
    
    
    </script>
    
    <template>
      <textarea
        v-model="data"
        cols="80"
        rows="10"
        class="rounded-md shadow-md indent-2"
      ></textarea>
    </template>
    