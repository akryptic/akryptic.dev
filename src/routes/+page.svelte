<script lang="ts">
	import { Github, Link } from '$lib/components/icons';
	import { EMAIL, EXPERIENCES, GITHUB_URL, LINKEDIN_URL, PROJECTS, X_URL } from '$lib/const';
</script>

<svelte:head>
	<title>Anil Kumar</title>
</svelte:head>

{#snippet Header()}
	<header class="header">
		<a href="/"><h1 class="text-lg">Anil Kumar</h1></a>
		<nav>
			<a class="muted" target="_blank" href="/resume.pdf">Resume</a>
			<a class="muted" target="_blank" href="mailto:{EMAIL}">Email</a>
			<a class="muted" target="_blank" href={GITHUB_URL}>GitHub</a>
			<a class="muted" target="_blank" href={LINKEDIN_URL}>LinkedIn</a>
			<a class="muted" target="_blank" href={X_URL}>X</a>
		</nav>
	</header>
{/snippet}

{#snippet Card({
	title,
	organization,
	subTitle,
	description,
	href,
	github
}: {
	title: string;
	description: string;
	organization?: string;
	subTitle?: string;
	href?: string;
	github?: string;
})}
	<article class="card">
		<header>
			<h3>{title}</h3>
			{#if href || github}
				<div class="links">
					{#if href}
						<a aria-label="External Link" class="muted" target="_blank" {href}>
							<Link size={18} />
						</a>
					{/if}
					{#if github}
						<a aria-label="GitHub" class="muted" target="_blank" href={github}>
							<Github size={18} /></a
						>
					{/if}
				</div>
			{/if}
		</header>

		{#if organization}
			<p class="text-sm">@ {organization}</p>
		{/if}

		{#if subTitle}
			<p class="text-xs">{subTitle}</p>
		{/if}

		<p class="desc text-sm">{description}</p>
	</article>
{/snippet}

<div class="container">
	{@render Header()}

	<section class="intro">
		<p>
			I'm a B.Tech student in Artificial Intelligence & Data Science, driven by pure curiosity for
			how computers work. I didn’t choose this field for trends or money — I chose it because I
			genuinely enjoy going deep into systems and understanding technology from the ground up. My
			core stack is <strong>Typescript, Go, Svelte and C</strong>.
		</p>
		<br />
		<p>
			My journey started with tweaking <strong>Minecraft</strong> add-ons on mobile, which slowly
			led me to C and the fundamentals of computing. From there, I explored widely —
			<strong>Flutter, Kotlin, Android development, Unity, Godot</strong>, and even basic 2D
			graphics with <strong>SDL2</strong>. I’ve always been fascinated by how software interacts
			with hardware and users.
		</p>
		<br />
		<p>
			On the web side, I experimented across JavaScript, React, Svelte, and SvelteKit — sometimes
			moving too fast, but learning something valuable each time. I’ve built small APIs using
			ElysiaJS and Express and continue strengthening my backend and database fundamentals.
			Exploration helped me discover what I truly enjoy: systems, depth, and problem-solving.
		</p>
		<br />
		<p>
			I’ve been using Linux as my daily driver for the past two years, and I enjoy working close to
			the system — networking basics, OS concepts, and hardware-level curiosity. I’ve also explored
			cross-platform tools like Tauri, Wails, and PWAs to understand how native and web technologies
			connect.
		</p>
		<br />
		<p>
			I consider myself a curious generalist becoming more intentional every day — someone who
			explores broadly but is now focused on building depth. Outside of coding, I enjoy complex,
			grind-heavy, and creative games like Minecraft (modded), Hypixel, and Factorio — games that
			reward systems thinking and optimization.
		</p>
	</section>

	<section class="showcase text-muted">
		<div>
			<h2>Experience</h2>
			<ul>
				{#each EXPERIENCES as exp, i (`${i}__${exp.organization}`)}
					<li>
						{@render Card({
							title: `${exp.role}`,
							organization: exp.organization,
							subTitle: exp.period,
							description: exp.description,
							href: exp.href
						})}
					</li>
				{/each}
			</ul>
		</div>
		<div>
			<h2>Projects</h2>
			<ul>
				{#each PROJECTS as proj, i (`${i}__${proj.name}`)}
					<li>
						{@render Card({
							title: proj.name,
							description: proj.description,
							href: proj.href,
							github: proj.github
						})}
					</li>
				{/each}
			</ul>
		</div>
	</section>

	<footer class="text-muted text-xs">
		<span>&copy; 2026 anilkumar</span>
		<div class="credits">
			<span>
				Inspired by <a
					class="muted"
					href="https://henil.dev"
					target="_blank"
					rel="noopener noreferrer"
				>
					henil.dev
				</a>
			</span>
			<span>
				Powered by <a
					class="muted"
					href="https://svelte.dev"
					target="_blank"
					rel="noopener noreferrer"
				>
					Svelte
				</a>
				and
				<a
					class="muted"
					href="https://pages.cloudflare.com"
					target="_blank"
					rel="noopener noreferrer"
				>
					Cloudflare Pages
				</a>
			</span>
		</div>
	</footer>
</div>

<style>
	.container {
		margin: 0 auto;
		width: 100%;
		max-width: 42rem;
		display: flex;
		flex-direction: column;
		gap: 2rem;
		padding: 4rem 1rem;
	}

	.card {
		display: flex;
		width: 100%;
		flex-direction: column;
		text-align: left;

		header {
			display: flex;
			justify-content: space-between;
			width: 100%;

			h3 {
				font-size: 1rem;
				color: var(--color-base-content);
			}

			.links {
				display: flex;
				gap: 0.25rem;
			}
		}

		p.desc {
			margin-top: 0.5rem;
		}
	}

	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;

		h1 {
			font-weight: 600;
		}

		nav {
			display: flex;
			gap: 0.5rem;
			font-size: 0.875rem;
			line-height: calc(1.25 / 0.875);

			a {
				display: flex;
				align-items: center;
				font-weight: 600;
				gap: 0.25rem;
			}
		}
	}

	.intro {
		margin-bottom: 1rem;
		line-height: 1.75rem;
	}

	.showcase {
		display: grid;
		gap: 2rem;
		grid-template-columns: repeat(2, minmax(0, 1fr));

		> div {
			display: flex;
			gap: 1rem;
			flex-direction: column;

			h2 {
				font-size: 1rem;
				font-weight: 600;
			}

			ul {
				display: flex;
				flex-direction: column;

				&:hover li:not(:hover) {
					opacity: 0.5;
				}

				li {
					padding: 0.5rem 0;
					transition: opacity 0.25s ease;
				}
			}
		}
	}

	footer {
		margin-top: 8rem;
		display: flex;
		align-items: flex-end;
		justify-content: space-between;
		gap: 0.5rem;

		.credits {
			display: flex;
			flex-direction: column;
		}
	}

	@media (max-width: 460px) {
		.header {
			flex-direction: column;
			nav {
				max-width: 100%;
			}
		}

		.showcase {
			grid-template-columns: 1fr;
		}
	}
</style>
