import { defineStore } from "pinia";
import axios from "axios";

export const productsModule = defineStore("productsModule", {
  state: () => ({
    flashDeals: [],
    CategoryProducts: [],
    mobilePhones: [],
    fragrances: [],
    groceries: [],
    SingleProduct: [],
    categories: [
      {
        title: "Smartphones",
        route: "smartphones",
      },
      {
        title: "laptops",
        route: "laptops",
      },
      {
        title: "Furniture",
        route: "furniture",
      },
      {
        title: "Groceries",
        route: "groceries",
      },
      {
        title: "Men's watches",
        route: "mens-watches",
      },
      {
        title: "Women's bags",
        route: "womens-bags",
      },
      {
        title: "Motorcycle",
        route: "motorcycle",
      },
    ],
  }),
  actions: {
    async getProducts() {
      await axios
        .get("https://dummyjson.com/products")
        .then((res) => {
          this.flashDeals = res.data.products.slice(0, 12);

          this.mobilePhones = res.data.products.filter(
            (el) => el.category === "smartphones"
          );
          this.fragrances = res.data.products.filter(
            (el) => el.category === "fragrances"
          );
          this.groceries = res.data.products.filter(
            (el) => el.category === "groceries"
          );
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async getProductsByCategory(category) {
      await axios
        .get(`https://dummyjson.com/products/category/${category}`)
        .then((res) => {
          this.CategoryProducts = res.data.products;
          console.log(this.CategoryProducts);
        });
    },
    async getSingleProduct(productId) {
      await axios
        .get(`https://dummyjson.com/products/${productId}`)
        .then((res) => {
          this.SingleProduct = res.data;
          console.log(this.SingleProduct);
        });
    },
  },
});
