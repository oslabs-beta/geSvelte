<script lang="ts">
	//@ts-nocheck
	import { customForm } from '$lib/stores/componentStores';
	import CodeView from '$lib/ui/CodeView.svelte';
	import Modal from '$lib/ui/Modal.svelte';
	import SlidingPanel from '$lib/components/SlidingPanel.svelte';
	import type { FlyoutSettings } from '$lib/types';
	import { flyoutStore } from '$lib/flyoutPanel';
	import PropsForm from '$lib/ui/PropsForm.svelte';
	import Panel from '$lib/components/wrapper/Panel.svelte';

	function trigger() {
		const el: FlyoutSettings = { id: '556', open: true };
		console.log('Open');
		flyoutStore.open(el);
	}
</script>

<!-- <Modal>
  <div class="flex direction-row justify-center">
    <button class="gesvelte-btn" on:click={() => customForm.addField('Checkbox')}>Add Checkbox</button>
    <button class="gesvelte-btn" on:click={() => customForm.addField('Radio')}>Add Radio</button>
  </div>
</Modal> -->

<SlidingPanel id="556">
	<div class="ges-row flex direction-column flex-items-center">
		<button class="gesvelte-btn rounded" on:click={() => customForm.addField('Checkbox')}>Add Checkbox</button>
		<button class="gesvelte-btn rounded" on:click={() => customForm.addField('Radio')}>Add Radio</button>
		<button class="gesvelte-btn rounded" on:click={() => customForm.addField('Input')}>Add Input</button>
		<PropsForm />
	</div>
</SlidingPanel>

<div class="container">
	<div class="ges-row flex direction-column justify-center flex-items-center py80 px40">
		<Panel themeClass="glass-bg" title="New Form" desc="This is where new fields should populate">
			<form>
				{#each Object.values($customForm) as element}
					<!-- TODO: Create component interface/type to properly type values of customForm -->
					<svelte:component this={element.component} {...element.props} />
				{/each}
			</form>
		</Panel>
		<button class="gesvelte-btn mt-30 rounded glass-bg" on:click={() => trigger()}>Edit Form</button
		>
	</div>
</div>

<div class="container" style="display:none;">
	<CodeView />
</div>
<!-- Container -->
