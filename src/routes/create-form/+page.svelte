<script>
// @ts-nocheck

	import Login from '$lib/components/Login.svelte';
	import CodeLogin from '$lib/ui/CodeLogin.svelte';
	import Sidebar from '$lib/ui/Sidebar.svelte';
	import Panel from '$lib/components/wrapper/Panel.svelte';
	import Input from '$lib/components/base/Input.svelte';
</script>

	<Sidebar />
	<Login />
	<CodeLogin />
 <Panel>
	<Input labelClass="test" labelText={"Hello"} inputType={"text"} inputId={1} inputName={"Hello"} />
 </Panel>	

<style lang="scss">
</style>
