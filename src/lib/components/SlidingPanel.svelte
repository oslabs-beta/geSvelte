<script lang="ts">
	import { fly } from 'svelte/transition';
	import { flyoutStore } from '$lib/flyoutPanel';
	import type { FlyoutSettings } from '$lib/types';
	export let id: string;

	flyoutStore.subscribe((settings) => {
		if (settings.open === false) return;
	});

	function close() {
		const el: FlyoutSettings = { id, open: true };
		console.log('Open');
		flyoutStore.close();
	}
</script>

{#if $flyoutStore.open === true}
	<div {id} class="flyout-panel flex flex-column half-width" transition:fly={{ x: 100, duration: 1000 }}>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<span class="close" on:click={() => close()}>X</span>
		<slot />
	</div>
{/if}
