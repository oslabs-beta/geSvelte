<script>
  // import RegistrationWrapper from "$lib/components/wrapper/RegistrationWrapper.svelte";
  import Radio from "$lib/components/base/Radio.svelte";
  import Checkbox from "$lib/components/base/Checkbox.svelte";
  import Button from "$lib/components/base/Button.svelte";
  import { componentStore } from "../../stores/componentStore";
	import { onMount } from "svelte";

  const defaultObj = {fields: ['newTest1', 'newTest2'], name: "working"};

  onMount(() => {
    $componentStore = Object.assign({}, defaultObj);
  });
</script>


<!-- <RegistrationWrapper styleClass="gesvelte-styles" /> -->
<!-- <Radio fields={['test1', 'test2']} name="sample" />
<Checkbox fields={[{value: 'please', checked: true}, {value: 'work', checked: false}]} name="testing" />

<Button type="button" value="Test Button" />
<Button type="submit" value="Test Submit" />
<Button type="reset" value="Test Reset" /> -->

<Radio {...$componentStore} />

{#if Object.hasOwn($componentStore, 'fields')}
  <input type="text" bind:value={$componentStore.fields[0]} />
{:else}
  <input type="text" value={defaultObj.fields[0]} />
{/if}