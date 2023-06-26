<template>
    <div class="w-full relative z-20">
      <div class="grid grid-cols-2">
        <div>
      <div class="md:col-span-1">
  <div class="ml-10 mr-10 text-5xl text-peach1  font-thin pt-2 pb-0" style="white-space: nowrap;">WELCOME TO</div>
  <div class="ml-10 text-7xl text-center text-peach1 font-bold pb-0" style="white-space: nowrap;">AKADA 8</div>
  </div>
</div>

  <div class="col-span-2 ml-10 md:col-span-1">
      <div class="w-full text-right">
        <p class="text-m  mr-10  p-2  relative z-20">With office spaces to choose from including private offices, meeting rooms, and bigger spaces for expansion, Akada 8 has options to fit all your business needs.</p>
      </div>
      
    </div>
    </div>
      <div v-if="showNoteworthy">
        <div class="pb-10 text-right mr-10">
        <button @click="showNoteworthy = false" class="md:ml-48  inline-flex px-3 py-2 text-sm font-medium  bg-peach1 text-white rounded-lg hover:bg-peach2 w-36 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          LEARN MORE
          <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
          </svg>
        </button>
      </div>
<div class="grid grid-cols-2 md:grid-cols-4 gap-4 ml-10 mr-10">
    <div class="grid gap-4">
      <div class="max-h-96">
  <img class="h-full w-full object-cover rounded-lg" src="src/assets/1 (4).jpg" alt="">
</div>

        
    </div>
    <div class="grid gap-4">
      <div class="max-h-48">
            <img class="h-full w-full object-cover rounded-lg" src="src/assets/1 (5).jpg" alt="" />
          </div>
          <div class="max-h-32">
            <img class="h-full w-full object-cover rounded-lg" src="src/assets/1 (6).jpg" alt="" />
          </div>
      
    </div>
    <div class="grid gap-4">
      <div class="max-h-32">
            <img class="h-full w-full object-cover rounded-lg" src="src/assets/1 (7).jpg" alt="" />
          </div>
          <div class="max-h-80">
            <img class="h-full w-full object-cover rounded-lg" src="src/assets/1 (3).jpg" alt="" />
          </div>
    </div>
    <div class="grid gap-4">
      <div class="max-h-96">
            <img class="h-full w-full object-cover rounded-lg" src="src/assets/1 (9).jpg" alt="" />
          </div>
        
    </div>
</div>


    </div>
    <div v-else>
      <!-- Vue component to be shown when "Learn More" is clicked -->
      <div class="grid grid-cols-2">
    <div class="col-span-2 text-right mr-10 pb-10">
       <button @click="showNoteworthy =true" class=" inline-flex ml-10 px-3 py-2 text-sm font-medium text-center bg-peach1 text-white rounded-lg hover:bg-peach2 w-36 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        <svg width="15px" height="15px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title></title> <g id="Complete"> <g id="arrow-left"> <g> <polyline data-name="Right" fill="none" id="Right-2" points="7.6 7 2.5 12 7.6 17" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polyline> <line fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="21.5" x2="4.8" y1="12" y2="12"></line> </g> </g> </g> </g></svg>
        GO BACK
       </button>
    </div>
    <div class="col-span-2">
      <MainBooking />
    </div>
  </div>
    </div>
  </div>
  
    
</template>

<script>
import MainBooking from '../Rooms/MainBooking.vue';


export default {
  components: {

    MainBooking
},
  data() {
    return {
      showNoteworthy: true
    };
  }
};
</script>
