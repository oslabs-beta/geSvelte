<!--
  Button.svelte
  Base level component representing a button using semantic HTML5 button
  params: 
    type: 'button' | 'submit' | 'reset' - button type (form event emitter)
    value: value/innerText of the button
    className: classes used with atomic CSS selectors
-->

<script lang="ts">
  import type { ButtonProps } from "$lib/types";

  export let type: ButtonProps["type"] = 'button';
  export let value: string = 'default';
  export let className: ButtonProps["className"] = 'gesvelte-btn';
</script>

<button class="gesvelte-btn {className}" {type} {value}>{value}</button>
