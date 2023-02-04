<script>
// @ts-nocheck

  // fields will be an array of strings representing options
  let styleClass;

  const fields = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" }
  ];

  let selected = fields[0].value;
</script>

<fieldset class="radio-group {styleClass}">
  {#each fields as field}
    <input type="radio" bind:group={selected} id={field.label} name={field.label} value={field.value}>
    <label for={field.label}>{field.label}</label>
  {/each}
</fieldset>