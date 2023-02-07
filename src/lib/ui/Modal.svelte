<script lang="ts">
  import CodeView from "$lib/ui/CodeView.svelte";
  import { fade } from "svelte/transition";
  import { customForm } from "$lib/stores/componentStores";
	import type { Writable } from "svelte/store";

  export let visible: Writable<boolean>;
  export let lookup: Writable<number>;

  const closeModal = () => {
    $visible = false;
  };

</script>

{#if $visible}
<div transition:fade id="stage-modal">
  <button class="gesvelte-btn" type="button" on:click={closeModal}>Close</button>
  <slot />
  <!-- <p>{JSON.stringify($customForm[$lookup])}</p> -->
  {#each $customForm[$lookup].props.fields as field}
    <p>{JSON.stringify(field)}</p>
  {/each}
  <!-- <CodeView /> -->
</div>
{/if}

<style>
  #stage-modal {
    background-color: black;
    border-radius: 2rem;
    left: 50%;
    transform: translateX(-50%);
    width: 50%;
    height: 50%;
    position: fixed;
    z-index: 1;
    overflow-x: scroll;
  }
</style>