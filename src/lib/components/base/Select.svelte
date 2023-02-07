<script lang="ts">
	// @ts-nocheck

	let options = [
		{ value: 'option1', label: 'Option 1' },
		{ value: 'option2', label: 'Option 2' },
		{ value: 'option3', label: 'Option 3' }
	];
	export let selected: any = options[0].value;
	export let name: any;
	export let id: any;
	export let placeholder: string;

	function handleSelection(event) {
		selected = event.target.value;
	}
</script>

<div class="gesvelte-select-container mb2">
	<select
		class="flex pt3 pb3 width-20"
		{id}
		{name}
		{placeholder}
		{selected}
		bind:value={selected}
		on:change={handleSelection}
	>
		{#each options as option}
			<option value={option.value}>{option.label}</option>
		{/each}
	</select>
</div>
