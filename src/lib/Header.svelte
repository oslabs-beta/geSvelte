<script>
	import Navigation from './Navigation.svelte';
	import Logo from './Logo.svelte';
</script>

<div class="container">
	<header class="main-header">
		<div class="row">
			<Logo />
			<Navigation />
		</div>
	</header>
</div>

<style>
	.main-header {
		background-color: #fff;
	}
</style>
