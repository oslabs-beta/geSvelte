<script>
//@ts-nocheck
  import { customForm } from "$lib/stores/componentStores";
	import Modal from "$lib/ui/Modal.svelte";
  
</script>

<Modal>
  <div class="flex direction-row justify-center">
    <button class="gesvelte-btn" on:click={() => customForm.addRadio('Radio', [
      {value: 'option1', label: 'Option 1'},
      {value: 'option2', label: 'Option 2'},
    ])}>Add Radio</button>
    <button class="gesvelte-btn" on:click={() => customForm.addCheckbox('Checkbox')}>Add Checkbox</button>
    <button class="gesvelte-btn" on:click={() => customForm.addField('Radio')}>Add Field</button>
  </div>
</Modal>

<div class="flex direction-row">
  <div class="container col-2">
    <form>
      <!-- {Object.keys($customForm)} -->
      {#each Object.values($customForm) as element}
        <svelte:component this={element.component} fields={element.fields} />
      {/each}
    </form>
  </div>
  <div class="container col-2">
  </div>
</div>