<script setup>
import CarouselHome from '../components/HomePublic/CarouselHome.vue'
import FooterRomel from '../components/Footer/FooterRomel.vue'
import VideoHome from '../components/HomePublic/VideoHome.vue'
import CardsOffers from '../components/HomePublic/CardsOffers.vue'
import LocationHome from '../components/HomePublic/LocationHome.vue'
import SendMessageVue from '../components/SendMessage.vue'
window.onload = function() {
    // Stop the loader animation and remove the preloader element
    var preloader = document.getElementById('preloader');
    var loader = document.getElementById('loader');

    // Stop the loader animation
    loader.classList.remove('animate');

    // Remove the preloader element
    preloader.remove();
  };
  import { initFlowbite } from 'flowbite'
import { onMounted } from 'vue'

onMounted(() => {
  initFlowbite()
})

</script>
<template>
<div id="preloader" class="fixed top-0 left-0 w-screen h-screen bg-white z-50 flex items-center justify-center">
  <div class="flex items-center justify-center">
    <!-- Add your custom preloader content here -->
    <div id="loader" class="animate h-25 w-25">
      <img id="loader-logo" src="src/assets/logo.gif" alt="Logo">
    </div>
  </div>
</div>

<!-- Rest of your website content -->
<nav class="bg-white dark:bg-gray-900 fixed w-full z-50 top-0 left-0 border-b border-gray-200 dark:border-gray-600 " >
  <div class="w-full flex flex-wrap items-center justify-between mx-auto p-4" id="navbar-sticky">
  <a href="https://flowbite.com/" class="flex items-center">
      <img src="src/assets/samplelogo.png" class="h-14 mr-3" alt="sample logo">
      <span class="self-center text-4xl font-thin whitespace-nowrap dark:text-white">AKADA 8</span>
  </a>
  <div class="flex md:order-2 gap-3">
      <button type="button" class="text-white bg-peach1 hover:bg-peach2 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-yellow-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">INQUIRE NOW</button>
      <button data-modal-target="authentication-modal" data-modal-toggle="authentication-modal" class=" hover:bg-peach1 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-yellow-600  dark:focus:ring-blue-800 border-peach1 border-2 ">BOOK A TOUR</button>
      <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
      </button>
  </div>
  <!-- Main modal -->
<div id="authentication-modal" tabindex="-1" aria-hidden="true" class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div class="relative w-full max-w-md max-h-full">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-hide="authentication-modal">
                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                <span class="sr-only">Close modal</span>
            </button>
            <div class="px-6 py-6 lg:px-8">
                <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Book now</h3>
                <form class="space-y-6" action="#">
                    <div>
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required>
                    </div>
                    <div>
                        <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your phone number</label>
                        <input type="phone" name="phone" id="phone" placeholder="09-###-###-###" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required>
                    </div>
                    <div>
                        <label for="date" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select start date</label>
                        <input type="date" name="date" id="date" placeholder="" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required>
                    </div>
                   
                    <button type="submit" class="w-full text-white bg-peach1 hover:bg-peach2 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                   
                </form>
            </div>
        </div>
    </div>
</div> 
  <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    <ul  id="navbar-sticky" class="flex flex-col p-1 md:p-0 mt-2 font-medium border-none bg-transparent bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
        <a href="#" class="block py-1 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-peach1 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Home</a>
      </li>
      <li>
        <a href="#about" class="block py-1 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-peach1 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
      </li>
      <li>
        <a href="#services" class="block py-1 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-peach1 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
      </li>
      <li>
        <a href="#contact" class="block py-1 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-peach1 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
      </li>
    </ul>
  </div>
  </div>
</nav>

  <div id="carousel">
      <CarouselHome />
    </div>
    <div id="services">
      <CardsOffers />
    </div>
    <div id="about">
      <VideoHome />
    </div>
    <div id="contact">
      <LocationHome/>
      <div></div>
    
    </div>
    <div>
      <FooterRomel />
    </div>
  
</template>
<style>
.scrolled {
  background: #b77a37;
  width: 100%;
  max-width: 100%;
  color: white;
 
  background-color: blue;
  /* Add any other styles you want for the scrolled state */
}

</style>
<script>
  window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar-sticky');
    var button = document.getElementById('scroll-button');
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrolled > 410) {
      navbar.classList.add('scrolled');
      button.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
      button.classList.remove('scrolled');
    }
  });
</script>
