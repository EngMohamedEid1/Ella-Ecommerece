<template>
  <div class="top-cats mt-5">
    <div class="cyber-banner">
      <img src="../../assets/images/cyber-banner.webp" class="w-100" alt="" />
    </div>
    <div class="categories pt-5">
      <div class="title d-flex justify-content-center align-items-center px-5">
        <h2 class="text-center flex-grow-1">Top Categories</h2>
        <a href="" class="text-dark">Shop All</a>
      </div>
      <div class="container-fluid">
        <div class="row pt-4">
          <div
            class="col-12 col-sm-6 col-md-4 col-lg-3 pt-4"
            v-for="cat in categories"
            :key="cat.title"
          >
            <div class="cat text-center">
              <img :src="cat.image" alt="" style="cursor: pointer" />
              <p class="pt-2">{{ cat.title }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: [
        {
          title: "Mobile Phones",
          image:
            "https://new-ella-demo.myshopify.com/cdn/shop/files/laptops-tablets.png?v=17546078654541140209",
        },
        {
          title: "Labtops",
          image:
            "https://new-ella-demo.myshopify.com/cdn/shop/files/televisions.png?v=792225267698738137",
        },
        {
          title: "TVS",
          image:
            "https://new-ella-demo.myshopify.com/cdn/shop/files/pcs-accessories.png?v=7913320403362682840",
        },
        {
          title: "PCs",
          image:
            "https://new-ella-demo.myshopify.com/cdn/shop/files/audio-video.png?v=17118273463527967791",
        },
        {
          title: "Audio & Video",
          image:
            "https://new-ella-demo.myshopify.com/cdn/shop/files/audio-video.png?v=17118273463527967791",
        },
        {
          title: "Gaming",
          image:
            "https://new-ella-demo.myshopify.com/cdn/shop/files/gaming-accessories.png?v=5365032838061682635",
        },
        {
          title: "Home Appliances",
          image:
            "https://new-ella-demo.myshopify.com/cdn/shop/files/home-appliances.png?v=4122646624966862882",
        },
        {
          title: "Kitchen",
          image:
            "https://new-ella-demo.myshopify.com/cdn/shop/files/kitchen-appliances.png?v=912885117927234410",
        },
        {
          title: "Cameras",
          image:
            "https://new-ella-demo.myshopify.com/cdn/shop/files/cameras.png?v=10468174360605840515",
        },
        {
          title: "Consumables",
          image:
            "https://new-ella-demo.myshopify.com/cdn/shop/files/consumables.png?v=1604898607781595964",
        },
        {
          title: "Smart Homes",
          image:
            "https://new-ella-demo.myshopify.com/cdn/shop/files/smart-homes.png?v=11511407578445752828",
        },
        {
          title: "Accessories",
          image:
            "https://new-ella-demo.myshopify.com/cdn/shop/files/accessories.png?v=16090558546215869367",
        },
      ],
    };
  },
};
</script>
