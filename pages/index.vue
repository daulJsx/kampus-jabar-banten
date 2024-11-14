<template>
  <div>
    <!-- Navbar -->
    <Header />

    <!-- Hero Section -->
    <Hero />

    <!-- Fitur Section -->
    <Features />

    <!-- Tentang Kami Section -->
    <LazyAbout />

    <!-- Rekomendasi Kampus Section -->
    <LazyKampus />

    <!-- Rekomendasi Jurusan/Prodi Section -->
    <LazyJurusan />

    <!-- Bagian Kontak atau footer tambahan jika diperlukan -->
    <LazyContact />
  </div>
</template>

<script>
import Header from "~/components/Header.vue";
import Hero from "~/components/Hero.vue";
import Features from "~/components/Features.vue";
import About from "~/components/About.vue";
import Kampus from "~/components/Kampus.vue";
import Jurusan from "~/components/Jurusan.vue";
import Contact from "~/components/Contact.vue";

export default {
  components: {
    Header,
    Hero,
    Features,
    About,
    Kampus,
    Jurusan,
    Contact,
  },
};
</script>

<style scoped lang="scss"></style>
