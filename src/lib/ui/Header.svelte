<script>
	import '$lib/assets/global-styles.scss';
	import '$lib/assets/styles.css';
	import toolbarLogo from '$lib/assets/gesvelte-text-logo.png';
</script>

<div id="openModal" />
<header class="header-toolbar">
	<div class="container">
		<div class="full-row flex direction-row flex-items-center justify-between height-100">
			<div class="toolbar-logo">
				<a href='/'><img src={toolbarLogo} alt="toolbar-logo-img" /></a>
			</div>
			<div class="main-nav">
				<nav>
					<ul>
						<li><a href="/">Home</a></li>
						<li><a href="/stage">Stage</a></li>
						<li><a href="/https://github.com/oslabs-beta/geSvelte">GitHub</a></li>
					</ul>
				</nav>
			</div>
		</div>
	</div>
</header>

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
</style>
