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

	$: checked = current === group;
</script>

<fieldset class="radio-group {styleClass}">
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
