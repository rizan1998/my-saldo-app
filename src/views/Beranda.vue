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
            <b-form @submit="onSubmit" @reset="onReset" v-if="show">
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

              <b-form-group
                id="input-group-1"
                label="Tipe Saldo:"
                label-for="input-1"
              >
                <b-form-select
                  id="input-1"
                  v-model="log.tipe_saldo"
                  :options="tipe_saldo"
                  required
                ></b-form-select>
              </b-form-group>

              <b-form-group
                id="input-group-2"
                label="Nominal:"
                label-for="input-2"
              >
                <b-form-select
                  id="input-2"
                  v-model="log.nominal"
                  :options="daftar_pulsa"
                  required
                ></b-form-select>
              </b-form-group>

              <b-form-group
                id="input-group-3"
                label="Nomor Hp:"
                label-for="input-3"
              >
                <b-form-input
                  id="input-3"
                  v-model="log.nomor"
                  type="number"
                  placeholder="Masukan Nomor"
                  required
                ></b-form-input>
              </b-form-group>

              <b-form-group
                label="Individual radios"
                v-slot="{ ariaDescribedby }"
              >
                <b-form-radio
                  v-model="log.status_pembayaran"
                  :aria-describedby="ariaDescribedby"
                  name="some-radios"
                  value="A"
                  >Option A</b-form-radio
                >
                <b-form-radio
                  v-model="log.status_pembayaran"
                  :aria-describedby="ariaDescribedby"
                  name="some-radios"
                  value="B"
                  >Option B {{ log.tanggal }}
                </b-form-radio>
              </b-form-group>

              <b-button type="submit" variant="primary">Submit</b-button>
              <b-button type="reset" variant="danger">Reset</b-button>
            </b-form>
            <b-card class="mt-3" header="Form Data Result">
              <pre class="m-0">{{ log }}</pre>
            </b-card>
          </div>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      log: {
        tipe_saldo: "null",
        nomor: "",
        nominal: "null",
        tanggal: "",
        nama: "",
        status_pembayaran: "",
        sisa_pembayaran: "",
      },
      saldo: "",
      tipe_saldo: [
        { text: "Pilih tipe saldo", value: null },
        "Pulsa",
        "Token",
        "Kouta",
      ],
      daftar_pulsa: [
        { text: "Pilih Nominal", value: null },
        { text: "Rp. 5.000", value: 5000 },
        { text: "Rp. 10.000", value: 10000 },
        { text: "Rp. 25.000", value: 25000 },
        { text: "Rp. 50.000", value: 50000 },
        { text: "Rp. 100.000", value: 10000 },
      ],
      show: true,
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.food = null;
      this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },

    callFunction() {
      //   var currentDate = new Date();
      //   console.log(currentDate);

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