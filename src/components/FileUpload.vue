<template>
   <div>
    <label class="">
      <input type="file" ref="files" multiple>
    </label>
    <button class="" @click="uploadFiles">
      Upload
    </button>
  </div>


</template>

<script setup lang="ts">
import FileService from "../services/FileService";
import type UploadFileResponse from "../types/UploadFileResponseType"
import {ref} from "vue";


const fileService: FileService = new FileService(['pdf', 'png']);
const fileUploadEndpointPath: string = "api/Material/upload"

const files = ref<HTMLInputElement | null>(null);


async function uploadFiles(event: any): Promise<UploadFileResponse | undefined> {
  if (files.value != null && files.value.files != null) {
    const _files = files.value.files;
    if (_files != null) {
      const fileArray = Array.from(_files)
      const response = await fileService.uploadFile(fileArray, fileUploadEndpointPath);
      return response
    }
  } else {
    console.log("shit")
  }
}

const printFiles = (event: any) => {
  //console.log([...files.value!.files!]);
}
</script>

<style scoped>

</style>