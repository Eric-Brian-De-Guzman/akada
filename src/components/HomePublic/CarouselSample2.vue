<template>
  <div class="carousel-container">
    <div class="carousel-row">
      <div class="carousel-column">
        <!-- First carousel item -->
        <div class="carousel-item1" v-show="currentIndex === 0">
          <!-- Content for the first item -->
          <h3>Carousel Item 1</h3>
          <p>Content for Carousel Item 1</p>
        </div>
      </div>
      <div class="carousel-column">
        <!-- Second carousel item -->
        <div class="carousel-item2" v-show="currentIndex === 1">
          <!-- Content for the second item -->
          <h3>Carousel Item 2</h3>
          <p>Content for Carousel Item 2</p>
        </div>
      </div>
      <div class="carousel-column">
        <!-- Third carousel item -->
        <div class="carousel-item3" v-show="currentIndex === 2">
          <!-- Content for the third item -->
          <h3>Carousel Item 3</h3>
          <img src="src/assets/pics-1.jpg" alt="" />
          <p>Content for Carousel Item 3</p>
        </div>
      </div>
    </div>
    <!-- Dot slider -->
    <div class="carousel-dots">
      <span
        v-for="(item, index) in items"
        :key="index"
        class="dot"
        :class="{ active: index === currentIndex }"
        @click="goTo(index)"
      ></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CarouselSample',
  data() {
    return {
      currentIndex: 0, // Current index of the active carousel item
      items: [0, 1, 2] // Array of carousel item indices
    }
  },
  methods: {
    goTo(index) {
      this.currentIndex = index
    }
  }
}
</script>

<style scoped>
.carousel-container {
  /* Set desired width for the carousel container */
  width: 100%;
  overflow: hidden;
}

.carousel-row {
  display: flex;
  /* Set desired height for the carousel row */
  height: 300px;
}

.carousel-column {
  flex: 1;
  padding: 0 10px;
}

.carousel-item1 {
  /* Set desired styles for carousel item */
  background-color: #e0e0e0;
  padding: 20px;
  height: 100%;
}
.carousel-item2 {
  /* Set desired styles for carousel item */
  background-color: #e0e0e0;
  padding: 20px;
  height: 100%;
}
.carousel-item3 {
  /* Set desired styles for carousel item */
  background-color: #e0e0e0;
  padding: 20px;
  height: 100%;
}
.carousel-dots {
  margin-top: 10px;
  text-align: center;
}

.dot {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #ccc;
  margin: 0 5px;
  cursor: pointer;
}

.dot.active {
  background-color: #333;
}
</style>
