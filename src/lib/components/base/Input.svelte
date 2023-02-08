<!--
  Input.svelte
  Base level component representing a text inputs using HTML5 inputs
  TODO: update data to be more inline with base data shape
  params: 
    inputType: TODO: set up union type for all acceptable text inputs
    labelClass: classes used with atomic CSS selectors
    ...
-->

<script>
	//@ts-nocheck
	// base components will be in a form wrapper, enforce inheritance
	// export let props;
	export let placeholder, labelClass, labelText, inputType, id, name;
	// label for property will always match name/id
	// const { labelClass, labelText, inputType, inputId, inputName } = props;
</script>

<label class={labelClass} for={name}>{labelText}</label>
<input type={inputType} id={id} name={name} {placeholder} />
