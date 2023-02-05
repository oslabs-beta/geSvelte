<!--
  Checkbox.svelte
  Base level component representing a button using semantic HTML5 input
  params: 
    fields [{value, checked}]: value of the field and state of box at creation TODO: type/interface for object representing fields
    name: related fields with the same name will send all values for form submissions
-->

<script lang="ts">
  export let fields = [{ value: 'test', checked: false}];
  export let name = 'default';

  let checked: any[] = [];
</script>

<fieldset>
  {#each fields as field}
    <input type="checkbox" id={field.value} bind:group={checked} {name} value={field.value} checked={field.checked}>
    <label for={field.value}>{field.value}</label>
  {/each}
</fieldset>