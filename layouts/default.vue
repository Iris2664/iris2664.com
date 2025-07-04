<template>
	<div class="container">
		<Header />
		<div class="wrapper">
			<main>
				<NuxtPage />
			</main>
		</div>
		<Footer />
	</div>
</template>

<script lang="ts">
	import Header from "~/components/header.vue"; // headerをインポート
	import Footer from "~/components/footer.vue"; // footerをインポート

	export default {
		components: {
			Header,
			Footer,
		}
	};
</script>