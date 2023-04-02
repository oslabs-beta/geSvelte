<script lang="ts">
	import DesktopHero from '$lib/ui/DesktopHero.svelte';
	import MobileHero from '$lib/ui/MobileHero.svelte';
	import UserIcon from '$lib/ui/UserIcon.svelte';
	import BrushIcon from '$lib/ui/BrushIcon.svelte';
	import ClockIcon from '$lib/ui/ClockIcon.svelte';
	import hacker from '$lib/assets/HACKER.png';
	import boy from '$lib/assets/BOY.png';
	import cowboy from '$lib/assets/COWBOY.png';
	import gnome from '$lib/assets/GNOME.png';
	import mafia from '$lib/assets/MAFIA.png';
	import exclamation from '$lib/assets/Exclamation-Mark.png';
	import * as gesvelte from 'gesvelte';
	import { Input } from 'gesvelte';
</script>

<main>
	<svelte:component this={gesvelte.Input} />
	<Input />
	<div class="container">
		<DesktopHero />
		<MobileHero />
		<section class="main-content">
			<div class="container section-1">
				<div class="ges-row py80">
					<div
						class="text-box glass-bg text-center flex direction-column justify-center flex-items-center full-width"
					>
						<img class="small-icon mb-10" src={exclamation} alt="exclamation-point" />
						<p class="text-lg">
							GeSvelte is very much a work in progress. Many future improvements are on the way.
							There will be breaking changes!
						</p>
					</div>
				</div>
				<div class="ges-row py80">
					<div class="site-features flex">
						<div class="col-one-third p-all5">
							<div class="feature-box glass-bg text-center">
								<UserIcon />
								<h3 class="mb-20">A11Y Ready</h3>
								<p>
									Accessibility has never been more important. Using accessible forms in your
									applications is a must, so we have tested all of our form elements for A11Y
									compliance.
								</p>
							</div>
						</div>
						<div class="col-one-third p-all5">
							<div class="feature-box glass-bg text-center">
								<BrushIcon />
								<h3 class="mb-20">Forms With Style</h3>
								<p>
									Who says forms have to be boring? GeSvelte will provide a library of pre-styled
									forms for you right out of the box. Want to do your own styling? That's an option
									as well.
								</p>
							</div>
						</div>
						<div class="col-one-third p-all5">
							<div class="feature-box glass-bg text-center">
								<ClockIcon />
								<h3 class="mb-20">Save Time</h3>
								<p>
									GeSvelte includes a <a href="/stage"> no-code form builder</a> and a set of pre-composed
									forms that are ready to use right our of the box, don't waste time writing inputs!
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section class="developers pos-rel">
			<div class="container">
				<div class="ges-row flex direction-row">
					<div class="col-5 col-gap">
						<figure class="dev-box glass-bg flex direction-column flex-items-center text-center">
							<div class="image-token mb3">
								<img src={gnome} alt="Avatar" />
							</div>
							<h3 class="mb3">Christian Ashley</h3>
							<span>Software Engineer</span>
						</figure>
					</div>
					<div class="col-5 col-gap">
						<figure class="dev-box glass-bg flex direction-column flex-items-center text-center">
							<div class="image-token mb3">
								<img src={hacker} alt="Avatar" />
							</div>
							<h3 class="mb3">Ksenia Salova</h3>
							<span>Software Engineer</span>
						</figure>
					</div>
					<div class="col-5 col-gap">
						<figure class="dev-box glass-bg flex direction-column flex-items-center text-center">
							<div class="image-token mb3">
								<img src={boy} alt="Avatar" />
							</div>
							<h3 class="mb3">Stefan Jordan</h3>
							<span>Software Engineer</span>
						</figure>
					</div>
					<div class="col-5 col-gap">
						<figure class="dev-box glass-bg flex direction-column flex-items-center text-center">
							<div class="image-token mb3">
								<img src={cowboy} alt="Avatar" />
							</div>
							<h3 class="mb3">Johnny Howell</h3>
							<span>Software Engineer</span>
						</figure>
					</div>
					<div class="col-5 col-gap">
						<figure class="dev-box glass-bg flex direction-column flex-items-center text-center">
							<div class="image-token mb3">
								<img src={mafia} alt="Avatar" />
							</div>
							<h3 class="mb3">Umair Shafiq</h3>
							<span>Software Engineer</span>
						</figure>
					</div>
				</div>
				<div class="ges-row">
					<div
						class="text-box glass-bg text center flex direction-column text-center text-lg flex-items-center"
					>
						<h3 class="mb3 text-lg color-primary lg-shadow mb-20">Why GeSvelte?</h3>
						<p class="text-lg">
							Because with GeSvelte, you can create beautiful and functional forms in a matter of
							minutes using the power of Svelte. The best part? The program generates the component
							code for you, so you can simply copy and paste it into your own code, and render the
							form with ease. Say goodbye to hours spent coding forms from scratch, and hello to
							more time for creativity and innovation.
						</p>
					</div>
				</div>
			</div>
		</section>
	</div>
</main>
<slot />

<style lang="scss">
	.small-icon {
		display: inline-flex;
		height: 8rem;
		width: 8rem;
	}
	.feature-box {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 4rem;
		justify-content: space-evenly;
		transition: all 0.8s ease;
		transform: scale(1);
		border: 3px solid rgba(97, 20, 108, 0.5);
	}
	.feature-box a {
		color: rgba(255, 0, 255);
	}
	.feature-box p {
		font-size: 1.6rem;
	}
	.feature-box:hover {
		transform: scale(1.08);
		border-color: rgb(97, 20, 108);
	}
	.section-1 {
		margin-top: -200px;
	}
	.developers {
		background: rgba(255, 255, 255, 0.2) url('../lib/assets/developers.png') right -30px center no-repeat;
		padding: 100px 0;
	}
	.dev-box {
		padding: 2rem;
		border: 3px solid rgba(97, 20, 108, 0.5);
	}
	.text-box {
		padding: 4rem 6rem;
		border: 3px solid rgba(97, 20, 108, 0.5);
	}
</style>
