<script>

</script>

<div class="loginSidebar">
	<p>Edit your Login form</p>
	<form class="loginForm">
		<label>
			Edit placeholder
			<input
				placeholder="Update placeholder"
				name="username"
				type="text"
			/>
		</label>
		<label>
			Edit username label
			<input
				name="password"
				placeholder="username label"
				type="text"
			/>
		</label>
		<button id="update" type="submit">Update Preview</button>
	</form>
</div>

<style lang="scss">
	.loginForm {
		display: flex;
		flex-direction: column;
	}

	#update {
		cursor: pointer;
	}
</style>