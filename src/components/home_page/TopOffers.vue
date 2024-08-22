<template>
  <div class="container-fluid my-1 bg-body-secondary p-5">
    <div class="row">
      <div class="col-sm-4 py-1" style="cursor: pointer">
        <img
          src="../../assets/images/playstations.webp"
          alt=""
          style="width: 100%"
        />
      </div>
      <div class="col-sm-4 py-1" style="cursor: pointer">
        <img
          src="../../assets/images/headset.webp"
          alt=""
          style="width: 100%"
        />
      </div>
      <div class="col-sm-4 py-1" style="cursor: pointer">
        <img src="../../assets/images/chairs.webp" alt="" style="width: 100%" />
      </div>
      <div class="col-sm-6 py-1" style="cursor: pointer">
        <img
          src="../../assets/images/iphones.webp"
          alt=""
          style="width: 100%"
        />
      </div>
      <div class="col-sm-6 py-1" style="cursor: pointer">
        <img
          src="../../assets/images/laptops.webp"
          alt=""
          style="width: 100%"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style scoped>
img {
  transition: all 0.7s;
}

img:hover {
  transform: scale(1.05);
}
</style>
