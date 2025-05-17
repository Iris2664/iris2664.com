<template>
	<div class="container pic-background ">
		<main>
			<NuxtPage />
		</main>	
	</div>
	
</template>

<script lang="ts">
	import Header from "~/components/header.vue"; // headerをインポート
	import Footer from "~/components/footer.vue"; // footerをインポート
	export default {
		components: {
			Header,
			Footer
		}
	};
</script>