<!--
  Radio.svelte
  Base level component representing a radio inputs using HTML5 inputs
  params: 
    styleClass: classes used with atomic CSS selectors
    fields [{value, label}]: value of the field and state of box at creation TODO: type/interface for object representing fields
    ...
-->

<script>
  // @ts-nocheck

  export let styleClass = "gesvelte-default";
  export let fields = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" }
  ];

  let selected;
  if (fields.length) selected = fields[0].value;

</script>

<fieldset class="radio-group {styleClass}">
  {#each fields as field}
  <label for={field.label}>
    <input type="radio" bind:group={selected} id={field.label} name={field.label} value={field.value}>
    <span>{field.label}</span></label>
  {/each}
</fieldset>