<script setup>
import { initFlowbite } from 'flowbite'
import { onMounted } from 'vue'

onMounted(() => {
  initFlowbite()
})
</script>
<template>
    
<form>
 <div class="text-center text-3xl pb-5">
  Send Us Message
 </div>
    
<div class="ml-10 mr-10  p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
  <div class="grid grid-cols-3 gap-3"> 
  <div class=""><div class="mb-6">
    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
    <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name@gmail.com" required>
  </div>
</div>
<div class="">
  <div class="mb-6">
    <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
    <input type="text" id="name" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required>
  </div>
</div>
<div>
  <div class="mb-6">
    <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Message</label>
    <input type="text" id="message" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required>
  </div>
</div>
<div></div>
<div class="col-span-2">
  <div class="flex flex-row">
  <input id="terms" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required>
   <label for="terms" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" class="text-peach1 hover:underline dark:text-blue-500">terms and conditions</a></label>
  </div>
</div>

<div></div>

  <button type="submit" class="text-white  hover:bg-peach2 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-peach1 dark:focus:ring-blue-800">Submit</button>

</div>

</div>
<div class="pb-10"></div>
 </form>

</template>