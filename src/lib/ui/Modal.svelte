<script lang="ts">
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
  <h2>TYPE: {$customForm[$lookup].type}</h2>
  {#each Object.keys($customForm[$lookup].props) as prop}
    {#if prop === 'fields'}
      <h4>{prop.toUpperCase()}: </h4>
        {#each Object.keys($customForm[$lookup].props.fields) as field}
          {#each Object.entries($customForm[$lookup].props.fields[field]) as component}
            <h1>{component[0]}</h1>
            <input type="text" bind:value={$customForm[$lookup].props.fields[field][component[0]]} />
          {/each}
        {/each}
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
    background-color: gray;
    color: black;
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