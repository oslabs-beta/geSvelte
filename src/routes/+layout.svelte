<script lang="ts">
	import toolbarLogo from '$lib/assets/gesvelte-text-logo.png';
	import mockup from '$lib/assets/mockup.png';
	import icon1 from '$lib/assets/Link.png';
</script>

<header class="header-toolbar">
	<div class="container">
		<div class="full-row flex direction-row flex-items-center justify-between height-100">
			<div class="toolbar-logo">
				<img src={toolbarLogo} alt="toolbar-logo-img" />
			</div>
			<div class="main-nav">
				<nav>
					<ul>
						<li><a href="/">Home</a></li>
						<li><a href="/faqs">FAQs</a></li>
						<li><a href="/features">Features</a></li>
						<li><a href="/docs">Docs</a></li>
					</ul>
				</nav>
			</div>
		</div>
	</div>
</header>
<div class="container">
	<section class="hero-area flex flex-items-center justify-between pos-rel">
		<div class="ges-row">
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
			<img class="mockup" src={mockup} alt="main-site-logo" style="height:100%;" />
		</div>
	</section>
	<section class="main-content">
		<div class="ges-row py80">
			<div class="site-features flex">
				<div class="col-one-third p-all5">
					<div class="feature-box text-center">
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
					<div class="feature-box text-center">
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
					<div class="feature-box text-center">
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
	</section>
</div>

<style lang="scss">
	.header-toolbar {
		position: sticky;
		top: 0;
		left: 0;
		z-index: 100;
		padding: 3rem 4rem;
		background: #16152df2;
		box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
		backdrop-filter: blur(5px);
		-webkit-backdrop-filter: blur(5px);
		-webkit-box-shadow: 10px 29px 53px 8px rgba(0, 0, 0, 0.2);
		-moz-box-shadow: 10px 29px 53px 8px rgba(0, 0, 0, 0.2);
		box-shadow: 10px 29px 53px 8px rgba(0, 0, 0, 0.2);
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
	.toolbar-logo img {
		max-height: 3rem;
		margin: 0;
		padding: 0;
	}
	.main-nav ul li {
		font-size: 1.8rem;
		color: #fff;
		text-transform: uppercase;
	}
	.hero-area {
		min-height: 110rem;
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
		bottom: 200px;
		left: 50%;
		max-height: 90rem;
		transform: translateX(-50%);
		transition: all 0.2s ease;
	}
	.big-logo {
		position: absolute;
		top: 10%;
		left: 50%;
		transform: translateX(-50%);
	}

	.feature-box {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 4rem;
		color: #06012a;
		justify-content: space-evenly;
		background: rgba(213, 216, 255, 0.25);
		box-shadow: 0 4px 30px rgba(0, 0, 0, 0.6);
		backdrop-filter: blur(5px);
		-webkit-backdrop-filter: blur(5px);
		border-radius: 1rem;
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
</style>
