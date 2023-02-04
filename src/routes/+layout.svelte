<script lang="ts">
	import Header from '$lib/ui/Header.svelte';
	import RangeSlider from '$lib/components/base/RangeSlider.svelte';
	import SlidingPanel from '$lib/components/SlidingPanel.svelte';
	import '../lib/assets/styles.css';
	import { flyoutStore } from '$lib/flyoutPanel';
	import type { FlyoutSettings } from '$lib/types';

	function trigger() {
		const el: FlyoutSettings = { id: '555', open: true };
		console.log('Open');
		flyoutStore.open(el);
	}
</script>

<main>
	<SlidingPanel id={'555'} />
	<Header />
	<div class="ges-row flex">
		<div class="col-2">
			<RangeSlider name="name" value={50} max={100} min={1} step={1}>LABEL</RangeSlider>
		</div>
		<div class="col-2">
			<RangeSlider name="name" value={50} max={100} min={1} step={1}>LABEL</RangeSlider>
		</div>
		<div class="col-2">
			<button
				class="gesvelte-btn rounded btn-hover btn-lg"
				on:click={() => {
					{
						trigger();
					}
				}}>Open</button
			>
		</div>
	</div>
	<slot />
</main>
