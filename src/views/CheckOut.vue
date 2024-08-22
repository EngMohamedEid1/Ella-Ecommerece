<template>
  <div class="checkout">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 col-sm-12 col-md-7 pt-2 billing">
          <h3
            style="
              font-weight: bolder;
              border: 1px solid black;
              border-radius: 7px;
              width: fit-content;
              padding: 5px;
            "
          >
            <router-link
              :to="{
                name: 'home',
              }"
              style="text-decoration: none"
            >
              <img
                style="
                  background-color: black;
                  padding: 5px 10px 5px 10px;
                  border-radius: 5px;
                "
                src="../assets/images/logo.png"
                alt=""
              />
            </router-link>
          </h3>
          <h5 class="pt-4" style="text-align: center; font-weight: bold">
            Chosse How TO Pay
          </h5>
          <div class="buttons d-flex justify-content-center pt-2 pb-4">
            <button class="btn btn-danger mx-3 w-25">SHOP Pay</button>
            <button class="btn btn-primary w-25">GO Pay</button>
          </div>
          <hr />
          <!-- <h5 class="pt-4" style="text-align: center; font-weight: bold">
            Shipping Address
          </h5> -->
          <div class="row">
            <div class="col-md-12 mb-4">
              <div class="card mb-4">
                <div class="card-header py-3">
                  <h5 class="mb-0">Biling details</h5>
                </div>
                <div class="card-body">
                  <form>
                    <!-- 2 column grid layout with text inputs for the first and last names -->
                    <div class="row mb-4">
                      <div class="col">
                        <div data-mdb-input-init class="form-outline">
                          <input
                            type="text"
                            id="form7Example1"
                            class="form-control"
                          />
                          <label class="form-label" for="form7Example1"
                            >First name</label
                          >
                        </div>
                      </div>
                      <div class="col">
                        <div data-mdb-input-init class="form-outline">
                          <input
                            type="text"
                            id="form7Example2"
                            class="form-control"
                          />
                          <label class="form-label" for="form7Example2"
                            >Last name</label
                          >
                        </div>
                      </div>
                    </div>

                    <!-- Text input -->
                    <div data-mdb-input-init class="form-outline mb-4">
                      <input
                        type="text"
                        id="form7Example3"
                        class="form-control"
                      />
                      <label class="form-label" for="form7Example3"
                        >Company name</label
                      >
                    </div>

                    <!-- Text input -->
                    <div data-mdb-input-init class="form-outline mb-4">
                      <input
                        type="text"
                        id="form7Example4"
                        class="form-control"
                      />
                      <label class="form-label" for="form7Example4"
                        >Address</label
                      >
                    </div>

                    <!-- Email input -->
                    <div data-mdb-input-init class="form-outline mb-4">
                      <input
                        type="email"
                        id="form7Example5"
                        class="form-control"
                      />
                      <label class="form-label" for="form7Example5"
                        >Email</label
                      >
                    </div>

                    <!-- Number input -->
                    <div data-mdb-input-init class="form-outline mb-4">
                      <input
                        type="number"
                        id="form7Example6"
                        class="form-control"
                      />
                      <label class="form-label" for="form7Example6"
                        >Phone</label
                      >
                    </div>

                    <!-- Message input -->
                    <div data-mdb-input-init class="form-outline mb-4">
                      <textarea
                        class="form-control"
                        id="form7Example7"
                        rows="4"
                      ></textarea>
                      <label class="form-label" for="form7Example7"
                        >Additional information</label
                      >
                    </div>

                    <!-- Checkbox -->
                    <div class="form-check d-flex justify-content-center mb-2">
                      <input
                        @click="showSuccessMessage()"
                        style="width: 200px; height: 50px"
                        class="form-check-input me-2 btn btn-primary"
                        type="button"
                        value="Continue To Shipping"
                        id="form7Example8"
                      />
                    </div>
                    <div
                      id="successMessage"
                      class="modal text-center"
                      style="display: none"
                    >
                      <div class="modal-content">
                        <!-- <span class="close">&times;</span> -->
                        <div class="success-message">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="48"
                            height="48"
                            fill="green"
                          >
                            <path
                              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                            />
                          </svg>
                          <h3>Your order was placed successfully!</h3>
                          <p>
                            Thank you for your purchase. Your order will be
                            processed shortly.
                          </p>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <hr />
            <small>all rights are reserved to new ell@2024</small>
          </div>
        </div>

        <div
          class="col-12 col-sm-12 col-md-5 pt-2 products order-first order-sm-first order-md-last"
          style="
            background-color: rgb(243 243 243);
            /* height: 100vh; */
            position: static;
            right: 0;
          "
        >
          <div class="item" v-for="item in cartItems" :key="item.id">
            <div
              class="d-flex align-items-start"
              style="
                background-color: aliceblue;
                margin-bottom: 15px;
                border-radius: 7px;
                padding: 20px;
              "
            >
              <div class="image">
                <img
                  style="border: 1px solid black; border-radius: 7px"
                  :src="item.thumbnail"
                  alt=""
                  width="50"
                  height="50"
                />
              </div>
              <div
                class="details"
                style="flex-grow: 1; padding-inline-start: 10px"
              >
                <div class="desc">
                  <h5 class="mb-0">{{ item.title }}</h5>
                  <p class="mb-0" style="color: black">{{ item.category }}</p>
                  <p class="mb-0">quantity : {{ item.quantity }}</p>
                </div>
                <p class="text-success">
                  Price : {{ Math.floor(item.quantity * (item.price - 1)) }} $
                </p>
              </div>
            </div>
          </div>
          <hr />
          <h4
            style="font-weight: bold"
            class="d-flex justify-content-between px-2"
          >
            <span>Total :</span> <span>{{ Math.floor(totalPrice) }} $</span>
          </h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import router from "@/router";
import { cartStore } from "@/store/cart";
import { mapState } from "pinia";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(cartStore, ["cartItems"]),
    // ...mapGetters(cartStore, ["totalPrice"]),
    totalPrice() {
      let total = 0;
      this.cartItems.forEach((item) => {
        total += (item.price - 1) * item.quantity;
      });
      return total;
    },
  },
  methods: {
    showSuccessMessage() {
      var modal = document.getElementById("successMessage");
      modal.style.display = "block";

      //   var span = document.getElementsByClassName("close")[0];
      //   span.onclick = function () {
      //     modal.style.display = "none";
      //   };

      window.onclick = function (event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      };
    },

    // ...mapActions(cartStore, ["totalPrice"]),
  },
};
</script>
<style scoped>
.modal {
  display: none;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
}

.modal-content {
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 30%;
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

/* media queries */
@media (max-width: 767px) {
  .modal-content {
    background-color: #fefefe;
    margin: 30% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 70%;
  }
  .billing h3 {
    display: none;
  }
}
</style>
