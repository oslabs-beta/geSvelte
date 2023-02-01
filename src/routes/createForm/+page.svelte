<script>
	import Login from '$lib/components/Login.svelte';
	import Sidebar from '$lib/ui/Sidebar.svelte';
</script>

<body>
	<Sidebar />
	<Login />
</body>

<style lang="scss">
	body {
		display: flex;
		flex-direction: row;
	}
</style>
