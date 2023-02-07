<script lang="ts">
  //@ts-nocheck
  import { customForm } from "$lib/stores/componentStores";
	import CodeView from "$lib/ui/CodeView.svelte";
	import Modal from "$lib/ui/Modal.svelte";
  import SlidingPanel from "$lib/components/SlidingPanel.svelte";
  import type { FlyoutSettings } from "$lib/types";
  import { flyoutStore } from "$lib/flyoutPanel";
	import PropsForm from "$lib/ui/PropsForm.svelte";
  
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
  <div class="ges-row">
    <button class="gesvelte-btn" on:click={() => customForm.addField('Checkbox')}>Add Checkbox</button>
    <button class="gesvelte-btn" on:click={() => customForm.addField('Radio')}>Add Radio</button>
    <PropsForm />
  </div>
  <div class="ges-row">
  </div>
</SlidingPanel>

<div class="flex direction-row">
  <div class="container col-2">
    <form>
      <!-- {Object.keys($customForm)} -->
      {#each Object.values($customForm) as element}
      <!-- TODO: Create component interface/type to properly type values of customForm -->
        <svelte:component this={element.component} {...element.props} />
        <!-- <svelte:component this={element.component} fields={element.fields} /> -->
      {/each}
    </form>
  </div>
  <div class="container col-2">
    <CodeView />
  </div>
</div>
<div>
  <button class="gesvelte-btn" on:click={() => trigger()}>Open</button>
</div>