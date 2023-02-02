<script>
  import Input from "$lib/components/base/Input.svelte";
  export const styleClass = "dummy";

  const baseClasses = `gesvelte-form-wrapper ${styleClass}`;

  const emailProps = {
    labelClass: 'test',
    labelText: 'Email',
    inputType: 'email',
    inputId: 'email', 
    inputName: 'email'
  };

  const usernameProps = {
    labelClass: 'test',
    labelText: 'Username',
    inputType: 'text',
    inputId: 'username', 
    inputName: 'username'
  };

  const passwordOneProps = {
    labelClass: 'test',
    labelText: 'Password',
    inputType: 'password',
    inputId: 'password1', 
    inputName: 'password1'
  };

  const passwordTwoProps = {
    labelClass: 'test',
    labelText: 'Match Password',
    inputType: 'password',
    inputId: 'password2', 
    inputName: 'password2'
  };
</script>

<div class={baseClasses}>
  <!-- Email -->
  <Input props={emailProps} />
  <!-- Username -->
  <Input props={usernameProps} />
  <!-- Password -->
  <Input props={passwordOneProps} />
  <!-- Password Match -->
  <Input props={passwordTwoProps} />
</div>