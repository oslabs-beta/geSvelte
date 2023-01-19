<script lang="ts">
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';
	import Quiz from '$lib/Quiz.svelte';
	import '../styles.css';
	import { browser } from '$app/environment';
</script>

<main>
	<Header />
	<slot />

	<!-- This is where the content of the page will be rendered -->
</main>
