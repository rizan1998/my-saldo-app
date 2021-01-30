<template>
  <div class="beranda">
    <div class="container mt-5">
      <b-row>
        <b-col md="6">
          <b-card
            title="Card Title"
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem"
            class="mb-2"
          >
            <b-card-text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </b-card-text>

            <b-button href="#" variant="primary">Go somewhere</b-button>
          </b-card>
        </b-col>
        <b-col md="5">
          <div>
            <b-form @submit="saveLog" @reset="onReset" v-if="show">
              <!-- nama -->
              <b-form-group
                id="input-group-4"
                label="Masukan Nama:"
                label-for="input-4"
              >
                <b-form-input
                  id="input-4"
                  v-model="log.nama"
                  type="text"
                  placeholder="Masukan Nomor"
                  required
                ></b-form-input>
              </b-form-group>
              <!-- end nama -->
              <!-- tipe saldo -->
              <b-row>
                <b-col>
                  <b-form-group
                    id="input-group-1"
                    label="Tipe Saldo:"
                    label-for="input-1"
                  >
                    <b-form-select
                      id="input-1"
                      v-model="log.tipe_saldo"
                      :options="tipe_saldo"
                      @change="onChangeTipeSaldo"
                      required
                    ></b-form-select>
                  </b-form-group>
                </b-col>
                <b-col>
                  <b-form-group
                    id="input-group-2"
                    label="Nominal:"
                    label-for="input-2"
                  >
                    <b-form-select
                      id="input-2"
                      v-if="log.tipe_saldo == 'Pulsa'"
                      v-model="log.nominal"
                      :options="daftar_Pulsa"
                      required
                    ></b-form-select>

                    <b-form-select
                      id="input-2"
                      v-else-if="log.tipe_saldo == 'Token'"
                      v-model="log.nominal"
                      :options="daftar_Token"
                      required
                    ></b-form-select>

                    <b-form-select
                      id="input-2"
                      v-else-if="log.tipe_saldo == 'Kouta'"
                      v-model="log.provider"
                      :options="daftar_Provider"
                      required
                    ></b-form-select>
                  </b-form-group>
                </b-col>
              </b-row>
              <!-- end tipe saldo -->

              <!-- masukan nomor telepon -->
              <!-- nomor hp -->
              <b-form-group
                v-if="log.tipe_saldo == 'Pulsa'"
                id="input-group-3"
                label="Nomor Hp:"
                label-for="input-3"
              >
                <b-form-input
                  id="input-3"
                  v-model="log.nomor"
                  type="number"
                  placeholder="Masukan Nomor Hp"
                  required
                ></b-form-input>
              </b-form-group>
              <!-- end nomor hp -->

              <!-- nomor token -->
              <b-form-group
                v-if="log.tipe_saldo == 'Token'"
                id="input-group-3"
                label="Nomor Token:"
                label-for="input-3"
              >
                <b-form-input
                  id="input-3"
                  v-model="log.nomor"
                  type="number"
                  placeholder="Masukan Nomor Token"
                  required
                ></b-form-input>
              </b-form-group>
              <!-- nomor token -->

              <!-- kouta -->
              <b-form-group
                v-else-if="log.provider"
                id="input-group-1"
                label="Pilih Kouta"
                label-for="input-1"
              >
                <b-form-select
                  v-if="log.provider == 'TELKOMSEL'"
                  id="input-1"
                  v-model="log.nominal"
                  :options="daftar_Kouta_TELKOMSEL"
                  required
                ></b-form-select>
              </b-form-group>
              <b-row>
                <b-col>
                  <b-form-group
                    id="input-group-1"
                    label="Status Pembayaran:"
                    label-for="input-1"
                  >
                    <b-form-select
                      id="input-1"
                      v-model="log.status_pembayaran"
                      :options="daftar_Status_Pembayaran"
                      required
                    ></b-form-select> </b-form-group
                ></b-col>
                <b-col>
                  <b-form-group
                    v-if="log.status_pembayaran == 'Lunas_sebagian'"
                    id="input-group-3"
                    label="Sisa Pembayaran:"
                    label-for="input-3"
                  >
                    <b-form-input
                      id="input-3"
                      v-model="log.sisa_pembayaran"
                      type="number"
                      placeholder="Masukan Sisa Pembayaran"
                      required
                    ></b-form-input>
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row>
                <b-col class="text-right">
                  <b-button type="submit" class="mr-2" variant="primary"
                    >Submit</b-button
                  >
                  <b-button type="reset" variant="danger">Reset</b-button>
                </b-col>
              </b-row>
            </b-form>
            <!-- <b-card class="mt-3" header="Form Data Result">
              <pre class="m-0">{{ log }}</pre>
            </b-card> -->
          </div>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import TutorialDataService from "../store/firebaseDataService";
