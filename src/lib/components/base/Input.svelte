<script>

  // base components will be in a form wrapper, enforce inheritance
  export let props;
  // label for property will always match name/id
  const { labelClass, labelText, inputType, inputId, inputName } = props;

</script>

<label class={labelClass} for={inputName}>{labelText}</label>
<input type={inputType} id={inputId} name={inputName}>