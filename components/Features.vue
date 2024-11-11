<template>
  <div class="container">
    <div class="step">
      <div class="circle">1</div>
      <div class="step-content">
        <h1>Cari Kampus & Prodi</h1>
        <p>
          Consectetur adipiscing elit. Urna amet hac senectus in consequat orci
          duis pellentesque.
        </p>
      </div>
    </div>
    <div class="step">
      <div class="circle">2</div>
      <div class="step-content">
        <h1>Bandingkan</h1>
        <p>
          Consectetur adipiscing elit. Urna amet hac senectus in consequat orci
          duis pellentesque.
        </p>
      </div>
    </div>
    <div class="step">
      <div class="circle">3</div>
      <div class="step-content">
        <h1>Uji Potensi</h1>
        <p>
          Consectetur adipiscing elit. Urna amet hac senectus in consequat orci
          duis pellentesque.
        </p>
      </div>
    </div>
    <div class="step">
      <div class="circle">4</div>
      <div class="step-content">
        <h1>Daftar</h1>
        <p>
          Consectetur adipiscing elit. Urna amet hac senectus in consequat orci
          duis pellentesque.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Features",
};
</script>

<style scoped>
.container {
  background: linear-gradient(to right, #126abb, #0ab6c1);
  border-radius: 20px;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  width: 80%;
  max-width: 1200px;
}

.step {
  color: white;
  display: flex;
  flex: 1;
  padding: 20px;
  position: relative;
}

.step-content {
  flex-direction: row;
}

.step:not(:last-child)::after {
  content: "";
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  height: 60%;
  border-right: 1px solid rgba(255, 255, 255, 0.5);
}

.step .circle {
  background-color: #3bd7f0;
  color: white;
  width: 110px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 1rem 0 0;
  font-size: 16px;
}

.step h1,
.step p {
  line-height: 20px;
}

.step h1 {
  margin: 10px 0;
  font-size: 16px;
  font-weight: 600;
}

.step p {
  margin: 0;
  font-size: 12px;
  color: #d5e9ef;
  font-weight: 400;
}

@media (max-width: 768px) {
  .container {
    display: grid;
    grid-template-columns: 2fr 2fr;
  }

  .step:not(:last-child)::after {
    display: none;
  }

  .step {
    align-items: center;
  }

  .step .circle {
    width: 24px;
    height: 24px;
    padding: 0.3rem;
  }

  .step h1 {
    font-size: 12px;
  }

  .step p {
    display: none;
  }
}
</style>
