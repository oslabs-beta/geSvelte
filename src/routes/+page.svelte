<script lang="ts">
	import mockup from '$lib/assets/mockup.png';
	import icon1 from '$lib/assets/Link.png';
	import hacker from '$lib/assets/HACKER.svg';
	import svelteLogo from '$lib/assets/svelte-logo.png';
</script>

<div class="container">
	<section class="hero-area flex flex-items-center justify-between pos-rel">
		<div class="ges-row">
			<div class="hero-text">
				<h1>Pain Free Form Building</h1>
			</div>
			<div class="hero-item">
				<span>Built With:</span>
				<img src={svelteLogo} alt="Built with Svelte" />
			</div>
			<div class="custom-shape-divider-bottom-1675786035">
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
			<!-- <div class="big-logo">
				<img src={logoMark} alt="main-site-logo" />
			</div> -->
			<img class="mockup" src={mockup} alt="main-site-logo" />
		</div>
	</section>
	<section class="main-content">
		<div class="container section-1">
			<div class="ges-row py80">
				<div class="site-features flex">
					<div class="col-one-third p-all5">
						<div class="feature-box glass-bg text-center">
							<span class="icon mb4">
								<img src={icon1} alt="Link Icon" />
							</span>
							<h3 class="mb3">Lorem Ipsum</h3>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
								exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
							</p>
						</div>
					</div>
					<div class="col-one-third p-all5">
						<div class="feature-box glass-bg text-center">
							<span class="icon mb4">
								<img src={icon1} alt="Link Icon" />
							</span>
							<h3 class="mb3">Lorem Ipsum</h3>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
								exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
							</p>
						</div>
					</div>
					<div class="col-one-third p-all5">
						<div class="feature-box glass-bg text-center">
							<span class="icon mb4">
								<img src={icon1} alt="Link Icon" />
							</span>
							<h3 class="mb3">Lorem Ipsum</h3>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
								exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<section class="developers pos-rel" style="height: 900px;">
		<div class="container">
			<div class="ges-row flex direction-row">
				<div class="col-5 col-gap">
					<figure class="dev-box glass-bg flex direction-column flex-items-center text-center">
						<div class="image-token mb3">
							<img src={hacker} alt="Avatar" />
						</div>
						<h3 class="mb3">Christian Ashley</h3>
						<p>
							Lorem ipsum dolor sit amet, per etiam omnes omittam ne. Id putant minimum perpetua
							sea.
						</p>
					</figure>
				</div>
				<div class="col-5 col-gap">
					<figure class="dev-box glass-bg flex direction-column flex-items-center text-center">
						<div class="image-token mb3">
							<img src={hacker} alt="Avatar" />
						</div>
						<h3 class="mb3">Ksenia Salova</h3>
						<p>
							Lorem ipsum dolor sit amet, per etiam omnes omittam ne. Id putant minimum perpetua
							sea.
						</p>
					</figure>
				</div>
				<div class="col-5 col-gap">
					<figure class="dev-box glass-bg flex direction-column flex-items-center text-center">
						<div class="image-token mb3">
							<img src={hacker} alt="Avatar" />
						</div>
						<h3 class="mb3">Stefan Jordan</h3>
						<p>
							Lorem ipsum dolor sit amet, per etiam omnes omittam ne. Id putant minimum perpetua
							sea.
						</p>
					</figure>
				</div>
				<div class="col-5 col-gap">
					<figure class="dev-box glass-bg flex direction-column flex-items-center text-center">
						<div class="image-token mb3">
							<img src={hacker} alt="Avatar" />
						</div>
						<h3 class="mb3">Johnny Howell</h3>
						<p>
							Lorem ipsum dolor sit amet, per etiam omnes omittam ne. Id putant minimum perpetua
							sea.
						</p>
					</figure>
				</div>
				<div class="col-5 col-gap">
					<figure class="dev-box glass-bg flex direction-column flex-items-center text-center">
						<div class="image-token mb3">
							<img src={hacker} alt="Avatar" />
						</div>
						<h3 class="mb3">Some other dude</h3>
						<p>
							Lorem ipsum dolor sit amet, per etiam omnes omittam ne. Id putant minimum perpetua
							sea.
						</p>
					</figure>
				</div>
			</div>
			<div class="ges-row">
				<div
					class="text-box glass-bg text center flex direction-column text-center text-lg flex-items-center"
				>
					<h3 class="mb3 text-lg">Why GesVelte?</h3>
					<p class="text-lg">
						Ea splendide aliquando duo, ut pri iisque dissentias. Ex epicuri constituto pro, doctus
						platonem constituto sed ei. Eu cum option electram, pro modus inermis adversarium ne.
						Sint falli conclusionemque et eos. Vix at quando essent sanctus, splendide conceptam ius
						in, te omnium assentior sed. Ea facer assum diceret sea, ex vix duis viris. Idque
						nonumes pericula qui in.
					</p>
					<p />
				</div>
			</div>
		</div>
	</section>
</div>
<slot />

<style lang="scss">
	.hero-text {
		position: absolute;
		top: 10vh;
		left: 50%;
		transition: all 0.25s ease;
		transform: translateX(-50%);
	}
	.hero-text h1 {
		font-size: 72px;
		font-weight: 900;
		text-transform: uppercase;
		backdrop-filter: blur(8px);
		-webkit-backdrop-filter: blur(8px);
		color: rgba(255, 255, 255, 0.6);
	}
	.hero-item {
		position: absolute;
		top: 5rem;
		left: 90%;
	}
	.hero-item span {
		font-size: 24px;
		font-weight: 900;
		color: rgba(255, 255, 255, 0.6);
	}
	.hero-item img {
		height: 12rem;
	}
	.custom-shape-divider-bottom-1675786035 {
		position: absolute;
		bottom: -1px;
		left: 0;
		width: 100%;
		overflow: hidden;
		line-height: 0;
	}

	.custom-shape-divider-bottom-1675786035 svg {
		position: relative;
		display: block;
		width: calc(100% + 1.3px);
		height: 205px;
		transform: rotateY(180deg);
	}

	.custom-shape-divider-bottom-1675786035 .shape-fill {
		fill: #06012a;
	}
	.hero-area {
		height: 100vh;
		background-image: radial-gradient(
				farthest-side at bottom left,
				rgba(255, 0, 255, 0.5),
				transparent
			),
			radial-gradient(farthest-corner at bottom right, rgba(245, 141, 80, 0.65), transparent 3000px);
	}
	.mockup {
		position: absolute;
		z-index: 10;
		bottom: 20%;
		left: 50%;
		height: 65vh;
		transform: translateX(-50%);
		transition: all 0.2s ease;
	}
	.feature-box {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 4rem;
		color: rgba(255, 255, 255, 0.6);
		justify-content: space-evenly;
		transition: all 0.8s ease;
		transform: scale(1);
		border: 3px solid rgba(97, 20, 108, 0.5);
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
		color: rgba(255, 255, 255, 0.6);
		padding: 2rem;
		border: 3px solid rgba(97, 20, 108, 0.5);
	}
	.text-box {
		padding: 4rem 6rem;
		color: rgba(255, 255, 255, 0.6);
		border: 3px solid rgba(97, 20, 108, 0.5);
	}

	@media (min-width: 1024px) {
        .mockup {
        bottom: 30%;
        height: 60vh;
    }
    .hero-text {
        top: 10vh;
    
        h1 {
            font-size: 6rem;
        }
    }
}
</style>
