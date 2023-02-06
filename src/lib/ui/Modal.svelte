<script>
  import CodeView from "$lib/ui/CodeView.svelte";
</script>

<div id="stage-modal">
  <slot />
  <CodeView />
</div>

<style>
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