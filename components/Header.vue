<template>
  <header class="header">
    <div>This is an auto-imported component</div>
    <div class="logo">
      <img alt="Logo image" src="~/assets/images/full-logo.png" />
    </div>
    <div class="search-bar">
      <i class="fas fa-search"> </i>
      <input
        placeholder="Cari kampus/prodi impian Anda disini..."
        type="text"
      />
      <button>Cari</button>
      <i class="fas fa-bars hamburger"> </i>
    </div>
    <div class="auth-buttons">
      <button>Daftar</button>
      <button class="login">Login</button>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 10px 20px;
  background-color: #fff;
  border-bottom: 1px solid #e0e0e0;
}

.logo {
  display: flex;
  align-items: center;
}
.logo img {
  height: 70px;
  margin-right: 10px;
}
.search-bar {
  display: flex;
  align-items: center;
  margin-left: 20px;
  flex-grow: 0.3;
  position: relative;
}
.search-bar input {
  width: 100%;
  padding: 0.98rem 3rem;
  border: 1px solid #00bcd4;
  border-radius: 4px;
  outline: none;
}
.search-bar .fas {
  position: absolute;
  left: 0.7rem;
  color: #00bcd4;
}
.search-bar .hamburger {
  display: none;
}
.search-bar button {
  position: absolute;
  right: 5px;
  top: 50%;
  transform: translateY(-50%);
  padding: 0.7rem 1.3rem;
  border: none;
  background-color: #00bcd4;
  color: #fff;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
}
.auth-buttons {
  display: flex;
  align-items: center;
  margin-left: 20px;
}
.auth-buttons button {
  padding: 0.98rem 1.9rem;
  border: 1px solid #0aa8c1;
  background-color: #fff;
  color: #0aa8c1;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 10px;
  font-size: 14px;
  font-weight: 600;
}
.auth-buttons button.login {
  background-color: #0aa8c1;
  color: #fff;
}

@media (max-width: 768px) {
  .header {
    padding: 5px 5px;
    justify-content: space-between;
  }
  .search-bar {
    display: flex;
    justify-content: end;
    align-items: end;
    gap: 1rem;
  }

  .search-bar input,
  .search-bar button,
  .auth-buttons button {
    display: none;
  }

  .search-bar .fas {
    position: relative;
    font-size: large;
  }

  .search-bar .hamburger {
    display: block;
    color: #00bcd4;
    font-size: 24px;
    cursor: pointer;
  }
}
</style>
