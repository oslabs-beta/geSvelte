<script lang="ts">
	import Header from '$lib/ui/Header.svelte';
	import RangeSlider from '$lib/components/base/RangeSlider.svelte';
	import SlidingPanel from '$lib/components/SlidingPanel.svelte';
	import '../lib/assets/styles.css';
	import '$lib/assets/global-styles.scss';
	import { flyoutStore } from '$lib/flyoutPanel';
	import type { FlyoutSettings } from '$lib/types';
	import Select from '$lib/components/base/Select.svelte';
	import Panel from '$lib/components/wrapper/Panel.svelte';
	import Input from '$lib/components/base/Input.svelte';
	import Button from '$lib/components/base/Button.svelte';

	function trigger() {
		const el: FlyoutSettings = { id: '555', open: true };
		console.log('Open');
		flyoutStore.open(el);
	}

	let options = [
		{ value: 'Lorem Ipsum Dolor', label: 'Option 1' },
		{ value: 'Sit Amet', label: 'Option 2' },
		{ value: 'Something Latin', label: 'Option 3' }
	];
</script>

<main>
	<SlidingPanel id={'555'} />
	<Header />
	<div class="container">
		<div class="ges-row flex">
			<div class="col col-2">
				<RangeSlider name="name" value={50} max={100} min={1} step={1}>LABEL</RangeSlider>
			</div>
			<div class="col col-2">
				<RangeSlider name="name" value={50} max={100} min={1} step={1}>LABEL</RangeSlider>
			</div>
		</div>
		<div class="ges-row">
			<div class="col col-2">
				<button
					class="gesvelte-btn rounded btn-hover btn-lg"
					on:click={() => {
						{
							trigger();
						}
					}}>Open</button
				>
			</div>
			<div class="col col-2">
				<Select placeholder="Select One" selected="Lorem Ipsum Dolor" id={1} name="lorem" />
			</div>
		</div>
		<div class="ges-row flex">
			<div class="col-one-third">
				<Panel
					themeClass="glass-effect"
					title="Login Here"
					desc="Please enter your username and password"
				>
					<Input
						labelClass="default"
						labelText="Username"
						inputType="text"
						inputId="username"
						inputName="username"
						placeholder="Enter Username"
					/>
					<Input
						labelClass="default"
						labelText="Password"
						inputType="password"
						inputId="password"
						inputName="password"
						placeholder="Enter Password"
					/>
					<Button className="btn-med" type="submit" value="Log in Now" />
				</Panel>
			</div>
			<div class="col-two-thirds" />
		</div>
	</div>
	<slot />
</main>
