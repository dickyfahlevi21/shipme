<template>
  <div class="container mb-4">
    <div class="row">
      <div class="col-12 col-lg-7">
        <img src="../../../assets/img/shipping-consul.svg" alt />
      </div>
      <div class="col-12 col-lg-5 my-auto">
        <h5>Konsultasi Pengiriman</h5>
        <p>Bicarakanlah dengan kami tentang kebutuhan pengiriman Anda. Kami dapat membantu Anda memberi saran tentang peraturan regulasi ekspor & impor</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShippingConsul",
  components: {},
};
</script>

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
