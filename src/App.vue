<template>
  <div id="app">
    <b-navbar toggleable="lg" type="light" variant="light">
      <div class="container pt-2 pb-2">
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-navbar-brand to="/"><strong>MySaldo App</strong></b-navbar-brand>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item to="/">Beranda</b-nav-item>
            <b-nav-item to="/kontak">Kontak</b-nav-item>
            <b-nav-item to="/riwayat_pengiriman">Riwayat Pengiriman</b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item to="/tentang">Tentang Aplikasi</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>