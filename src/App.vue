<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <div class="wrapper">
    <header>
      <nav>
        <div class="nav-children">
          <img src="/icon003_A.png" alt="Icon" width="auto" height="auto" loading="lazy">
          <h1>Iris2664.com</h1>
        </div>
        <div class="nav-children2">
          <div class="link">
            <RouterLink to="/">Home</RouterLink>
          </div>
          <div class="link">
            <RouterLink to="/about">About</RouterLink>
          </div>
          <div class="link">
            <RouterLink to="/activities">Activities</RouterLink>
          </div>
          <div class="link">
            <a href="https://iris2664.hatenablog.jp/" target="_blank" rel="noopener noreferrer">Blog</a>
          </div>
        </div>
      </nav>
    </header>
    <main>
      <RouterView />
    </main>
    <footer>
      <p>Copyright &copy; 2024 陽向あやめ (Iris2664)</p>
      <p>Hosted on GitHub Pages. Source:
        <a href="https://github.com/Iris2664/iris2664.com" target="_blank" rel="noopener noreferrer">
          Iris2664/iris2664.com
        </a>
      </p>
      <p>Site revision: 2ea94670941e11efa828bdfd33e0a372</p>
      <p>本サイトの閲覧には, 最新版のFirefox, Chrome, Safariが必要です.</p>
    </footer>
  </div>
</template>

<style>

</style>
