<template>
  <div class="container" :style="{ backgroundImage: currentBackground }">
    <div class="top-panel">
      <div class="button-container">
        <button
          @click="
            setCurrentImages(images1),
              setCurrentBackground(backgroundImages[0]),
              (currentCaption = captions[0])
          "
        >
          Office Type 1
        </button>
        <button
          @click="
            setCurrentImages(images2),
              setCurrentBackground(backgroundImages[1]),
              (currentCaption = captions[1])
          "
        >
          Office Type 2
        </button>
        <button
          @click="
            setCurrentImages(images3),
              setCurrentBackground(backgroundImages[2]),
              (currentCaption = captions[2])
          "
        >
          Office Type 3
        </button>
      </div>
    </div>

   
    <div class="caption-wrapper">
      <div class="text-center font-pangram text-white text-7xl font-bold">
        {{ currentCaption.split(' ').slice(0, 3).join(' ') }}
      </div>
      <div class="caption-container">
        <p>
          <span>{{ currentCaption.split(' ').slice(3).join(' ') }}</span>
        </p>
      </div>
    </div>

    <div class="bottom-panel">
      <div class="image-container" v-for="(image, index) in currentImages" :key="index">
        <img :src="image.src" :alt="image.alt" />
      </div>
    </div>
    <div class="flex justify-center pt-4">
      
    </div>
  </div>
</template>

<script>
const buttons = document.querySelectorAll('.btn')

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    // Remove "btn-big" class from all buttons
    buttons.forEach((btn) => btn.classList.remove('btn-big'))

    // Add "btn-big" class to clicked button
    button.classList.add('btn-big')
  })
})

export default {
  data() {
    return {
      images1: [
     
      ],
      images2: [
       
      ],
      images3: [
       
      ],
      currentImages: [],
      backgroundImages: [
        'src/assets/officetype1.png',
        'src/assets/officetype2.png',
        'src/assets/officetype3.png'
      ],
      currentBackground: 'url(src/assets/officetype1.png)',
      captions: [
        'OFFICE TYPE 1 Ideal for expanding agencies, clinics, studios and firms.',
        'OFFICE TYPE 2 Ideal for expanding companies and medium-sized companies.',
        'OFFICE TYPE 3 Ideal for SMEs Design Studios and Start up businesses.'
      ],
      currentCaption: ''
    }
  },
  mounted() {
    this.setCurrentImages(this.images1)
    this.currentCaption = this.captions[0]
  },
  methods: {
    setCurrentImages(images) {
      this.currentImages = images
    },
    setCurrentBackground(background) {
      this.currentBackground = `url(${background})`
    }
  }
}
</script>
<style scoped>
.container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  padding-top: 60px;
  background-size: cover;
  background-position: center;
  max-width: 1440px;
}

.top-panel {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 15%;
}

.button-container {
  display: flex;
  align-items: center;
  margin-bottom: 1rem; /* add margin-bottom to create space between the buttons and the caption */
}

.button-container button {
  background-color: transparent;
  border: 2px solid white;
  color: white;
  padding: 2px 20px;
  text-decoration: none;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 30px;
  transition: background-color 0.3s ease;
  font-family: 'Pangram', sans-serif;
}

.button-container button:hover {
  background-color: rgba(255, 255, 255, 0.3);
}

.button-container button:active {
  background-color: white;
  padding: 12px 22px;
  border: 2px solid white;
  color: #b77e37;
}
.bottom-panel {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: top;
  height: 200px;
  padding: 1rem;
  padding-top: 20px;
}

.image-container {
  margin: 0.5rem;
  width: calc(23.33% - 1rem);
  height: 100%;
  position: relative;

  max-width: 1300px;
}

.image-container img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.caption-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.first-three-words {
  font-size: 64px;
  font-weight: bold;
  color: #fff;
  font-size: 65px;
  font-family: 'Pangram', sans-serif;
  justify-content: center;
  padding-left: 60px;
  position: absolute;
  padding-top: 2px;
}

.caption-container {
  color: white;
  font-size: 20px;
  font-family: 'Pangram', 'sans-serif';
  text-align: center;
  margin-top: 80px;
}

.caption-container p {
  margin: 0;
}

.caption-container span {
  display: block;
}
</style>
