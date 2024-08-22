<template>
  <div class="container-fluid" style="overflow: hidden; max-width: 100%">
    <nav
      class="navbar fixed-top w-100"
      style="background-color: #0a0a99; height: fit-content; max-width: 100%"
    >
      <div class="row" style="width: 100%; padding-left: 20px">
        <div class="col-3">
          <a
            class="navbar-brand"
            href="#"
            @click="$router.push({ name: 'home' })"
          >
            <img src="@/assets/images/logo.png" alt="" />
          </a>
        </div>
        <div class="col-5">
          <input
            type="search"
            name="navSearch"
            id="navSearch"
            class="py-2 px-5"
            placeholder="Search the store"
            style="width: 90%; border-radius: 30px; outline: none"
          />
        </div>
        <div class="col-4">
          <div
            class="parent text-white d-flex justify-content-between text-center"
          >
            <div class="available">
              <span>Available 24/7 at</span>
              <br />
              <strong>(090) 123-4567</strong>
            </div>
            <div class="whishlists d-flex align-items-center flex-column">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25px"
                fill="#ffb547"
                viewBox="0 0 512 512"
              >
                <path
                  d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"
                />
              </svg>

              <span>wish lists</span>
            </div>
            <div class="whishlists d-flex align-items-center flex-column">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                class="icon icon-account"
                viewBox="0 0 1024 1024"
                width="25"
                fill="#ffb547"
              >
                <title>user</title>
                <path
                  class="path1"
                  d="M486.4 563.2c-155.275 0-281.6-126.325-281.6-281.6s126.325-281.6 281.6-281.6 281.6 126.325 281.6 281.6-126.325 281.6-281.6 281.6zM486.4 51.2c-127.043 0-230.4 103.357-230.4 230.4s103.357 230.4 230.4 230.4c127.042 0 230.4-103.357 230.4-230.4s-103.358-230.4-230.4-230.4z"
                ></path>
                <path
                  class="path2"
                  d="M896 1024h-819.2c-42.347 0-76.8-34.451-76.8-76.8 0-3.485 0.712-86.285 62.72-168.96 36.094-48.126 85.514-86.36 146.883-113.634 74.957-33.314 168.085-50.206 276.797-50.206 108.71 0 201.838 16.893 276.797 50.206 61.37 27.275 110.789 65.507 146.883 113.634 62.008 82.675 62.72 165.475 62.72 168.96 0 42.349-34.451 76.8-76.8 76.8zM486.4 665.6c-178.52 0-310.267 48.789-381 141.093-53.011 69.174-54.195 139.904-54.2 140.61 0 14.013 11.485 25.498 25.6 25.498h819.2c14.115 0 25.6-11.485 25.6-25.6-0.006-0.603-1.189-71.333-54.198-140.507-70.734-92.304-202.483-141.093-381.002-141.093z"
                ></path>
              </svg>

              <span>sign in</span>
            </div>
            <!-- <button type="button" class="btn btn-primary position-relative">
  Inbox
  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    99+
    <span class="visually-hidden">unread messages</span>
  </span>
</button> -->
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

              <span class="text-white" style="font-weight: 400">cart</span>
            </div>
          </div>
        </div>
        <div class="row my-2">
          <div class="col-8 d-flex align-items-center">
            <ul
              class="d-flex text-white justify-content-between mb-0"
              style="list-style: none; gap: 30px"
            >
              <li v-for="cat in categories" :key="cat.title" class="">
                <router-link
                  :to="{
                    name: 'products category',
                    params: { category: cat.route, title: cat.title },
                  }"
                  class="text-decoration-none text-white"
                  style="font-weight: 400"
                >
                  {{ cat.title }}
                </router-link>
              </li>
            </ul>
          </div>
          <!-- <div class="col-2"></div> -->
          <div
            class="col-4 d-flex justify-content-end align-items-center"
            style="gap: 25px"
          >
            <div
              class="help text-white d-flex align-items-center"
              style="gap: 5px"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                width="20"
                data-prefix="fas"
                data-icon="user-headset"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                class="svg-inline--fa fa-user-headset fa-w-14 fa-3x"
              >
                <path
                  fill="#0d6efd"
                  d="M320 352h-23.1a174.08 174.08 0 0 1-145.8 0H128A128 128 0 0 0 0 480a32 32 0 0 0 32 32h384a32 32 0 0 0 32-32 128 128 0 0 0-128-128zM48 224a16 16 0 0 0 16-16v-16c0-88.22 71.78-160 160-160s160 71.78 160 160v16a80.09 80.09 0 0 1-80 80h-32a32 32 0 0 0-32-32h-32a32 32 0 0 0 0 64h96a112.14 112.14 0 0 0 112-112v-16C416 86.13 329.87 0 224 0S32 86.13 32 192v16a16 16 0 0 0 16 16zm160 0h32a64 64 0 0 1 55.41 32H304a48.05 48.05 0 0 0 48-48v-16a128 128 0 0 0-256 0c0 40.42 19.1 76 48.35 99.47-.06-1.17-.35-2.28-.35-3.47a64.07 64.07 0 0 1 64-64z"
                ></path>
              </svg>
              <span>help</span>
            </div>

            <div class="dropdown">
              <a
                class="btn"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                style="outline: none; border: none"
                aria-expanded="false"
              >
                <div
                  class="lang text-white d-flex align-items-center"
                  style="gap: 5px; cursor: pointer"
                >
                  <span class="">
                    language
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#fff"
                        width="20"
                        height="20"
                        viewBox="0 0 512 512"
                      >
                        !Font Awesome Free 6.5.1 by @fontawesome -
                        https://fontawesome.com License -
                        https://fontawesome.com/license/free Copyright 2024
                        Fonticons, Inc.
                        <path
                          d="M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z"
                        />
                      </svg>
                    </span>
                  </span>
                </div>
              </a>

              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">AR</a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">EN</a>
                </li>
                <!-- <li><a class="dropdown-item" href="#">FR</a></li> -->
              </ul>
            </div>
          </div>
        </div>
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
    // changeDir(dir) {
    //   localStorage.setItem("lang", dir);
    //   if (dir == "rtl") {
    //     document.body.classList.add("rtl");
    //     // document.documentElement.dir = "rtl";
    //   } else {
    //     document.body.classList.remove("rtl");
    //   }
    // },
    toCheckOut() {
      this.$router.push({
        name: "check_out",
      });
    },
  },
  mounted() {
    this.getCartItems();
    // console.log(document.body);
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
