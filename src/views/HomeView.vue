<template>
  <div class="home">
    <UpperBanner></UpperBanner>
    <TopOffers></TopOffers>
    <flashDeals
      :products="flashDeals"
      :title="'FlashDeals'"
      :titleColor="'red'"
    >
    </flashDeals>
    <TopCat></TopCat>
    <QualityFeatures></QualityFeatures>
    <!-- <flashDeals
      :products="mobilePhones"
      :title="'Smart Phones'"
      :titleColor="'#4b4747'"
    >
    </flashDeals> -->
    <div class="container-fluid">
      <div class="row">
        <div class="left-img col-sm-6 col-xs-12">
          <img
            class="w-100"
            src="../assets/images/band-left-cover.webp"
            alt=""
          />
        </div>
        <div class="right-img col-sm-6 col-xs-12">
          <img
            class="w-100"
            src="../assets/images/band-right-cover.webp"
            alt=""
          />
        </div>
      </div>
    </div>
    <flashDeals
      :products="fragrances"
      :title="'fragrances'"
      :titleColor="'#4b4747'"
    >
    </flashDeals>
    <div class="container-fluid mt-5">
      <img src="../assets/images/tv-banner.webp" class="w-100" alt="" />
    </div>
    <flashDeals
      :products="groceries"
      :title="'groceries'"
      :titleColor="'#4b4747'"
    >
    </flashDeals>
  </div>
</template>

<script>
// @ is an alias to /src
import UpperBanner from "@/components/home_page/UpperBanner.vue";
import TopOffers from "@/components/home_page/TopOffers.vue";
import flashDeals from "@/components/home_page/flashDeals.vue";
import TopCat from "@/components/global/TopCat.vue";
import QualityFeatures from "@/components/home_page/QualityFeatures.vue";
// pinia
import { productsModule } from "@/store/products.js";
import { mapActions, mapState } from "pinia";

export default {
  name: "HomeView",
  components: {
    UpperBanner,
    TopOffers,
    flashDeals,
    TopCat,
    QualityFeatures,
  },
  methods: {
    ...mapActions(productsModule, ["getProducts"]),
  },
  computed: {
    ...mapState(productsModule, [
      "flashDeals",
      "NewProducts",
      "mobilePhones",
      "fragrances",
      "groceries",
    ]),
  },
  async mounted() {
    await this.getProducts();
  },
};
</script>
