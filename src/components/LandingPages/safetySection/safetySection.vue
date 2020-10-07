<template>
  <div class="container">
    <div class="row">
      <div class="col-6">
        <h3>Kenapa</h3>
        <h4>SHIPME.NOW?</h4>
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-lg-7">
        <img src="../../../assets/img/super-shipme.svg" alt />
      </div>
      <div class="col-12 col-lg-5 my-auto">
        <h5>Perlindungan Keamanan</h5>
        <p>Kami menjamin perlindungan barang / barang Anda. mudah untuk melacak dan menemukan kiriman Anda.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "safetySection",
  components: {},
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.row .col-6 {
  padding: 0;
  text-align: left;
}

.col-6 h3 {
  font-weight: bolder;
  color: #1c1d1d;
  font-size: 2.75rem;
  margin: 2rem 0 0.5rem;
}

.col-6 h4 {
  color: #ceb16c;
  font-size: 2.75rem;
  font-weight: bolder;
}

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
  .row .col-6 {
    padding: 1rem;
  }
  .row .col-12 {
    text-align: center;
    padding: 1rem;
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

  .col-6 h3 {
    font-size: 1.5rem;
    margin: 1rem 0 0.5rem;
  }

  .col-6 h4 {
    font-size: 1.5rem;
  }
}
</style>
