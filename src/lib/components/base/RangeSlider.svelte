<script lang="ts">

	export let name: string;
	export let id: string = 'range-slider-aaaa';
	export let value: number = 0;
	export let min: number = 0;
	export let max: number = 100;
	export let step: number = 1;
	export let bgColor: string = 'bg-accent';
	// Props (a11y)
	/** A semantic ARIA label. */
	export let label: string = '';
</script>

<div class="range-slider ml2">
	<!-- Slot: Default -->
	<label class="range-slider-label" for={id}><slot /></label>
	<!-- Content -->
	<div class="range-slider-content flex justify-content">
		<!-- Input -->
		<input
			type="range"
			{id}
			{name}
			class="range-slider-input full-width height-2 {bgColor}"
			aria-label={label}
			{min}
			{max}
			{step}
			bind:value
			on:click
			on:change
			on:blur
		/>
	</div>
	<!-- Slot: Trail -->
	<div class="range-slider-value p-all1 tag-sm mt-2">{value}</div>
</div>
