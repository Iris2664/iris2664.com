<template>
    <main>
        <div class="top">
            <div class="inner">
                <div class="logo">
                    <img src="@/assets/image/img-icon.webp" alt="icon">
                </div>
                <div class="innner_right">
                    <h1>陽向あやめ / HINATA Ayame</h1>
                    <p>
                        Security Researcher / YouTuber / Programmer
                    </p>
                    <div class="links">
                        <div class="box">
                            <svg class="x" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <title>X</title>
                                <path
                                    d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                            </svg>
                            <a href="https://x.com/Iris2664" target="_blank" rel="noopener noreferrer">
                                @Iris2664
                            </a>
                        </div>
                        <div class="box">
                            <svg class="github" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <title>GitHub</title>
                                <path
                                    d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                            </svg>
                            <a href="http://" target="_blank" rel="noopener noreferrer">
                                @Iris2664
                            </a>
                        </div>    
                    </div>
                    <div class="btns">
                        <div class="btn_box">
                            <a class="btn" href="/About">
                                About Me
                            </a>
                        </div>
                        <div class="btn_box">
                            <a class="btn" href="https://vtuber.iris2664.com/" target="_blank" rel="noopener noreferrer">
                                YouTuber About
                            </a>
                        </div>    
                    </div>
                    <p>Welcome to the profile site of HINATA Ayame.</p>
                    <p>Do not attack this site. There are no flags at all ;)</p>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();

definePageMeta({
  layout: false,
})

const siteName: string = 'iris2664.com';
const pageTitle: string = '';
const pageDescription: string = '陽向あやめのポートフォリオ・プロフィールについて。';
const pageOgImage: string = 'https://www.iris2664.com/ogp-top-page.png';
const currentUrl: string = `https://www.iris2664.com${route.fullPath}`;

useHead({
  title: pageTitle,
  meta: [
    { key: 'description', name: 'description', content: pageDescription }, 
    // --- OGP設定 ---
    { key: 'og:site_name', property: 'og:site_name', content: siteName }, 
    { key: 'og:type', property: 'og:type', content: 'website' }, 
    { key: 'og:url', property: 'og:url', content: currentUrl }, 
    { key: 'og:title', property: 'og:title', content: pageTitle }, 
    { key: 'og:description', property: 'og:description', content: pageDescription }, 
    { key: 'og:image', property: 'og:image', content: pageOgImage }, 
    { key: 'og:image:width', property: 'og:image:width', content: '1200' }, 
    { key: 'og:image:height', property: 'og:image:height', content: '630' }, 

    // --- Twitter Card設定 ---
    { key: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' }, 
    { key: 'twitter:site', name: 'twitter:site', content: '@Iris2664' }, 
    { key: 'twitter:creator', name: 'twitter:creator', content: '@Iris2664' }, 
    { key: 'twitter:title', name: 'twitter:title', content: pageTitle }, 
    { key: 'twitter:description', name: 'twitter:description', content: pageDescription }, 
    { key: 'twitter:image', name: 'twitter:image', content: pageOgImage }, 
  ]
});
</script>

<style>
@import "@/assets/css/index.css";
</style>