<script>
  // fields will be an array of strings representing options
  export let fields = ['test'];
  export let name = 'default';
</script>

<fieldset>
  {#each fields as field}
    <input type="radio" id={field} {name} value={field}>
    <label for={field}>{field}</label>
  {/each}
</fieldset>