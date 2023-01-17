<script>
	import { createEventDispatcher } from 'svelte';
	import { fade, blur, fly, slide, scale } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	const dispatch = createEventDispatcher();
</script>

<div class="modal" transition:fade>
	<slot />
</div>

<style>
	.modal {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.5);
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 100;
		pointer-events: none;
		transition: opacity 0.3s ease;
	}
</style>
