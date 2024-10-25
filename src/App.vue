<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <div>
          <h1>Iris2664.com</h1>
        </div>
        <div class="nav-children">
          <div class="link">
            <RouterLink to="/">Home</RouterLink>
          </div>
          <div class="link">
            <RouterLink to="/about">About</RouterLink>
          </div>
          <div class="link">
            <RouterLink to="/activities">Activities</RouterLink>
          </div>
        </div>
      </nav>
    </div>
  </header>
  <div class="wrapper">
    <div class="main-area">
      <RouterView />
    </div>
  </div>
  <footer>
    <p>Copyright &copy; 2024 陽向あやめ (Iris2664)</p>
    <p>Hosted on GitHub Pages. Source:
      <a href="https://github.com/Iris2664/iris2664.com" target="_blank" rel="noopener noreferrer">
        Iris2664/iris2664.com
      </a>
    </p>
    <p>Site revision: 30dc9bd045eb11efa1ef9b053fdfa83a</p>
    <p>本サイトの閲覧には, 最新版のFirefox, Chrome, Safariが必要です.</p>
  </footer>
</template>

<style>

</style>
