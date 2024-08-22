<template>
  <div class="container-fluid">
    <h1
      class="text-danger text-center"
      style="font-weight: bold; padding-bottom: 40px"
    >
      {{ $route.params.title }}
    </h1>
    <div class="container-fluid">
      <!-- start placeholder -->

      <div class="row" v-if="loading">
        <div class="col-3 px-4" v-for="num in 4" :key="num">
          <div
            class="card"
            aria-hidden="true"
            style="border: none; height: 250px"
          >
            <span class="placeholder col-12" style="height: 200px"></span>
            <!-- <img src="" class="card-img-top placeholder" alt="" /> -->
            <div class="card-body">
              <h5 class="card-title placeholder-glow">
                <span class="placeholder col-6"></span>
              </h5>

              <span
                class="btn btn-dark placeholder-glow disabled col-4 p-2 d-block mx-auto"
              ></span>
            </div>
          </div>
        </div>
      </div>

      <!-- end placeholder -->

      <div class="row" v-if="!loading">
        <div
          class="col-sm-6 col-md-4 col-lg-3 col-12"
          v-for="item in CategoryProducts"
          :key="item.id"
        >
          <div class="my-2 py-3 px-sm-2 px-4" style="cursor: pointer">
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

            <div
              class="cart-footer d-flex justify-content-between align-items-center"
            >
              <div class="rating">
                <div
                  v-for="star in 5"
                  :key="star"
                  class="rating d-inline-block"
                >
                  <span v-if="star <= item.rating" class="star">★</span>
                  <span v-else class="star">☆</span>
                </div>
              </div>
              <div class="" style="padding-top: 12px; padding-right: 10px">
                <p>
                  <!-- <del class="px-2"> ${{ item.price }}</del> -->
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { productsModule } from "@/store/products";
import { mapActions, mapState } from "pinia";

export default {
  data() {
    return {
      loading: false,
    };
  },
  methods: {
    ...mapActions(productsModule, ["getProductsByCategory"]),
  },
  computed: {
    ...mapState(productsModule, ["CategoryProducts"]),
  },
  watch: {
    async $route() {
      // console.log(newval);
      this.loading = true;
      await this.getProductsByCategory(this.$route.params.category);
      this.loading = false;
    },
  },
  async mounted() {
    this.loading = true;
    await this.getProductsByCategory(this.$route.params.category);
    this.loading = false;
    // await this.getProductsByCategory(this.$route.params.category);
  },
};
</script>
