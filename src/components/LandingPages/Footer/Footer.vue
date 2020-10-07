<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <hr />
      </div>
    </div>
    <div class="row d-none d-md-block">
      <div class="col-12 col-lg-6 mt-3 d-block">
        <h3>Hubungi Kami</h3>
        <div class="d-flex mt-2">
          <img src="../../../assets/img/icon-call.svg" />
          <p class="ml-2 my-auto">0812-3456-7891</p>
        </div>
        <div class="d-flex mt-3 mb-3">
          <img src="../../../assets/img/icon-ig.svg" />
          <p class="ml-2 my-auto">SHIPME.NOW</p>
        </div>
      </div>
      <div class="col-12 col-lg-6 mt-3 d-flex align-items-end flex-column">
        <a href>
          <img class="mb-2" src="../../../assets/img/logo-footer.svg" />
        </a>
        <p class="mt-2">&copy; 2020 SHIPME.NOW - All Rights Reserved.</p>
      </div>
    </div>
    <!-- Mobile Version -->
    <div class="row d-block d-lg-none">
      <div class="col-12 text-center">
        <h3>Hubungi Kami</h3>
        <div class="d-flex mt-3 mb-3">
          <div class="d-flex mx-auto">
            <img src="../../../assets/img/icon-call.svg" />
            <p class="ml-2 my-auto">0812-3456-7891</p>
          </div>
          <div class="d-flex mx-auto">
            <img src="../../../assets/img/icon-ig.svg" />
            <p class="ml-2 my-auto">SHIPME.NOW</p>
          </div>
        </div>
      </div>
      <div class="col-12">
        <p class="mt-2">&copy; 2020 SHIPME.NOW - All Rights Reserved.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  components: {},
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
hr {
  color: #1c1d1d;
}

.container {
  color: #1c1d1d;
}

.col-lg-6 h3 {
  font-weight: 600;
}

@media (max-width: 768px) {
  .col-12 h3 {
    font-weight: 600;
    font-size: 1.25rem;
  }
  .col-12 p {
    font-size: 0.875rem;
    text-align: center;
  }
}
</style>
