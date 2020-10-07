<template>
  <div class="container">
    <div class="row">
      <div class="d-none d-lg-block col-12 col-lg-5 my-auto">
        <h5>Harga Bersaing</h5>
        <p>Kami memberikan tarif pengiriman terbaik yang tersedia dengan layanan penjemputan gratis</p>
      </div>
      <div class="d-none d-lg-block col-12 col-lg-7">
        <img src="../../../assets/img/competitive-price.svg" alt />
      </div>
    </div>
    <!-- Mobile Version -->
    <div class="row">
      <div class="d-block d-lg-none col-12">
        <img src="../../../assets/img/competitive-price.svg" alt />
      </div>
      <div class="d-block d-lg-none col-12 my-auto">
        <h5>Harga Bersaing</h5>
        <p>Kami memberikan tarif pengiriman terbaik yang tersedia dengan layanan penjemputan gratis</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CompetitivePrice",
  components: {},
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.col-lg-5 h5 {
  font-weight: bold;
  color: #1c1d1d;
  font-size: 2.5rem;
  margin: 0;
}

.col-lg-5 p {
  font-weight: normal;
  color: #313131;
  font-size: 1.25rem;
}

@media (max-width: 768px) {
  .row .col-12 {
    text-align: center;
  }
  .col-12 img {
    width: 90%;
  }

  .col-12 h5 {
    font-weight: bold;
    color: #1c1d1d;
    font-size: 1.125rem;
    margin: 0.5rem;
  }

  .col-12 p {
    font-weight: normal;
    color: #313131;
    font-size: 0.875rem;
  }
}
</style>
