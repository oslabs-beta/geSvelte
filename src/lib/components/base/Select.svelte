<script>
// @ts-nocheck

  let options = [
    {value: "option1", label: "Option 1"},
    {value: "option2", label: "Option 2"},
    {value: "option3", label: "Option 3"}
  ];
  let selected = options[0].value;
  let name;
  let id;

  function handleSelection(event) {
    selected = event.target.value;
  }
</script>

<select id={id} name={name} bind:value={selected} on:change={handleSelection}>
  {#each options as option}
    <option value={option.value}>{option.label}</option>
  {/each}
</select>