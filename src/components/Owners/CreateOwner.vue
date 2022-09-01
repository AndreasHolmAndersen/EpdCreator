<template>
    <div class="py-12 bg-white h-full transition duration-150 ease-in-out z-10">
    <h3 class="text-lg font-medium leading-6 text-gray-900 mb-4 px-4">Create owner</h3>
    <div class="mt-5 md:mt-0 md:col-span-2" >
            <form action="#" method="POST">
              <div class="shadow overflow-hidden sm:rounded-md">
                <div class="px-4 py-5 bg-white sm:p-6">
                  <div class="grid grid-cols-6 gap-6">
    
                     <div class="col-span-6 sm:col-span-4">
                      <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
                      <input type="text" id="name" v-model="newOwner.name" class="mt-1 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
                    </div>
    
                    <div class="col-span-6 sm:col-span-3">
                      <label for="name" class="block text-sm font-medium text-gray-700">Street name</label>
                      <input type="text" id="streetName" v-model="newOwner.streetName"  class="mt-1 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
                    </div>
    
                    <div class="col-span-6 sm:col-span-3">
                      <label for="houseNumber" class="block text-sm font-medium text-gray-700">House number</label>
                      <input type="text" id="houseNumber" v-model="newOwner.houseNumber" autocomplete="family-name" class="mt-1 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
                    </div>
    
                    <div class="col-span-6 sm:col-span-3">
                      <label for="city" class="block text-sm font-medium text-gray-700">City</label>
                      <input type="text" id="city" v-model="newOwner.city"  class="mt-1 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
                    </div>
    
                    <div class="col-span-6 sm:col-span-3">
                      <label for="houseNumber" class="block text-sm font-medium text-gray-700">Postal code</label>
                      <input type="text" id="postalcode" v-model="newOwner.postalCode" autocomplete="family-name" class="mt-1 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
                    </div>
    
    
    
                      <div class="col-span-6 sm:col-span-3">
                      <label for="phoneNumber" class="block text-sm font-medium text-gray-700">Phone number</label>
                      <input type="text" id="phoneNumber" v-model="newOwner.phoneNumber"  class="mt-1 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
                    </div>
    
                    <div class="col-span-6 sm:col-span-3">
                      <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                      <input type="text" id="email" v-model="newOwner.email" autocomplete="family-name"
                             class="mt-1 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
                    </div>
    
    
                    <div class="col-span-6">
                      <label for="vatNumber" class="block text-sm font-medium text-gray-700">Vat number</label>
                      <input type="text" id="vatNumber" v-model="newOwner.vatNumber" autocomplete="street-address"
                             class="mt-1 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
                    </div>
    
                  </div>
    
                  <div v-if="err">
                    <p class="text-sm font-medium text-rose-500">{{err}}</p>
                </div>
    
                </div>
    
                <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button type="submit"
                   @click.prevent="onSubmit"
                          class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Create
                  </button>
                  <button class="focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-gray-400 ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm" @click="$emit('modalToggle', 'cancel createModal')" >Cancel</button>
                </div>
              </div>
            </form>
          </div>
    </div>
      
    
    
    </template>
    
    
    
    <script setup lang="ts">
    import { createOwner } from "../../api/services/OwnerApi"
    import type Owner from "../../types/OwnerType"
    import { ref } from "vue";
    

    
    
    
    
    const newOwner = ref({
        name: '',
        vatNumber: '',
        streetName: '',
        houseNumber: '',
        city: '',
        postalCode: '',
        email: '',
        phoneNumber: ''
    })
    
    
    const err = ref('')
    
     const onSubmit = async() => {
        if(!newOwner.value.name || !newOwner.value.vatNumber || !newOwner.value.streetName  || !newOwner.value.houseNumber || !newOwner.value.city || !newOwner.value.email || !newOwner.value.postalCode || !newOwner.value.phoneNumber ) {
            err.value = 'Please fill out all the fields'
            return
        } else {
            console.log("owner created")
        // const response = await createOwner({
        // name: newOwner.value.name,
        // vatNumber: newOwner.value.vatNumber,
        // streetName: newOwner.value.streetName,
        // houseNumber: newOwner.value.houseNumber,
        // city: newOwner.value.city,
        // postalCode: newOwner.value.postalCode,
        // email: newOwner.value.email,
        // phoneNumber: newOwner.value.phoneNumber,
        // })  
        
        // if(response.status === 201) {
        //     console.log(first)
        //     emit('modalToggle', 'submit')
        // } 
        
      
    }}
    
    
    
    </script>
    
    