<script lang="ts">
	export let type: 'button' | 'submit' | 'reset' = 'button',
		value = 'default',
		className = 'gesvelte-btn';
</script>

<button class="gesvelte-btn {className}" {type} {value}>{value}</button>
