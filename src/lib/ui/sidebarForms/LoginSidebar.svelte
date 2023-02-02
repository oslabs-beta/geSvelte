<script>
	import { loginFormStore } from '../../../stores/formStore';

	const submitUpdate = () => {
		console.log(document.getElementById('code-mirror')?.innerHTML);
		// $loginFormStore.username =
	};

	let username = {
		placeholder: '',
		label: ''
	};

	const updatePlaceholder = (object, property) => {
		console.log(username[property]);
		if (!username[property]) {
			$loginFormStore[object][property] = 'Default Placeholder';
		} else {
			$loginFormStore[object][property] = username[property];
		}
	};
</script>

<div class="loginSidebar">
	<p>Edit your Login form</p>
	<form on:submit|preventDefault={submitUpdate} class="loginForm">
		<label>
			Edit placeholder
			<input
				bind:value={username.placeholder}
				on:input={() => updatePlaceholder('username', 'placeholder')}
				placeholder="placeholder"
				name="username-placeholder"
				type="text"
			/>
		</label>
		<label>
			Edit username label
			<input
				bind:value={username.label}
				on:input={() => updatePlaceholder('username', 'label')}
				name="username-label"
				placeholder="username label"
				type="text"
			/>
		</label>
		<input type="submit" value="Update Preview" />
	</form>
</div>

<style lang="scss">
	.loginForm {
		display: flex;
		flex-direction: column;
	}
</style>
