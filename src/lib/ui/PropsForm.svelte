<script lang="ts">
	//@ts-nocheck
	import { writable, type Writable } from 'svelte/store';
	import { customForm } from '$lib/stores/componentStores';
	import Modal from '$lib/ui/Modal.svelte';

	let visible: Writable<boolean> = writable(false);
	let id: Writable<number> = writable();

	const showProps = (newId: number) => {
		$visible = true;
		$id = newId;
	};
</script>

<Modal {visible} lookup={id} />

{#each Object.entries($customForm) as val}
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div class="p-hover">
		<!-- val is an array... val[0] is the id... val[1] is obj with keys of (?)Component(?), Type, & Props -->
		<p on:click={() => showProps(+val[0])}>{`Key ${val[1].props.id} `}</p>
	</div>
{/each}
