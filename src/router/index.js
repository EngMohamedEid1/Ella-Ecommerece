import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
// import ProductsCategory from "../views/ProductsCategory.vue"

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/products/:category/:title",
    name: "products category",
    component: () => import("@/views/ProductsCategory"),
  },
  {
    path: "/products/productDetails/:productId",
    name: "products details",
    component: () => import("@/views/ProductDetails"),
  },
  {
    path: "/cartPage",
    name: "cart page",
    component: () => import("@/views/CartPage"),
  },
  {
    path: "/checkout",
    name: "check_out",
    component: () => import("@/views/CheckOut.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    return {
      top: 0,
      behavior: "smooth",
    };
  },
});

export default router;
