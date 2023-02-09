<script lang="ts">
	import mockup from '$lib/assets/mockup.png';
	import svelteLogo from '$lib/assets/svelte-logo.png';
</script>

<section class="hero-area flex flex-items-center justify-between pos-rel hide-on-mobile">
	<div class="ges-row">
		<div class="hero-text">
			<h1>Pain Free Form Building</h1>
		</div>
		<div class="hero-item">
			<span>Built With:</span>
			<img src={svelteLogo} alt="Built with Svelte" />
		</div>
		<div class="svg-divider">
			<svg
				data-name="Layer 1"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 1200 120"
				preserveAspectRatio="none"
			>
				<path
					d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
					class="shape-fill"
				/>
			</svg>
		</div>
		<img class="mockup" src={mockup} alt="main-site-logo" />
	</div>
</section>

<style lang="scss">
	.hero-text {
		position: absolute;
		top: 10vh;
		left: 50%;
		transition: all 0.25s ease;
		transform: translateX(-50%);

		h1 {
			font-size: 72px;
			font-weight: 900;
			text-transform: uppercase;
			backdrop-filter: blur(8px);
			-webkit-backdrop-filter: blur(8px);
			color: rgba(255, 255, 255, 0.6);
		}
	}

	.hero-item {
		position: absolute;
		top: 5rem;
		left: 90%;

		span {
			font-size: 24px;
			font-weight: 900;
			color: rgba(255, 255, 255, 0.6);
		}
		img {
			height: 12rem;
		}
	}

	.svg-divider {
		position: absolute;
		bottom: -1px;
		left: 0;
		width: 100%;
		overflow: hidden;
		line-height: 0;

		svg {
			position: relative;
			display: block;
			width: calc(100% + 1.3px);
			height: 205px;
			transform: rotateY(180deg);
		}

		.shape-fill {
			fill: #06012a;
		}
	}

	.hero-area {
		height: 100vh;
		background-image: radial-gradient(
				farthest-side at bottom left,
				rgba(255, 0, 255, 0.5),
				transparent
			),
			radial-gradient(farthest-corner at bottom right, rgba(245, 141, 80, 0.65), transparent 3000px);

		.mockup {
			position: absolute;
			z-index: 10;
			bottom: 20%;
			left: 50%;
			height: 65vh;
			transform: translateX(-50%);
			transition: all 0.2s ease;
		}
	}
</style>
