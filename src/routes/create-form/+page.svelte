<script>
	import Login from '$lib/components/Login.svelte';
	import CodeLogin from '$lib/ui/CodeLogin.svelte';
	import Sidebar from '$lib/ui/Sidebar.svelte';
</script>

<body>
	<Sidebar />
	<Login />
	<CodeLogin />
</body>

<style lang="scss">
	body {
		display: flex;
		flex-direction: row;
	}
</style>
