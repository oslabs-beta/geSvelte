<script lang="ts">
	import * as formFields from '$lib/components/base';

	export let themeClass: string;
	export let title: string;
	export let desc: string;
</script>

<div class="gesvelte-form-panel flex direction-column {themeClass}">
	<h2 class="secondary-heading">{title}</h2>
	<p>{desc}</p>
	<slot />
</div>
