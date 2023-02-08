<script lang="ts">
	import { createPortal } from '$lib/actions';
	import CodeView from '$lib/ui/CodeView.svelte';
	import { fade } from 'svelte/transition';
	import { customForm } from '$lib/stores/componentStores';
	import type { Writable } from 'svelte/store';

	export let visible: Writable<boolean>;
	export let lookup: Writable<number>;
	export let value: string | number;
	const closeModal = () => {
		$visible = false;
	};

	const editModal = () => {
		console.log('edit');
	};

	function onChange(e) {
		e.preventDefault;
		value = e.currentTarget.value;
	}
</script>

{#if $visible}
	<div
		use:createPortal={'openModal'}
		transition:fade
		id="stage-modal"
		class="gesvelte-modal glass-bg py40 px40 "
	>
		<div class="flex ges-row direction-row justify-evenly">
			<button class="gesvelte-btn rounded" on:click={closeModal}>Close</button>
			<button class="gesvelte-btn rounded" on:click={editModal}>Edit</button>
		</div>
		<slot />
		<!-- <p>{JSON.stringify($customForm[$lookup])}</p> -->
		<h2 class="text-center" style="display:block;">Field Type: {$customForm[$lookup].type}</h2>
		<div class="ges-row flex direction-row justify-evenly flex-wrap">
			{#each Object.keys($customForm[$lookup].props) as prop}
				{#if prop === 'fields'}
					<!-- <h4>{prop.toUpperCase()}:</h4> -->
					{#each Object.keys($customForm[$lookup].props.fields) as field}
						{#each Object.entries($customForm[$lookup].props.fields[field]) as component}
							<!-- <span>{component[0]}</span> -->
							<input
								type="text"
								placeholder="Field Name"
								bind:value={$customForm[$lookup].props.fields[field][component[0]]}
							/>
						{/each}
					{/each}
				{:else}
					<h4>
						{prop.toUpperCase()}:
						<input
							type="text"
							placeholder="Field Value"
							bind:value={$customForm[$lookup].props[prop]}
						/>
					</h4>
				{/if}
			{/each}
		</div>
	</div>
{/if}

<style>
	#stage-modal {
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 50%;
		height: 50%;
		position: fixed;
		z-index: 1;
		overflow-x: scroll;
	}
</style>
