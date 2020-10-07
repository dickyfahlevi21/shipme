<template>
  <div class="container">
    <div class="row">
      <div class="col-12 mt-5 mb-5">
        <h2 class="d-flex justify-content-center">Cara Memesan</h2>
      </div>
    </div>
    <div class="row mt-4">
      <div class="col-12 col-lg-5">
        <div class="order">
          <h3>1. Masukan alamat Asal dan Tujuan</h3>
          <p>Dan jangan lupa, klik Kirim Sekarang!</p>
        </div>
        <div class="order">
          <h3>2. Isi detail barang yang akan dikirim</h3>
          <p>Pastikan terisi semua ya!</p>
        </div>
        <div class="order">
          <h3>3. Dapatkan penawaran harga instant</h3>
          <p>Liat dikolom harga ya!</p>
        </div>
        <div class="order">
          <h3>4. Lakukan pembayaran</h3>
          <p>Cek emaail kamu karena kami telah mengirimkan airwaybill untuk melakukan langkah pembayaran</p>
        </div>
        <div class="order">
          <h3>5. Tunggu barang kamu untuk dipick up!</h3>
        </div>
      </div>
      <div class="col-12 col-lg-7">
        <img src="../../../assets/img/order.svg" alt="How To Order" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HowToOrder",
  components: {},
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
hr {
  color: #bec0c2;
}
.order h3 {
  margin: 0;
  font-size: 1.375rem;
  font-weight: bold;
}
.order p {
  margin-left: 1.5rem;
  font-size: 1rem;
}
.col-12 h2 {
  font-size: 2.5rem;
  font-weight: bold;
}
.container {
  color: #1c1d1d;
}
@media (max-width: 768px) {
  .col-12 img {
    width: 80%;
  }

  .order h3 {
    font-size: 1rem;
  }
  .order p {
    margin-left: 1.1rem;
    font-size: 1rem;
  }
  .col-12 h2 {
    font-size: 1.5rem;
  }
}
</style>
