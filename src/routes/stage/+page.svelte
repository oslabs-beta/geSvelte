<script>
  // import RegistrationWrapper from "$lib/components/wrapper/RegistrationWrapper.svelte";
  import Radio from "$lib/components/base/Radio.svelte";
  import Checkbox from "$lib/components/base/Checkbox.svelte";
  import Button from "$lib/components/base/Button.svelte";
</script>


<!-- <RegistrationWrapper styleClass="gesvelte-styles" /> -->
<Radio fields={['test1', 'test2']} name="sample" />
<Checkbox fields={[{value: 'please', checked: true}, {value: 'work', checked: false}]} name="testing" />

<Button type="button" value="Test Button" />
<Button type="submit" value="Test Submit" />
<Button type="reset" value="Test Reset" />