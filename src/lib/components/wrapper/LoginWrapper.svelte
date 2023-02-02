<script>
  import Input from "$lib/components/base/Input.svelte";
  export const styleClass = 'dummy';

  const baseClasses = `gesvelte-form-wrapper ${styleClass}`;

  const usernameProps = {
    labelClass: 'test',
    labelText: 'Username',
    inputType: 'text',
    inputId: 'username', 
    inputName: 'username'
  };

  const passwordProps = {
    labelClass: 'test',
    labelText: 'Password',
    inputType: 'password',
    inputId: 'password', 
    inputName: 'password'
  };
</script>

<div class={baseClasses}>
  <!-- Username -->
  <Input props={usernameProps} />
  <!-- Password -->
  <Input props={passwordProps} />
</div>