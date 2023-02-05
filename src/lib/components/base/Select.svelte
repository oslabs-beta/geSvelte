<script lang="ts">
  import type { LabelValue } from "$lib/types";

  let options: LabelValue[] = [
    {value: "option1", label: "Option 1"},
    {value: "option2", label: "Option 2"},
    {value: "option3", label: "Option 3"}
  ];
  let selected = options[0].value;
  let name: string | null | undefined;
  let id: string | null | undefined;

  function handleSelection(event: Event) {
    const target = event.target as HTMLSelectElement;
    selected = target.value;
  }
</script>

<select id={id} name={name} bind:value={selected} on:change={handleSelection}>
  {#each options as option}
    <option value={option.value}>{option.label}</option>
  {/each}
</select>