<script>
  import { customForm } from "$lib/stores/componentStores";
</script>

<code>
  {'<form>\n'}
    {#each Object.values($customForm) as component}
      {`\t<${component.type} fields={${JSON.stringify(component.props.fields)}} />\n`}
    {/each}
  {'</form>'}
</code>

<style>
  code {
    text-align: left;
    white-space: pre-wrap;
    min-width: fit-content;
  }
</style>