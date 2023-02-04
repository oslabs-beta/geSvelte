<script>
  // import RegistrationWrapper from "$lib/components/wrapper/RegistrationWrapper.svelte";
  import Radio from "$lib/components/base/Radio.svelte";
  import Checkbox from "$lib/components/base/Checkbox.svelte";
  import Button from "$lib/components/base/Button.svelte";
  import { componentStore } from "../../stores/componentStore";
	import { onMount, setContext } from "svelte";
  import { writable } from "svelte/store";

  let testStore = writable({
    fields: [{value: 'One default', checked: true}]
  });

  setContext('test', testStore);
  
  
</script>

<Checkbox fields={$testStore.fields} name="test" />

<form on:submit|preventDefault={e => {
  $testStore = Object.assign({}, $testStore);
  $testStore.fields.push({value: e.target[0].value, checked: false});
  console.log($testStore.fields)
}}>
  <input type="text" name="newRadio" />
  <button type="submit">Add Radio</button>
</form>