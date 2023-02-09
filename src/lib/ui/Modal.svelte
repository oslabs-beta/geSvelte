<script lang="ts">
	import { createPortal } from '$lib/actions';
	import CodeView from '$lib/ui/CodeView.svelte';
	import { fade } from 'svelte/transition';
	import { customForm, defaultProps } from '$lib/stores/componentStores';
	import type { Writable } from 'svelte/store';

	export let visible: Writable<boolean>;
	export let lookup: Writable<number>;
	// export let value: string | number;
	const closeModal = () => {
		$visible = false;
	};

	const editModal = () => {
		console.log('edit');
	};

	// function onChange(e) {
	// 	e.preventDefault;
	// 	value = e.currentTarget.value;
	// }

	const addInput = (storeField) => {
		customForm.addInput($lookup, structuredClone(defaultProps[storeField.type].fields[0]));
	};

	const deleteInput = (index: number) => {
		customForm.deleteInput($lookup, index);
	};
</script>

{#if $visible}
	<div
		use:createPortal={'openModal'}
		transition:fade
		id="stage-modal"
		class="gesvelte-modal glass-bg py40 px40 "
	>
		<slot />
		<h2 class="text-center" style="display:block;">Field Type: {$customForm[$lookup].type}</h2>
		<div class="ges-row flex direction-row justify-evenly flex-wrap">
			{#each Object.keys($customForm[$lookup].props) as prop}
				{#if prop === 'fields'}
					<div style="width: 100%;">
					{#each Object.keys($customForm[$lookup].props.fields) as index}
						{#each Object.keys($customForm[$lookup].props.fields[index]) as component}
							<!-- {console.log(component)} -->
							{#if component === 'checked'}
								<input
									id={`${$lookup}-${index}-${component}`}
									name={`${$lookup}-${index}-${component}`}
									type="checkbox" 
									on:click={() => {
										// console.log($customForm[$lookup].props.fields[index][component])
										customForm.update(ps => {
											const ns = Object.assign({}, ps);
											
											ns[$lookup].props.fields[+index][component] = !ps[$lookup].props.fields[+index][component];
											
											return ns;
										})
									}}
									checked={$customForm[$lookup].props.fields[index][component]}
									/>
									<label for={`${$lookup}-${index}-${component}`}>Checked by Default</label>
							{:else}
								<input
									class="mr3"
									type="text"
									placeholder="Field Name"
									bind:value={$customForm[$lookup].props.fields[index][component]}
									/>
								{/if}
							{/each}
							<button class="gesvelte-btn" type="button" on:click={() => deleteInput(+index)}>Delete</button>
					{/each}
					</div>
					<button class="gesvelte-btn" type="button" on:click={() => addInput($customForm[$lookup])}>Add</button>
				{:else}
					<div>	
						<h4>{prop.toUpperCase()}:</h4>
							<input
								type="text"
								placeholder="Field Value"
								bind:value={$customForm[$lookup].props[prop]}
							/>
					</div>
				{/if}
			{/each}
		</div>
		<div class="flex ges-row direction-row justify-evenly">
			<button class="gesvelte-btn rounded" on:click={closeModal}>Close</button>
			<!-- <button class="gesvelte-btn rounded" on:click={editModal}>Edit</button> -->
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
