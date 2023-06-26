<template>
  <!-- <div class="right">
    <div class="icarousel">
      <div><img src="src/assets/1.jpg" /></div>
      <div><img src="src/assets/1-1.png" /></div>
      <div><img src="src/assets/1-2.png" /></div>
      <div><img src="src/assets/2-1.png" /></div>
      <div><img src="src/assets/2-2.png" /></div>
      <div><img src="src/assets/2-3.png" /></div>
      <div><img src="src/assets/3-1.png" /></div>
      <div><img src="src/assets/3-2.png" /></div>
      <div><img src="src/assets/3-3.png" /></div>
    </div>
    <div class="icarousel-nav">
      <button class="icarousel-prev">&#8249;</button>
      <button class="icarousel-next">&#8250;</button>
    </div>
  </div> -->

  <div id="default-carousel" class="relative w-3/4 mx-auto py-5" data-carousel="slide">
    <!-- Carousel wrapper -->
    <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
      <!-- Item 1 -->
      <div class="hidden duration-700 ease-in-out" data-carousel-item>
        <img
          src="src/assets/1.jpg"
          class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          alt="..."
        />
      </div>
      <!-- Item 2 -->
      <div class="hidden duration-700 ease-in-out" data-carousel-item>
        <img
          src="src/assets/1-1.png"
          class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          alt="..."
        />
      </div>
      <!-- Item 3 -->
      <div class="hidden duration-700 ease-in-out" data-carousel-item>
        <img
          src="src/assets/1-2.png"
          class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          alt="..."
        />
      </div>
      <!-- Item 4 -->
      <div class="hidden duration-700 ease-in-out" data-carousel-item>
        <img
          src="src/assets/2-1.png"
          class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          alt="..."
        />
      </div>
      <!-- Item 5 -->
      <div class="hidden duration-700 ease-in-out" data-carousel-item>
        <img
          src="src/assets/2-2.png"
          class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          alt="..."
        />
      </div>
    </div>
    <!-- Slider indicators -->
    <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
      <button
        type="button"
        class="w-3 h-3 rounded-full"
        aria-current="true"
        aria-label="Slide 1"
        data-carousel-slide-to="0"
      ></button>
      <button
        type="button"
        class="w-3 h-3 rounded-full"
        aria-current="false"
        aria-label="Slide 2"
        data-carousel-slide-to="1"
      ></button>
      <button
        type="button"
        class="w-3 h-3 rounded-full"
        aria-current="false"
        aria-label="Slide 3"
        data-carousel-slide-to="2"
      ></button>
      <button
        type="button"
        class="w-3 h-3 rounded-full"
        aria-current="false"
        aria-label="Slide 4"
        data-carousel-slide-to="3"
      ></button>
      <button
        type="button"
        class="w-3 h-3 rounded-full"
        aria-current="false"
        aria-label="Slide 5"
        data-carousel-slide-to="4"
      ></button>
    </div>
    <!-- Slider controls -->
    <button
      type="button"
      class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      data-carousel-prev
    >
      <span
        class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
      >
        <svg
          aria-hidden="true"
          class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 19l-7-7 7-7"
          ></path>
        </svg>
        <span class="sr-only">Previous</span>
      </span>
    </button>
    <button
      type="button"
      class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      data-carousel-next
    >
      <span
        class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
      >
        <svg
          aria-hidden="true"
          class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5l7 7-7 7"
          ></path>
        </svg>
        <span class="sr-only">Next</span>
      </span>
    </button>
  </div>
</template>

<script>
import $ from 'jquery'
import 'slick-carousel/slick/slick.min.js'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default {
  mounted() {
    $('.icarousel').slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 1,
      prevArrow: $('.icarousel-prev'),
      nextArrow: $('.icarousel-next')
    })
  }
}
</script>

<style scoped>
.icarousel {
  margin: 0 auto;
}

.icarousel img {
  width: 200px;
  height: 150px;
}

.icarousel-nav {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.icarousel-prev,
.icarousel-next {
  background-color: #fff;
  border: 2px solid gray;
  color: #000;
  cursor: pointer;
  padding: 1px 10px;
  margin: 0 5px;
  font-size: 34px;
  border-radius: 10px;
}

.icarousel-prev:hover,
.icarousel-next:hover {
  background-color: #b77e37;
  color: #fff;
}

.right {
  align-items: right;
  width: 900px;
}
</style>
