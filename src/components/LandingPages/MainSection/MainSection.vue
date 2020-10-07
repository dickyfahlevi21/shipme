<template>
  <div class="base">
    <div class="container">
      <!-- Navbar Section -->
      <nav class="navbar navbar-expand-lg navbar-light">
        <a class="navbar-brand" href="#">
          <img src="../../../assets/img/logo-shipme.svg" alt="logo shipme" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Kenapa Shipme?
                <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Cara Memesan</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Hubungi Kami</a>
            </li>
          </ul>
        </div>
      </nav>

      <!-- Main Section -->
      <div class="row">
        <div class="col-12 col-lg-6">
          <img src="../../../assets/img/world-landing-page.svg" alt />
        </div>
        <div class="col-12 col-lg-6 form-shipme">
          <h1 class="d-none d-lg-block">SHIPME.NOW!</h1>
          <form>
            <div class="form-group">
              <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Asal" />
            </div>
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                id="formGroupExampleInput2"
                placeholder="Tujuan"
              />
            </div>
            <button
              @click="formDetail()"
              type="button"
              class="form-control btn btn-light"
            >Kirim Sekarang!</button>
            <router-link to="/form-shipping">Form Shipping</router-link>
          </form>
        </div>
      </div>

      <!-- Bottom of Main Section -->
      <div class="row">
        <div class="col-12 col-lg-6">
          <h2>Mulai lah perjalanan kirim barangmu</h2>
          <p class="text-gold">
            Seberapapun banyak paket yang akan kamu kirimkan,
            <b>SHIPME.NOW</b> siap untuk menemanin kiriman paket mu. Kembangkan lah usaha expor dan impor mu bersama
            <b>SHIPME.NOW</b>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FormShipping from "../../../pages/FormShipping/FormShipping.view";
export default {
  name: "MainSection",
  components: {},
  methods: {
    formDetail() {
      console.log("awal");
      this.$router.push({
        name: "form-shipping",
        component: FormShipping,
      });
      console.log("akhir");
    },
  },
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.base {
  background: url("../../../assets/img/bg-landing-page.png");
  height: 120%;
  width: 100%;
  object-fit: cover;
}
.container nav {
  background-color: transparent;
}
.nav-item a {
  color: #ceb16c !important;
}

.col-lg-6 h2 {
  color: white;
}

.col-lg-6 p {
  color: white;
}

.col-lg-6 h1 {
  color: #ceb16c;
  font-weight: bold;
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
}
.col-lg-6 button {
  color: #011f48;
  background-color: #ceb16c;
  font-weight: bold;
  font-size: 1.5rem;
  border: none;
}
.row .col-lg-6 {
  padding: 2rem 0;
}
.form-group input {
  font-size: 1.5rem;
  color: #4e5a6d;
}

.row .form-shipme {
  padding: 3rem;
}
.text-gold b {
  color: #ceb16c;
}

@media (max-width: 768px) {
  .row .col-12 {
    text-align: center;
    padding: 0.5rem;
  }
  .col-12 img {
    width: 80%;
  }

  .col-12 h1 {
    color: #ceb16c;
    font-weight: bold;
    font-size: 1.25rem;
  }

  .form-group input {
    font-size: 1rem;
    color: #4e5a6d;
  }

  .col-lg-6 h1 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  .col-12 button {
    font-size: 1rem;
  }

  .col-12 h2 {
    font-size: 1.5rem;
  }

  .col-12 p {
    font-size: 0.875rem;
  }
}
</style>
