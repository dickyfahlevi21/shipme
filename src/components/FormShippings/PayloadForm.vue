<template>
  <div class="container">
    <div class="container-form mx-auto">
      <!-- Atas nya belum -->
      <!-- Pengiriman -->
      <h2 class="text-gold font-weight-bold text-center">Dokumen</h2>
      <hr />

      <!-- Form -->
      <form>
        <div class="form-group">
          <label for="tujuanPengiriman">Tujuan Pengiriman</label>
          <input type="text" class="form-control" id="tujuanPengiriman" />
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="jumlahBarang">Jumlah Barang</label>
            <input class="form-control" id="jumlahBarang" />
          </div>
          <div class="form-group col-md-6">
            <label for="beratTotal">Berat Total</label>
            <input class="form-control" id="beratTotal" />
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-4">
            <label for="dimensi">Dimensi</label>
            <input class="form-control" id="dimensi" placeholder="Panjang" />
          </div>
          <div class="form-group col-md-4">
            <label>a</label>
            <input class="form-control" placeholder="Lebar" />
          </div>
          <div class="form-group col-md-4">
            <label>a</label>
            <input class="form-control" placeholder="Tinggi" />
          </div>
        </div>
        <div class="form-group">
          <label>Total Harga</label>
          <input type="text" class="form-control" disabled />
        </div>
        <div class="row justify-content-center">
          <button type="submit" class="col-md-5 btn-lg btn-block btn btn-secondary mr-2">Kembali</button>
          <button type="submit" class="col-md-5 btn-lg btn-block btn btn-primary">Kirim</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "PayloadForm",
  components: {},
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container-form {
  width: 50%;
}

.text-gold {
  color: #ceb16c;
  font-size: 1.5rem;
  font-weight: normal;
}

hr {
  border-top: 2px solid #ceb16c !important;
  width: 50%;
}

.btn-primary {
  background-color: #011f48 !important;
}

.btn-secondary {
  background-color: white !important;
  border-color: #011f48 !important;
  color: #011f48 !important;
  margin-top: 0.5rem !important;
}
</style>
