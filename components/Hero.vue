<template>
  <div id="app">
    <main>
      <section class="hero">
        <swiper
          :modules="modules"
          :slides-per-view="1"
          :space-between="50"
          :pagination="{ clickable: true }"
          :autoplay="{
            delay: 2500,
            disableOnInteraction: false,
          }"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
          class="hero-swiper"
        >
          <!-- Slide 1 -->
          <swiper-slide>
            <div class="hero-image">
              <img src="~/assets/images/hero-image.png" alt="Hero Image 1" />
            </div>
          </swiper-slide>

          <!-- Slide 2 -->
          <swiper-slide>
            <div class="hero-image">
              <img src="~/assets/images/hero-image.png" alt="Hero Image 2" />
            </div>
          </swiper-slide>

          <!-- Slide 3 -->
          <swiper-slide>
            <div class="hero-image">
              <img src="~/assets/images/hero-image.png" alt="Hero Image 3" />
            </div>
          </swiper-slide>
        </swiper>
      </section>
    </main>
  </div>
</template>

<script>
// import Swiper core and required modules
import { Pagination, Autoplay } from "swiper/modules";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export default {
  name: "Default",
  data() {
    return {};
  },
  methods: {},
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination, Autoplay],
    };
  },
};
</script>

<style scoped>
.hero {
  min-height: 100vh;
  max-width: 95%;
  margin: 0 auto 6rem auto;
}

.swiper {
  max-width: 100%;
  margin-top: 2rem;
}

.hero-image img {
  width: 100%;
  height: auto;
  object-fit: cover;
}
@media (max-width: 850px) {
  .hero {
    margin-bottom: 0;
  }
}

@media (min-width: 588px) {
  .hero {
    min-height: 60vh;
  }
  .swiper {
    max-width: 87%;
  }
}

@media (max-width: 587px) {
  .hero {
    min-height: 40vh;
    margin-bottom: 0;
  }

  .swiper {
    max-width: 89%;
  }

  .hero-image img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
}
</style>
