<template>
  <div class="about-container">
    <Left />
    <Right />
  </div>

</template>

<script setup lang="ts">
import Left from '~/components/about/left.vue';
import Right from '~/components/about/Right.vue';

useHead({
  title: 'About | ', // このページのタイトルを設定
  meta: [
    { name: 'description', content: '陽向あやめについて' }
  ],
  // その他の head 要素もここに追加できます
});
</script>

<style>
@import "@/assets/css/about.css";
</style>