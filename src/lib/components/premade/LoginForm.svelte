<script>
	import Panel from '$lib/components/wrapper/Panel.svelte';
	import Input from '$lib/components/base/Input.svelte';
	import Button from '$lib/components/base/Button.svelte';
</script>

<Panel themeClass="glass-effect" title="Login Here" desc="Please enter your username and password">
	<form>
		<Input
			labelClass="default"
			labelText="Username"
			inputType="text"
			inputId="username"
			inputName="username"
			placeholder="Enter Username"
		/>
		<Input
			labelClass="default"
			labelText="Password"
			inputType="password"
			inputId="password"
			inputName="password"
			placeholder="Enter Password"
		/>
		<Button className="btn-med" type="submit" value="Log in Now" />
	</form>
</Panel>
