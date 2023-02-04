<script>
  // @ts-nocheck
  // import RegistrationWrapper from "$lib/components/wrapper/RegistrationWrapper.svelte";
  import Radio from "$lib/components/base/Radio.svelte";
  import Checkbox from "$lib/components/base/Checkbox.svelte";
  import Button from "$lib/components/base/Button.svelte";
  import { componentStore } from "../../stores/componentStore";
	import { onMount, setContext } from "svelte";
  import { writable } from "svelte/store";

  let checkboxTestStore = writable({
    fields: [{value: 'One default', checked: true}]
  }, () => {
    console.log('checkbox store subscribed!')
    return () => console.log('checkbox store unsubscribed!')
  });

  let radioTestStore = writable({
    fields: [
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2" },
      { value: "option3", label: "Option 3" }
    ]
  });

  let testSubmit;
  let testRadio;

  setContext('test', checkboxTestStore);

  // should we add helper functions to a 'global' (not the right word) object?
  // maybe ()
  const addCheckbox = (e) => {
    const newStore = Object.assign({}, $checkboxTestStore);
    // ts error: document.querySelector flags a 'may be null' error
    // https://stackoverflow.com/questions/52491832/how-to-use-document-getelementbyid-method-in-typescript
    const newCheckboxField = testSubmit;
    newStore.fields.push({value: newCheckboxField.value, checked: false});
    newCheckboxField.value = '';
    $checkboxTestStore = newStore;
  };

  const addRadio = (e) => {
    const newStore = Object.assign({}, $radioTestStore);
    // ts error: document.querySelector flags a 'may be null' error
    // https://stackoverflow.com/questions/52491832/how-to-use-document-getelementbyid-method-in-typescript
    const newRadio = testRadio;
    console.log(newRadio.value)
    newStore.fields.push({value: newRadio.value, label: newRadio.value});
    newRadio.value = '';
    $radioTestStore = newStore;
  };
  
</script>

<Checkbox fields={$checkboxTestStore.fields} name="test" />

<form on:submit|preventDefault={event => addCheckbox(event)}>
  <input bind:this={testSubmit} type="text" name="newRadio" id="testSubmit" />
  <button type="submit">Add Checkbox</button>
</form>

<Radio fields={$radioTestStore.fields} />

<form on:submit|preventDefault={event => addRadio(event)}>
  <input bind:this={testRadio} type="text" name="newRadio" id="testRadio" />
  <button type="submit">Add Radio</button>
</form>