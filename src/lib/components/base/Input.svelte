<!--
  Input.svelte
  Base level component representing a text inputs using HTML5 inputs
  TODO: update data to be more inline with base data shape
  params:
    placeholder: light text prompt in field when value is empty 
    labelClass: classes used with atomic CSS selectors
    inputType: textInputs 
    labelText: Label/directive/prompt for user
    id: id for input element
    name: reference on submitted data
-->
<script lang="ts">
	import type { textInputs } from '$lib/types';

	export let placeholder: string = 'Default placeholder';
	export let labelClass: string = '';
	export let labelText: string = 'Default label';
	export let inputType: textInputs = 'text';
	export let id: number = -1;
	export let name: string = '';
</script>

<label class={labelClass} for={name}>{labelText}</label>
<input type={inputType} id={`${id}`} {name} {placeholder} />
