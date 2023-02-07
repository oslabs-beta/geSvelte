<<<<<<< HEAD
<script>
	// @ts-nocheck
	import { onMount } from 'svelte';

	// fields will be an array of strings representing options
	export let styleClass = 'gesvelte-default';

	export let fields = [
		{ value: 'option1', label: 'Option 1' },
		{ value: 'option2', label: 'Option 2' },
		{ value: 'option3', label: 'Option 3' }
	];

	let group;
	let current;
	if (fields.length) current = fields[0].value;
=======
<!--
  Radio.svelte
  Base level component representing a radio inputs using HTML5 inputs
  params: 
    styleClass: classes used with atomic CSS selectors
    fields [{value, label}]: value of the field and state of box at creation TODO: type/interface for object representing fields
    ...
-->

<script lang="ts">
  import type { LabelValue } from "$lib/types";

  export let styleClass: string = "gesvelte-default";
  export let name: string = "default";
  export let legend: string = "Default directions:"
  export let fields: LabelValue[] = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" }
  ];

  let selected: string | null | undefined;
  if (fields.length) selected = fields[0].value;
>>>>>>> dev

	$: checked = current === group;
</script>

<fieldset class="radio-group {styleClass}">
<<<<<<< HEAD
	{#each fields as field}
		<label for={field.label}>
			<input
				class:active={current === field.value}
				on:click={() => (current = field.value)}
				type="radio"
				bind:group
				id={field.label}
				name={field.label}
				value={field.value}
			/>
			<span>{field.label}</span></label
		>
	{/each}
</fieldset>
=======
  <legend>{legend}</legend>
  {#each fields as field}
  <label for={field.label}>
    <input type="radio" bind:group={selected} id={field.label} {name} value={field.value}>
    <span>{field.label}</span>
  </label>
  {/each}
</fieldset>
>>>>>>> dev
