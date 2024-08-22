<template>
  <div class="banner" style="overflow: hidden; margin-top: -20px">
    <div class="parent">
      <img src="../../assets/images/banner-bg.jpg" alt="" />
      <div class="row">
        <div class="col-6">
          <div class="cont">
            <h3>
              <span style="color: rgb(72, 235, 247)"> Huge Savings</span>
              on UHD televisions
            </h3>
            <p class="hint">Sale up to 70% off on selected items</p>
            <button
              class="btn btn-outline-light mt-4"
              style="border-radius: 25px"
            >
              Shop now
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.banner {
  width: 100%;

  margin-top: 120px;
}
.banner .parent {
  height: 400px;
  position: relative;
}
.banner img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.banner .cont {
  width: 500px;
  position: absolute;
  left: 40px;
  top: 40px;
  z-index: 2;
  color: #fff;
}

.banner .cont h3 {
  font-weight: 900;
  font-size: 45px;
}

.banner .hint {
  color: #fff;
  margin-top: 25px;
}

/* Media Queries */

@media (max-width: 990px) {
  .banner .cont h3 {
    font-size: 30px;
  }

  .banner .cont {
    width: 500px;
    position: absolute;
    left: 30px;
  }
}

@media (max-width: 767px) {
  .banner .parent {
    height: 320px;
    position: relative;
  }
  .banner .cont h3 {
    font-size: 25px;
  }

  .banner .cont {
    width: 400px;
    position: absolute;
    left: 30px;
  }
  .banner .hint {
    font-size: 14px;
  }
}

@media (max-width: 580px) {
  .banner .parent {
    height: 250px;
    position: relative;
  }
  .banner .cont h3 {
    font-size: 18px;
  }
  .banner .cont p {
    font-size: 14px;
  }

  .banner .cont {
    width: 200px;
    position: absolute;
    left: 30px;
  }
  .banner .hint {
    font-size: 14px;
  }
}
</style>