export default {
  data() {
    return {
      log: {
        tipe_saldo: null,
        nomor: "",
        nominal: null,
        tanggal: "",
        nama: "",
        status_pembayaran: null,
        sisa_pembayaran: "",
        provider: null,
      },
      saldo: "",
      tipe_saldo: [
        { text: "Pilih tipe saldo", value: null },
        "Pulsa",
        "Token",
        "Kouta",
      ],
      daftar_Pulsa: [
        { text: "Pilih Nominal Pulsa", value: null },
        { text: "Rp. 5.000", value: 5000 },
        { text: "Rp. 10.000", value: 10000 },
        { text: "Rp. 25.000", value: 25000 },
        { text: "Rp. 50.000", value: 50000 },
        { text: "Rp. 100.000", value: 10000 },
      ],
      daftar_Token: [
        { text: "Pilih Nominal Token", value: null },
        { text: "Rp. 20.000 (L20)", value: 20000 },
        { text: "Rp. 50.000 (L25)", value: 50000 },
        { text: "Rp. 100.000 (L100)", value: 100000 },
      ],
      daftar_Provider: [
        { text: "Pilih Nominal Provider", value: null },
        { text: "XL", value: "XL" },
        { text: "TELKOMSEL", value: "TELKOMSEL" },
        { text: "3 (TREE)", value: "TREE" },
      ],
      daftar_Kouta_null: [],
      daftar_Kouta_TELKOMSEL: [
        { text: "Pilih Nominal Kouta", value: null },
        { text: "2GB 7 hari 24jam", value: 10000 },
      ],
      daftar_Status_Pembayaran: [
        { text: "Status Pembayaran", value: null },
        { text: "Lunas", value: "lunas" },
        { text: "Ngutang", value: "ngutang" },
        { text: "Lunas Sebagian", value: "Lunas_sebagian" },
      ],
      show: true,
      nominallite: 10,
      kodecenter: 1998,
    };
  },
  methods: {
    saveLog() {
      var data = {
        tipe_saldo: this.log.tipe_saldo,
        nomor: this.log.nomor,
        nominal: this.log.nominal,
        tanggal: this.log.tanggal,
        nama: this.log.nama,
        status_pembayaran: this.log.status_pembayaran,
        sisa_pembayaran: this.log.sisa_pembayaran,
        provider: this.log.provider,
      };

      TutorialDataService.create(data)
        .then(() => {
          console.log("Created new item successfully!");
          //   this.submitted = true;
        })
        .catch((e) => {
          console.log(e);
        });

      // var nominal = this.nominallite;
      // var nomor = this.log.nomor;
      // var center = this.kodecenter;
      // window.location.replace(
      //   `https://api.whatsapp.com/send?phone=+6285759595969&text=${nominal}.${nomor}.${center}`
      // );
      // this.$router.push(
      //   `https://api.whatsapp.com/send?phone=+6285759595969&text=${nominal}.${nomor}.${center}`
      // );
    },
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onChangeTipeSaldo() {
      this.log.nominal = null;
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      (this.log.tipe_saldo = null),
        (this.log.nomor = ""),
        (this.log.nominal = null),
        (this.log.tanggal = ""),
        (this.log.nama = ""),
        (this.log.status_pembayaran = null),
        (this.log.sisa_pembayaran = ""),
        (this.log.provider = null),
        (this.show = false);
      this.$nextTick(() => {
        this.show = true;
      });
    },

    callFunction() {
      var currentDateWithFormat = new Date()
        .toJSON()
        .slice(0, 10)
        .replace(/-/g, "-");
      this.log.tanggal = currentDateWithFormat;
    },
  },
  mounted() {
    this.callFunction();
  },
};
</script>