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

  const editModal = () => {
    console.log('edit')
  }

</script>

{#if $visible}
<div transition:fade id="stage-modal">
  <div class="flex row justify-around">
    <button class="gesvelte-btn" type="button" on:click={closeModal}>Close</button>
    <button class="gesvelte-btn" type="button" on:click={editModal}>Edit</button>
  </div>
  <slot />
  <!-- <p>{JSON.stringify($customForm[$lookup])}</p> -->
  <h2>TYPE: {$customForm[$lookup].type}</h2>
  {#each Object.keys($customForm[$lookup].props) as prop}
    {#if prop === 'fields'}
      <h4>{prop.toUpperCase()}: {JSON.stringify($customForm[$lookup].props[prop])}</h4>
    {:else}
      <h4>
        {prop.toUpperCase()}:
        <input type="text" bind:value={$customForm[$lookup].props[prop]} />
      </h4>
    {/if}
  {/each}

</div>
{/if}

<style>
  #stage-modal {
    background-color: rgba(97, 97, 97, 0.8);
    padding: 15px;
    border-radius: .5rem;
    left: 50%;
    transform: translateX(-50%);
    width: 50%;
    height: 50%;
    position: fixed;
    z-index: 2;
    overflow-x: scroll;
  }
</style>