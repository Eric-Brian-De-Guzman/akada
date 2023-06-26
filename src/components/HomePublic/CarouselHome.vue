<template>
  <div id="indicators-carousel" class="relative w-full mt-20" data-carousel="static">
    <!-- Carousel wrapper -->
    <div class="relative h-screen md:h-screen overflow-hidden">
      <!-- Item 1 -->
      <div class="hidden duration-700 ease-out" data-carousel-item="active">
        <div class="absolute block w-full h-5/6">
          <img src="/src/assets/c-3.png" alt="..." class="w-full h-full object-cover" />
          <div class="absolute inset-0">
            <div class="text-white md:pt-52 md:ml-10 md:mr-20 ml-10 mr-10 pt-32">
              <h2 class="text-4xl font-bold pb-10">Discover the Ultimate Business Destination</h2>
              <p class="text-lg">
                Embark on a journey of unparalleled business possibilities. It is a place where
                visionaries, innovators, and industry leaders converge to shape the future of
                commerce
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- Item 2 -->
      <div class="hidden duration-700 ease-out" data-carousel-item>
        <div class="absolute block w-full h-5/6">
          <img src="/src/assets/c-1.png" alt="..." class="w-full h-full object-cover" />
          <div class="absolute inset-0">
            <div class="text-white md:pt-40 md:ml-10 md:mr-20 pt-32  text-center">
              <h2 class="text-4xl font-bold pb-10">
                Elevate Your Business to New Heights in a Premier Commercial Space Designed for
                Excellence.
              </h2>
              <p class="text-lg">
                Be captivated by its ambiance and design, crafted to inspire creativity,
                productivity, and success.
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- Item 3 -->
      <div class="hidden duration-700 ease-out" data-carousel-item>
        <div class="absolute block w-full h-5/6">
          <img src="/src/assets/c1.jpg" alt="..." class="w-full h-full object-cover" />
          <div class="absolute inset-0">

            <div class="text-white md:pt-36 text-center md:w-full md:ml-2 pt-36 ml-5 mr-5">
  <h2 class="text-4xl font-bold pb-10">Where Success Meets Unmatched Opportunities</h2>
  <p class="text-lg">
    Fosters a vibrant community of like-minded professionals, creating networking
    opportunities, collaborations, and synergies that propel businesses forward.
  </p>
</div>

            
          </div>
        </div>
      </div>
    </div>
    <!-- Slider indicators -->
    <div class=" md:absolute z-30 md:bottom-48 md:gap-1 md:right-20 md:flex md:flex-col absolute bottom-48 right-40 ">
      <button
        type="button"
        class="w-4 h-4 rounded-full mb-2"
        aria-current="true"
        aria-label="Slide 1"
        data-carousel-slide-to="0"
      ></button>
      <button
        type="button"
        class="w-4 h-4 rounded-full mb-2"
        aria-current="false"
        aria-label="Slide 2"
        data-carousel-slide-to="1"
      ></button>
      <button
        type="button"
        class="w-4 h-4 rounded-full mb-2"
        aria-current="false"
        aria-label="Slide 3"
        data-carousel-slide-to="2"
      ></button>
    </div>
  </div>
</template>
