<template>
  <div class="product-details">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 col-sm-12 col-md-7 text-center">
          <img :src="SingleProduct.thumbnail" class="w-75" alt="" />
        </div>
        <div class="col-12 col-sm-12 col-md-5">
          <h5>
            ({{ SingleProduct.title }}) Sample -
            {{ SingleProduct.category }} For Sale
          </h5>
          <div
            class="d-flex align-items-center justify-content-between"
            style="gap: 20px"
          >
            <div class="rate">
              <div v-for="star in 5" :key="star" class="rating d-inline-block">
                <span v-if="star <= SingleProduct.rating" class="star">★</span>
                <span v-else class="star">☆</span>
              </div>
            </div>
            <span
              class="mt-1 flex-grow-1"
              style="font-size: 13px; color: rgb(96, 96, 96)"
            >
              Stock : {{ SingleProduct.stock }}
            </span>
          </div>
          <p class="px-0 mt-3" style="font-size: 13px; color: rgb(96, 96, 96)">
            {{ SingleProduct.description }}
          </p>
          <p class="px-0 mt-3" style="font-size: 13px; color: rgb(96, 96, 96)">
            Brand : {{ SingleProduct.brand }}
          </p>
          <p class="px-0 mt-3" style="font-size: 13px; color: rgb(96, 96, 96)">
            Availability :
            {{ SingleProduct.stock > 0 ? "In Stock" : "Out of Stock" }}
          </p>
          <div class="" style="padding-top: 12px; padding-right: 10px">
            <del> ${{ SingleProduct.price }}</del> to
            <span class="text-danger">${{ SingleProduct.price - 1 }} </span>
          </div>
          <p class="mt-4">Quantity</p>
          <div
            class="counter mt-3 px-2 d-flex justify-content-center align-items-center"
            style="
              border-radius: 30px;
              border: 1px solid rgb(153, 153, 153);
              width: fit-content;
              text-align: center;
            "
          >
            <svg
              @click="quantity > 1 ? quantity-- : false"
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              viewBox="0 0 448 512"
            >
              <path
                d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"
              />
            </svg>
            <input
              type="number"
              style="border: none; outline: none; width: 60px"
              class="py-2 text-center"
              v-model="quantity"
            />

            <svg
              @click="quantity++"
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              viewBox="0 0 448 512"
            >
              <path
                d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
              />
            </svg>
          </div>
          <br />
          <p class="text-danger">
            <span class="text-dark"> Subtotal : </span> $
            {{ Math.ceil(quantity * (SingleProduct.price - 1)) }}
          </p>
          <button
            class="btn mt-4 btn-dark w-75 text-white pt-2"
            style="text-transform: none; border-radius: 30px"
            @click="addToCart(SingleProduct)"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { cartStore } from "@/store/cart";
import { productsModule } from "@/store/products";
import { mapActions, mapState } from "pinia";
export default {
  data() {
    return {
      quantity: 1,

      //
      product: {
        id: 1,
        title: "iPhone 9",
        description: "An apple mobile which is nothing like apple",
        price: 549,
        discountPercentage: 12.96,
        rating: 4.69,
        stock: 94,
        brand: "Apple",
        category: "smartphones",
        thumbnail: "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
        images: [
          "https://cdn.dummyjson.com/product-images/1/1.jpg",
          "https://cdn.dummyjson.com/product-images/1/2.jpg",
          "https://cdn.dummyjson.com/product-images/1/3.jpg",
          "https://cdn.dummyjson.com/product-images/1/4.jpg",
          "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
        ],
      },
    };
    //
  },
  methods: {
    ...mapActions(productsModule, ["getSingleProduct"]),
    ...mapActions(cartStore, ["addItem"]),
    addToCart(item) {
      item.quantity = this.quantity;
      this.addItem(item);
    },
  },
  computed: {
    ...mapState(productsModule, ["SingleProduct"]),
  },
  async beforeMount() {
    await this.getSingleProduct(this.$route.params.productId);
  },
};
</script>
<style>
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
