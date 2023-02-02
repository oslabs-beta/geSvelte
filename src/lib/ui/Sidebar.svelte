<script>
	import LoginSidebar from '$lib/ui/sidebarForms/LoginSidebar.svelte';
</script>

<aside id="sidebar-wrapper">
	<h1>Sidebar</h1>
	<LoginSidebar />
</aside>

<style>
	#sidebar-wrapper {
		margin: 0;
		padding: 50px;
		height: 100vh;
		background-color: gray;
		color: white;
	}
</style>
