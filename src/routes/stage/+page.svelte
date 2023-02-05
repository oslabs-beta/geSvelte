<script>
  // @ts-nocheck
  // import RegistrationWrapper from "$lib/components/wrapper/RegistrationWrapper.svelte";
  import Radio from "$lib/components/base/Radio.svelte";
  import Checkbox from "$lib/components/base/Checkbox.svelte";
  import Button from "$lib/components/base/Button.svelte";
  // import { componentStore } from "../../stores/componentStores";
  // import { radioTestStore, checkboxTestStore } from "$lib/stores/componentStores";
  import { customForm } from "$lib/stores/componentStores";
	import { onMount, setContext } from "svelte";
  import { writable } from "svelte/store";
	import { element } from "svelte/internal";

  let testSubmit;
  let testRadio;

  // setContext('test', checkboxTestStore);

  // // should we add helper functions to a 'global' (not the right word) object?
  // const addCheckbox = (e) => {
  //   const newStore = Object.assign({}, $checkboxTestStore);
  //   // ts error: document.querySelector flags a 'may be null' error
  //   // https://stackoverflow.com/questions/52491832/how-to-use-document-getelementbyid-method-in-typescript
  //   const newCheckboxField = testSubmit;
  //   newStore.fields.push({value: newCheckboxField.value, checked: false});
  //   newCheckboxField.value = '';
  //   $checkboxTestStore = newStore;
  // };

  // const addRadio = (e) => {
  //   const newStore = Object.assign({}, $radioTestStore);
  //   // ts error: document.querySelector flags a 'may be null' error
  //   // https://stackoverflow.com/questions/52491832/how-to-use-document-getelementbyid-method-in-typescript
  //   const newRadio = testRadio;
  //   console.log(newRadio.value)
  //   newStore.fields.push({value: newRadio.value, label: newRadio.value});
  //   newRadio.value = '';
  //   $radioTestStore = newStore;
  // };
  
</script>
<!-- <div class="ges-row">
  <div class="col-2">
    <Checkbox fields={$checkboxTestStore.fields} name="test" />

    <form on:submit|preventDefault={event => addCheckbox(event)}>
      <input bind:this={testSubmit} class="" type="text" name="newRadio" id="testSubmit" />
      <button type="submit">Add Checkbox</button>
    </form>

    <Radio fields={$radioTestStore.fields} />

    <form on:submit|preventDefault={event => addRadio(event)}>
      <input bind:this={testRadio} type="text" name="newRadio" id="testRadio" />
      <button type="submit">Add Radio</button>
    </form>
  </div>
</div> -->

<div>
  <!-- {Object.keys($customForm)} -->
  {#each Object.values($customForm) as element}
    <svelte:component this={element.type} fields={element.fields} />
  {/each}
  <button class="gesvelte-btn" on:click={() => customForm.addRadio()}>Add Radio</button>
  <button class="gesvelte-btn" on:click={() => customForm.addCheckbox()}>Add Checkbox</button>
</div>