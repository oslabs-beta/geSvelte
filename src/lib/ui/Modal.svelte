<script lang="ts">
	import CodeView from '$lib/ui/CodeView.svelte';
	import { fade } from 'svelte/transition';
	import { customForm } from '$lib/stores/componentStores';
	import type { Writable } from 'svelte/store';
	import { createPortal } from '$lib/actions';

	export let visible: Writable<boolean>;
	export let lookup: Writable<number>;

	const closeModal = () => {
		$visible = false;
	};

	const editModal = () => {
		console.log('edit');
	};
</script>

{#if $visible}
	<div
		use:createPortal={'openModal'}
		transition:fade
		id="stage-modal"
		class="gesvelte-modal glass-bg py30 px30"
	>
		<div class="flex ges-row justify-around">
			<button class="gesvelte-btn" type="button" on:click={closeModal}>Close</button>
			<button class="gesvelte-btn" type="button" on:click={editModal}>Edit</button>
		</div>
		<slot />
		<!-- <p>{JSON.stringify($customForm[$lookup])}</p> -->
		<h2>TYPE: {$customForm[$lookup].type}</h2>
		{#each Object.keys($customForm[$lookup].props) as prop}
			{#if prop === 'fields'}
				<h4>{prop.toUpperCase()}: {JSON.stringify($customForm[$lookup].props[prop])}</h4>
			{:else}
				<h4>{prop.toUpperCase()}: {$customForm[$lookup].props[prop]}</h4>
			{/if}
		{/each}
		<!-- {#each $customForm[$lookup].props.fields as field}
    <p>{JSON.stringify(field)}</p>
  {/each} -->
		<!-- <h4>ID: {$customForm[$lookup].props.id}</h4>
  <h4>NAME: {$customForm[$lookup].props.name}</h4>
  <h4>FIELDS: </h4>
  <h4>LEGEND: {$customForm[$lookup].props.legend}</h4> -->
		<!-- <CodeView /> -->
	</div>
{/if}

<style>
	#stage-modal {
		position: fixed;
		left: 50%;
		transform: translateX(-50%);
		width: 50%;
		height: 50%;
		z-index: 1;
		overflow-x: scroll;
	}
</style>
