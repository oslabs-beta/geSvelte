<script lang="ts">
  import { writable, type Writable } from "svelte/store";
  import { customForm } from "$lib/stores/componentStores";
	import Modal from "$lib/ui/Modal.svelte";

  let visible: Writable<boolean> = writable(false);
  let id: Writable<number> = writable();

  const showProps = (id: number) => {
    $visible = true;
    $id = id;
  };
  
</script>

<Modal visible={visible} lookup={id} />

{#each Object.entries($customForm) as val}
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <p on:click={() => showProps(val[0])}>{`Key ${val[1].props.id} `}</p>
{/each}