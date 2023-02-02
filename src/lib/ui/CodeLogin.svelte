<script>
  import { loginFormStore } from '../../stores/formStore';
  import Login from '$lib/components/Login.svelte';

  // <style/script> tags in strings will throw a weird error, we can get around this by
  // using a variable with the string 'style' inside of <> in a template literal
  const styleStr = 'style';
  const scriptStr = 'script';

  let testStyle = `button {
		width: 25%;
		min-width: fit-content;
	}

	button:hover {
		cursor: pointer;
	}

	.loginForm {
		display: flex;
		flex-direction: column;
	}`; 

  // test = test.replaceAll('\n', '<br>')

</script>

<code id="code-mirror">
  {`<${scriptStr}>
    <\/${scriptStr}>
    <div class="form-wrapper">
      <p>Enter your description<\/p>
      <form class="loginForm">
        <label>
          ${$loginFormStore.username.label}
          <input
            placeholder="${$loginFormStore.username.placeholder}"
            name="username"
            type="text"
            required
          \/>
        <\/label>
        <label>
          ${$loginFormStore.password.label}
          <input
            name="password"
            placeholder="${$loginFormStore.password.placeholder}"
            type="password"
            required
          \/>
        <\/label>
        <button type="submit">Login<\/button>
      <\/form>
    <\/div>
    <${styleStr}>
      ${testStyle}
    <\/${styleStr}>`}
   
</code>

<style>
  code {
    white-space: pre-wrap;
  }
</style>
