<script lang="ts">
	import type { LabelValue } from '$lib/types';

	let options: LabelValue[] = [
		{ value: 'option1', label: 'Option 1' },
		{ value: 'option2', label: 'Option 2' },
		{ value: 'option3', label: 'Option 3' }
	];
	let selected: any;
	selected = options[0].value;
	let name: string | null | undefined;
	let id: string | null | undefined;
	let placeholder: string | null | undefined;

	function handleSelection(event: Event) {
		const target = event.target as HTMLSelectElement;
		selected = target.value;
	}
</script>

<div class="gesvelte-select-container">
	<select
		class="flex pt3 pb3 width-20"
		{id}
		{name}
		{placeholder}
		bind:value={selected}
		on:change={handleSelection}
	>
		{#each options as option}
			<option value={option.value}>{option.label}</option>
		{/each}
	</select>
</div>
