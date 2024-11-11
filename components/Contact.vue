<!-- components/Contact.vue -->
<template>
  <div class="container">
    <div class="footer">
      <div>
        <h3>Tentang Kami</h3>
        <p>
          Membantu siswa mencari dan membandingkan informasi perguruan tinggi di
          Jawa Barat dan Banten agar bisa meraih impian lewat kampus idaman dan
          jurusan yang sesuai dengan passion.
        </p>
      </div>
      <div>
        <h3>Layanan</h3>
        <ul>
          <li>
            <a href="#"> Daftar Kampus </a>
          </li>
          <li>
            <a href="#"> Daftar Prodi/jurusan </a>
          </li>
          <li>
            <a href="#"> Artikel/Berita </a>
          </li>
        </ul>
      </div>
      <div>
        <h3>Kontak Kami</h3>
        <div class="contact-info">
          <i class="fas fa-envelope"> </i>
          <p>email@company.com</p>
        </div>
        <div class="contact-info">
          <i class="fas fa-phone"> </i>
          <p>+62 32984343234</p>
        </div>
        <div class="download-button">
          <button>Download Aplikasi</button>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <img alt="Logo image" class="logo" src="../assets/images/full-logo.png" />
      <span> Copyright © 2020 Kampus Jabar Banten </span>
      <a class="download-button__mobile" href="#">
        <img alt="Google Play icon" src="../assets/images/playstore.png" />
        Download Aplikasi
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
};
</script>

<style scoped>
.footer {
  background: linear-gradient(to right, #126abb, #0ab6c1);
  color: white;
  padding: 40px 20px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border-radius: 12px;
  margin: 20px;
}
.footer div {
  flex: 1;
  margin: 0 20px;
}
.footer h3 {
  margin-top: 0;
  font-weight: 600;
  font-size: 18px;
}
.footer p {
  margin: 10px 0;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  text-align: justify;
}
.footer ul {
  list-style: none;
  padding: 0;
}
.footer ul li {
  margin: 10px 0;
}
.footer ul li a {
  color: white;
  text-decoration: none;
}
.footer .contact-info {
  display: flex;
  align-items: center;
}
.footer .contact-info i {
  margin-right: 10px;
}
.footer .download-button {
  margin-top: 20px;
}
.footer .download-button button {
  background-color: white;
  color: #1e3c72;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}
.footer .download-button button:hover {
  background-color: #f0f0f0;
}

.footer-bottom .download-button__mobile {
  display: none;
}
.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  color: #848b9d;
  font-weight: 400;
  font-size: 14px;
}
.footer-bottom img {
  height: 70px;
}

@media (max-width: 576px) {
  .footer-bottom {
    flex-direction: column;
    justify-content: center;
    padding: 2rem;
    gap: 1rem;
  }
  .footer,
  .footer-bottom .logo {
    display: none;
  }

  .footer-bottom .download-button__mobile {
    display: flex;
    align-items: center;
    background-color: #0aa8c1;
    color: white;
    font-size: 12px;
    font-weight: 400;
    padding: 10px 20px;
    border-radius: 4px;
    text-decoration: none;
    gap: 0.3rem;
  }

  .footer-bottom .download-button__mobile img {
    height: 20px;
  }
}
</style>
