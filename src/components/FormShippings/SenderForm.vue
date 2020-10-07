<template>
  <div class="container">
    <div class="container-form mx-auto">
      <!-- Atas nya belum -->
      <!-- Pengiriman -->
      <h2 class="text-gold font-weight-bold text-center">Pengirim</h2>
      <hr />

      <!-- Form -->
      <form>
        <div class="form-group">
          <label for="namaLengkap">Nama Lengkap</label>
          <input type="text" class="form-control" id="namaLengkap" />
        </div>
        <div class="form-group">
          <label for="asalNegara">Asal Negara</label>
          <input type="text" class="form-control" id="asalNegara" />
        </div>
        <div class="form-group">
          <label for="alamatPertama">Alamat 1</label>
          <input type="text" class="form-control" id="alamatPertama" />
        </div>
        <div class="form-group">
          <label for="alamatKedua">Alamat 2</label>
          <input type="text" class="form-control" id="alamatKedua" />
        </div>
        <div class="form-group">
          <label for="alamatKetiga">Alamat 3</label>
          <input type="text" class="form-control" id="alamatKetiga" />
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="kota">Kota</label>
            <input class="form-control" id="kota" />
          </div>
          <div class="form-group col-md-6">
            <label for="kodePos">Kode Pos</label>
            <input class="form-control" id="kodePos" />
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="nomoHp">Nomor HP</label>
            <input class="form-control" id="nomoHp" />
          </div>
          <div class="form-group col-md-6">
            <label for="email">Email</label>
            <input class="form-control" id="email" type="email" />
          </div>
        </div>
        <button type="submit" class="btn-lg btn-block btn btn-primary">Lanjut</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "SenderForm",
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
</style>
