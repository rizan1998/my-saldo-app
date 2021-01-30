<template>
  <div class="log">
    <b-container class="mt-5">
      <h3>Riwayat Pengiriman Saldo</h3>
      <b-row>
        <b-col md="8">
          <b-table
            :striped="striped"
            :bordered="bordered"
            :borderless="borderless"
            :outlined="outlined"
            :small="small"
            :hover="hover"
            :dark="dark"
            :fixed="fixed"
            :foot-clone="footClone"
            :no-border-collapse="noCollapse"
            :items="items"
            :fields="fields"
            :head-variant="headVariant"
            :table-variant="tableVariant"
          ></b-table>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import TutorialDataService from "../store/firebaseDataService";
export default {
  data() {
    return {
      fields: ["first_name", "last_name", "age"],
      items: [
        { age: 40, first_name: "Dickerson", last_name: "Macdonald" },
        { age: 21, first_name: "Larsen", last_name: "Shaw" },
        { age: 89, first_name: "Geneva", last_name: "Wilson" },
      ],
      dataPengiriman: [],
      tableVariants: [
        "primary",
        "secondary",
        "info",
        "danger",
        "warning",
        "success",
        "light",
        "dark",
      ],
      striped: false,
      bordered: false,
      borderless: false,
      outlined: false,
      small: false,
      hover: false,
      dark: false,
      fixed: false,
      footClone: false,
      headVariant: null,
      tableVariant: "",
      noCollapse: false,
    };
  },
  onDataChange(items) {
    let _dataPengiriman = [];

    items.forEach((item) => {
      let key = item.key;
      let data = item.val();
      _dataPengiriman.push({
        key: key,
        title: data.title,
        description: data.description,
        published: data.published,
      });
    });

    this.dataPengiriman = _dataPengiriman;
  },
  mounted() {
    TutorialDataService.getAll().on("value", this.onDataChange);
  },
};
</script>