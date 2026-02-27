<script lang="ts">
	import '$lib/styles/app.scss';

	let { children } = $props();
</script>

<svelte:head>
	<meta
		name="description"
		content="Portfolio of Anil Kumar — B.Tech student in AI & Data Science, exploring Typescript, Go, Svelte, and C."
	/>
	<meta
		name="keywords"
		content="anil, kumar, indie developer, developer, web developer, freelancer"
	/>
	<meta name="robots" content="index, follow" />
	<meta name="language" content="English" />
	<meta name="revisit-after" content="2 days" />
	<meta name="author" content="Anil Kumar" />

	<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
	<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
	<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
	<link rel="icon" type="image/ico" sizes="16x16" href="/favicon.ico" />
	<link rel="manifest" href="/site.webmanifest" />

	<link rel="canonical" href="https://akryptic.dev" />

	<meta property="og:title" content="Anil Kumar – Portfolio" />
	<meta
		property="og:description"
		content="B.Tech student in AI & Data Science exploring Typescript, Go, Svelte, and C."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://akryptic.dev" />
	<meta property="og:image" content="/social-preview.png" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Anil Kumar – Portfolio" />
	<meta
		name="twitter:description"
		content="B.Tech student in AI & Data Science exploring Typescript, Go, Svelte, and C."
	/>
	<meta name="twitter:image" content="/social-preview.png" />

	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "Person",
			"name": "Anil Kumar",
			"url": "https://akryptic.dev",
			"jobTitle": "Software Developer",
			"sameAs": ["https://twitter.com/akryptic0", "https://github.com/akryptic"]
		}
	</script>
</svelte:head>

{@render children()}
