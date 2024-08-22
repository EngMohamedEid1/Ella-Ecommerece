<template>
  <div class="layout">
    <AppNav v-if="winWidth > 990"></AppNav>
    <ResponsiveNav v-if="winWidth <= 990"> </ResponsiveNav>
    <div
      class="main"
      :style="`padding-top : ${winWidth <= 990 ? '70px' : '140px'}`"
    >
      <slot></slot>
    </div>
    <AppFooter v-if="$route.name != 'check_out'"></AppFooter>
    <!-- <CartDrawer></CartDrawer> -->
  </div>
</template>

<script>
import AppNav from "./AppNav.vue";
import AppFooter from "./AppFooter.vue";
import ResponsiveNav from "./ResponsiveNav.vue";
// import CartDrawer from './CartDrawer.vue';

export default {
  data() {
    return {
      winWidth: 0,
    };
  },
  components: {
    AppFooter,
    AppNav,
    // CartDrawer
    ResponsiveNav,
  },
  methods: {},
  mounted() {
    this.winWidth = window.innerWidth;
    window.onresize = () => {
      this.winWidth = window.innerWidth;
    };
    console.log("this is window", this.winWidth);
  },
};
</script>
