<template>
  <div class="flash-deals container-fluid mt-5">
    <div class="title d-flex align-items-center justify-content-between px-5">
      <h2 class="pb-4" :style="{ color: titleColor }" style="font-weight: 900">
        {{ title }}
      </h2>
      <a href="#" style="color: black"> shop all </a>
    </div>

    <!-- start placeholder -->

    <div class="row" v-if="!products.length">
      <div class="col-3 px-4" v-for="num in 4" :key="num">
        <div
          class="card"
          aria-hidden="true"
          style="border: none; height: 250px"
        >
          <img src="" class="card-img-top placeholder" alt="" />
          <div class="card-body">
            <h5 class="card-title placeholder-glow">
              <span class="placeholder col-6"></span>
            </h5>
            <p class="card-text placeholder-glow">
              <span class="placeholder col-7"></span>
              <span class="placeholder col-4"></span>
              <span class="placeholder col-4"></span>
              <span class="placeholder col-6"></span>
              <span class="placeholder col-8"></span>
            </p>
            <span
              class="btn btn-dark placeholder-glow disabled col-4 p-2 d-block mx-auto"
            ></span>
          </div>
        </div>
      </div>
    </div>

    <!-- end placeholder -->
    <swiper
      :slides-per-view="4"
      :space-between="30"
      :pagination="{
        clickable: true,
        // el: '.swiper-pagination',
      }"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }"
      :navigation="true"
      :modules="modules"
      :loop="false"
      :breakpoints="breakpoints"
      class="mySwiper pb-5"
    >
      <swiper-slide v-for="item in products" :key="item.id">
        <div class="my-2 py-3 px-3" style="cursor: pointer">
          <img
            :src="item.thumbnail"
            class="w-100"
            style="height: 250px; border-radius: 7px"
          />
          <p class="mb-0 mt-1">
            {{
              item.description.length <= 20
                ? item.description
                : item.description.slice(0, 20) + " ..."
            }}
          </p>
          <div class="cart-footer d-flex justify-content-between">
            <div class="rating">
              <div v-for="star in 5" :key="star" class="rating d-inline-block">
                <span v-if="star <= item.rating" class="star">★</span>
                <span v-else class="star">☆</span>
              </div>
            </div>
            <div class="" style="padding-top: 12px; padding-right: 10px">
              <p>
                <del class="px-2"> ${{ item.price }}</del>
                <span class="text-danger"
                  >${{ Math.floor(item.price - 1) }}
                </span>
              </p>
            </div>
          </div>
          <button
            type="button"
            class="btn btn-outline-dark rounded-pill d-block text-center mx-auto"
            style="width: fit-content"
            @click="
              $router.push({
                name: 'products details',
                params: { productId: item.id },
              })
            "
          >
            choose options
          </button>
        </div>
      </swiper-slide>
      <!-- <div class="swiper-prev"></div>
        <div class="swiper-next"></div>
        <div class="swiper-pagination"></div> -->
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
export default {
  data() {
    return {
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        580: {
          slidesPerView: 2,
        },
        767: {
          slidesPerView: 3,
        },
        // 1200: {
        //   slidesPerView: 5,
        // },
      },
    };
  },
  props: ["products", "title", "titleColor"],
  setup() {
    return {
      modules: [Autoplay, Pagination, Navigation],
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
};
</script>

<style>
/* .mySwiper {
 
  height: 500px;
} */
.rating {
  color: #ffd600;
  /* Color for golden stars */
}

.star {
  font-size: 20px;
}

.flash-deals img {
  transition: all 0.7s;
}

.flash-deals img:hover {
  transform: scale(1.05);
}

/* swiper */

/* Custom styles for Swiper navigation buttons */
.swiper-button-prev,
.swiper-button-next {
  width: 35px !important;
  height: 35px !important;
  background-color: #fff !important;
  border: 2px solid rgb(95, 95, 95) !important;
  border-radius: 50% !important;
  top: 45% !important;
}

.swiper-button-prev::after,
.swiper-button-next::after {
  font-size: 13px !important;
  padding: 0 !important;
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  color: rgb(53, 53, 53) !important;
  font-weight: 900 !important;
}
</style>
