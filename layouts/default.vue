<template>
	<div class="container pic-background ">
		<P5Background />
		<main>
			<NuxtPage />
		</main>	
	</div>
	
</template>

<script lang="ts">
	import Header from "~/components/header.vue"; // headerをインポート
	import Footer from "~/components/footer.vue"; // footerをインポート
	import P5Background from "~/components/P5Background.vue";

	export default {
		components: {
			Header,
			Footer
		}
	};
</script>

<style>
/* 全体のbody要素に背景色を設定する場合はここに */
body {
  background-color: #000; /* p5の背景が動的に読み込まれるまでのフォールバック */
}
</style>