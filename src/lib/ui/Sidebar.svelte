<script>
	import LoginSidebar from '$lib/ui/sidebarForms/LoginSidebar.svelte';
</script>

<div id="sidebar-wrapper">
	<h1>Sidebar</h1>
	<LoginSidebar />
</div>

<style>
	#sidebar-wrapper {
		margin: 0;
		padding: 50px;
		height: 100vh;
		background-color: gray;
		color: white;
	}
</style>
