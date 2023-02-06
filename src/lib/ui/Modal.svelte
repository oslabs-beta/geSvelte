<script>
  import { customForm } from "$lib/stores/componentStores";

  // $: console.log(JSON.stringify($customForm))
</script>

<div id="stage-modal">
  <slot />
  <code>
    {'<form>\n'}
      {#each Object.values($customForm) as component}
        {`\t<${component.type} fields={${JSON.stringify(component.fields)}} />\n`}
      {/each}
    {'</form>'}
  </code>
</div>

<style>
  code {
    text-align: left;
    white-space: pre-wrap;
    min-width: fit-content;
  }
  #stage-modal {
    background-color: aqua;
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