<template>
  <div class="res-nav">
    <nav class="navbar bg-light fixed-top">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar1"
          aria-controls="offcanvasNavbar1"
        >
          <span style="width: 20px" class="navbar-toggler-icon"></span>
        </button>
        <img
          style="
            background-color: black;
            padding: 5px 10px 5px 10px;
            border-radius: 5px;
          "
          src="../../assets/images/logo.png"
          alt=""
        />
        <div
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
          class="whishlists d-flex navbar-toggler align-items-center flex-column position-relative ps-0 pe-0"
          :style="`pointer-events:${
            $route.name == 'cart page' ? 'none' : 'unset'
          }`"
          style="width: 35px; cursor: pointer"
        >
          <span
            v-if="cartItems.length"
            class="position-absolute rounded-circle bg-danger text-light"
            style="
              font-size: 13px;
              width: 18px;
              height: 18px;
              right: 0;
              top: -4px;
              display: flex;
              justify-content: center;
              align-items: center;
            "
          >
            {{ cartItems.length }}
            <span class="visually-hidden">unread messages</span>
          </span>
          <svg
            viewBox="0 0 1024 1024"
            xmlns="http://www.w3.org/2000/svg"
            width="22px"
            fill="#ffb547"
          >
            <path
              class="path1"
              d="M409.6 1024c-56.464 0-102.4-45.936-102.4-102.4s45.936-102.4 102.4-102.4S512 865.136 512 921.6 466.064 1024 409.6 1024zm0-153.6c-28.232 0-51.2 22.968-51.2 51.2s22.968 51.2 51.2 51.2 51.2-22.968 51.2-51.2-22.968-51.2-51.2-51.2z"
            ></path>
            <path
              class="path2"
              d="M768 1024c-56.464 0-102.4-45.936-102.4-102.4S711.536 819.2 768 819.2s102.4 45.936 102.4 102.4S824.464 1024 768 1024zm0-153.6c-28.232 0-51.2 22.968-51.2 51.2s22.968 51.2 51.2 51.2 51.2-22.968 51.2-51.2-22.968-51.2-51.2-51.2z"
            ></path>
            <path
              class="path3"
              d="M898.021 228.688C885.162 213.507 865.763 204.8 844.8 204.8H217.954l-5.085-30.506C206.149 133.979 168.871 102.4 128 102.4H76.8c-14.138 0-25.6 11.462-25.6 25.6s11.462 25.6 25.6 25.6H128c15.722 0 31.781 13.603 34.366 29.112l85.566 513.395C254.65 736.421 291.929 768 332.799 768h512c14.139 0 25.6-11.461 25.6-25.6s-11.461-25.6-25.6-25.6h-512c-15.722 0-31.781-13.603-34.366-29.11l-12.63-75.784 510.206-44.366c39.69-3.451 75.907-36.938 82.458-76.234l34.366-206.194c3.448-20.677-1.952-41.243-14.813-56.424zm-35.69 48.006l-34.366 206.194c-2.699 16.186-20.043 32.221-36.39 33.645l-514.214 44.714-50.874-305.246h618.314c5.968 0 10.995 2.054 14.155 5.782 3.157 3.73 4.357 9.024 3.376 14.912z"
            ></path>
          </svg>

          <!-- <span class="text-white" style="font-weight: 400">cart</span> -->
        </div>

        <!-- menu canvas -->

        <div
          class="offcanvas offcanvas-end"
          tabindex="-1"
          id="offcanvasNavbar1"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li
                class="nav-item py-2"
                v-for="cat in categories"
                :key="cat.route"
              >
                <router-link
                  :to="{
                    name: 'products category',
                    params: {
                      title: cat.title,
                      category: cat.route,
                    },
                  }"
                >
                  {{ cat.title }}
                </router-link>
              </li>
            </ul>
            <form class="d-flex mt-3" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>

        <!-- cart canvas  -->

        <div
          class="offcanvas offcanvas-end"
          tabindex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
              Shopping Cart
            </h5>

            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body">
            <div
              class="items d-flex justify-content-between align-items-center mb-3"
            >
              <p class="text-secondary mb-0">{{ cartItems.length }} items</p>
              <div class="total-price text-success">
                Total Price : $ {{ Math.ceil(calcTotalPrice) }}
              </div>
            </div>
            <p class="text-secondary" v-if="!cartItems.length">
              Free shipping for all orders over $800
            </p>
            <p class="text-secondary text-center py-4" v-if="!cartItems.length">
              Your cart is empty
            </p>
            <button
              class="w-75 text-center d-block mx-auto rounded-pill outline-none bg-light p-2"
              style="border-color: rgb(235, 235, 235)"
              v-if="!cartItems.length"
              type="button"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            >
              Continue Shopping
            </button>
            <div class="container-fluid">
              <div
                class="row py-3 align-items-center"
                v-for="item in cartItems"
                :key="item.id"
                style="border-bottom: 1px solid rgb(149, 148, 148)"
              >
                <div class="col-4">
                  <img class="w-100" :src="item.thumbnail" alt="" />
                </div>
                <div class="col-8">
                  <h6>{{ item.title }}</h6>
                  <p class="text-secondary">Category : {{ item.category }}</p>
                  <p class="text-danger">
                    <span class="text-dark"> Subtotal : </span> $
                    {{ Math.floor(item.quantity * (item.price - 1)) }}
                  </p>
                  <div
                    class="cart-footer d-flex align-items-center mt-3 justify-content-between"
                  >
                    <div
                      class="counter px-2 d-flex justify-content-center align-items-center"
                      style="
                        border-radius: 30px;
                        border: 1px solid rgb(153, 153, 153);
                        width: fit-content;
                        text-align: center;
                      "
                    >
                      <svg
                        @click="item.quantity > 1 ? item.quantity-- : false"
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
                        v-model="item.quantity"
                      />

                      <svg
                        @click="item.quantity++"
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        viewBox="0 0 448 512"
                      >
                        <path
                          d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
                        />
                      </svg>
                    </div>
                    <svg
                      style="cursor: pointer"
                      width="16"
                      height="16"
                      @click="deleteItem(item.id)"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path
                        d="M170.5 51.6L151.5 80h145l-19-28.4c-1.5-2.2-4-3.6-6.7-3.6H177.1c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80H368h48 8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8V432c0 44.2-35.8 80-80 80H112c-44.2 0-80-35.8-80-80V128H24c-13.3 0-24-10.7-24-24S10.7 80 24 80h8H80 93.8l36.7-55.1C140.9 9.4 158.4 0 177.1 0h93.7c18.7 0 36.2 9.4 46.6 24.9zM80 128V432c0 17.7 14.3 32 32 32H336c17.7 0 32-14.3 32-32V128H80zm80 64V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <button
              @click="toCheckOut()"
              class="w-75 text-center d-block mx-auto rounded-pill outline-none bg-primary text-white mt-4 p-2 mb-3"
              style="
                border-color: rgba(var(--bs-primary-rgb), var(--bs-bg-opacity));
              "
              v-if="cartItems.length"
            >
              Checkout
            </button>
            <button
              class="w-75 text-center d-block mx-auto rounded-pill outline-none bg-light p-2"
              style="border-color: rgb(235, 235, 235)"
              v-if="cartItems.length"
              type="button"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
import { productsModule } from "@/store/products";
import { cartStore } from "@/store/cart";
import { mapState, mapActions } from "pinia";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(productsModule, ["categories"]),
    ...mapState(cartStore, ["cartItems"]),
    calcTotalPrice() {
      let total = 0;
      this.cartItems.forEach((item) => {
        total += Math.floor(item.quantity * (item.price - 1));
      });
      return total;
    },
  },
  methods: {
    ...mapActions(cartStore, ["getCartItems", "deleteItem"]),
    toCheckOut() {
      this.$router.push({
        name: "check_out",
      });
    },
  },
  mounted() {
    this.getCartItems();
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
