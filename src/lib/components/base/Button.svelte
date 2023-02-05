<!--
  Button.svelte
  Base level component representing a button using semantic HTML5 button
  params: 
    type: 'button' | 'submit' | 'reset' - button type (form event emitter)
    value: value/innerText of the button
    className: classes used with atomic CSS selectors
-->

<script lang="ts">
  export let type: 'button' | 'submit' | 'reset' = 'button', value = 'default', className = 'gesvelte-btn';
</script>

<button class={className} {type} {value}>{value}</button>