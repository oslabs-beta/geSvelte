<script>
	import mobileHero from '$lib/assets/mobile-hero.png';
</script>

<section
	class="mobile-hero-area flex flex-wrap direction-column justify-between pos-rel hide-on-desktop"
>
	<div class="mobile-hero-text text-center">
		<h1>Pain Free Form Building</h1>
	</div>
	<img class="mobile-mockup" src={mobileHero} alt="main-site-logo" />
</section>

<style lang="scss">
	@media only screen and (max-width: 768px) {
		.mobile-hero-area {
			height: auto;
			background-image: radial-gradient(
					farthest-side at bottom left,
					rgba(255, 0, 255, 0.5),
					transparent
				),
				radial-gradient(
					farthest-corner at bottom right,
					rgba(245, 141, 80, 0.65),
					transparent 3000px
				);
		}
		.mobile-hero-text {
			font-weight: bold;
			width: 60%;
			margin: 0 auto;
			color: rgba(255, 255, 255, 0.6);

			h1 {
				font-size: 3.6rem;
				margin-top: 3rem;
			}
		}
		.mobile-mockup {
			width: 80%;
		}
	}
</style>
