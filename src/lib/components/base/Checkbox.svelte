<script>
  // fields will be an array of objects representing values and default checked state
  export let fields = [{ value: 'test', checked: false}];
  export let name = 'default';
</script>

<fieldset>
  {#each fields as field}
    <input type="checkbox" id={field.value} {name} value={field.value} checked={field.checked}>
    <label for={field.value}>{field.value}</label>
  {/each}
</fieldset>