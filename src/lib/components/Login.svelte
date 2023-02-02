<script>
	// create a form
	import { loginFormStore } from '../../stores/formStore';
</script>

<div class="form-wrapper">
	<p>Enter your description</p>
	<form class="loginForm">
		<label>
			{$loginFormStore.username.label}
			<input
				placeholder={$loginFormStore.username.placeholder}
				name="username"
				type="text"
				required
			/>
		</label>
		<label>
			{$loginFormStore.password.label}
			<input
				name="password"
				placeholder={$loginFormStore.password.placeholder}
				type="password"
				required
			/>
		</label>
		<button type="submit">Login</button>
	</form>
</div>

<style lang="scss">
	button {
		width: 25%;
		min-width: fit-content;
	}

	button:hover {
		cursor: pointer;
	}

	.loginForm {
		display: flex;
		flex-direction: column;
	}
</style>
