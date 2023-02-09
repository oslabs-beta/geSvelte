<script>
	import Panel from '$lib/components/wrapper/Panel.svelte';
	import Input from '$lib/components/base/Input.svelte';
	import Button from '$lib/components/base/Button.svelte';
</script>

<Panel themeClass="glass-effect" title="Register a New Account" desc="All Fields Required">
	<form>
		<Input
			labelClass="default"
			labelText="First Name"
			inputType="text"
			inputId="firstName"
			inputName="firstName"
			placeholder="First Name"
		/>
		<Input
			labelClass="default"
			labelText="Last Name"
			inputType="text"
			inputId="lastName"
			inputName="lastName"
			placeholder="Last Name"
		/>
		<Input
			labelClass="default"
			labelText="Email Address"
			inputType="email"
			inputId="email"
			inputName="email"
			placeholder="Email Address"
		/>
		<Input
			labelClass="default"
			labelText="Create a Password"
			inputType="password"
			inputId="password1"
			inputName="password1"
			placeholder="Passwords Must Match"
		/>
		<Input
			labelClass="default"
			labelText="Type Password Again"
			inputType="password"
			inputId="password2"
			inputName="password2"
			placeholder="Passwords Must Match"
		/>
		<Button className="btn-med" type="submit" value="Create Account" />
	</form>
</Panel>
