<script>
	import Header from '$lib/ui/Header.svelte';
	import RangeSlider from '$lib/components/base/RangeSlider.svelte';
	import '../lib/assets/styles.css';
</script>

<main>
	<Header />
	<div class="ges-row flex">
		<div class="col-2">
			<RangeSlider name="name" value={50} max={100} min={1} step={1}>LABEL</RangeSlider>
		</div>
		<div class="col-2">
			<RangeSlider name="name" value={50} max={100} min={1} step={1}>LABEL</RangeSlider>
		</div>
	</div>
	<slot />
</main>
