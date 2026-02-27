import type { Experience, Project } from '../types';

export const EMAIL = 'me@akryptic.dev';
export const GITHUB_URL = 'https://github.com/akryptic';
export const X_URL = 'https://x.com/akryptic0';
export const LINKEDIN_URL = 'https://linkedin.com/in/akryptic';

export const EXPERIENCES: Experience[] = [
	{
		organization: 'ISRAD Sports LLP',
		role: 'Web Developer – Contract Project',
		period: 'Oct 2025 - Jan 2026',
		description: 'Developed a landing website and deployed the project.',
		href: 'https://isradsportsmanagement.com/'
	},
	{
		organization: 'Lovluk',
		role: 'Web Developer – Contract Project',
		period: 'Dec 2024 - Mar 2025',
		description:
			'Developed an official website for a regional cosmetics and hygiene products brand.',
		href: 'https://lovluk.com/'
	}
];

export const PROJECTS: Project[] = [
	{
		name: 'Battery Notifier',
		description:
			'A cross-platform GoLang based utility that notifies users about their battery status and support mobile notifications.',
		github: 'https://github.com/akryptic/battery-notifier'
	},
	{
		name: 'ITO',
		description:
			'An Intelligent Task Organizer (ITO) is a task management application (PWA) built using SvelteKit, designed to help users efficiently organize and manage your tasks.',
		href: 'https://ito.akryptic.dev',
		github: 'https://github.com/akryptic/ito'
	},
	{
		name: 'Irrigo',
		description:
			'A simple wireless irrigation system built using ESP32 microcontroller, Websockets and Jquery (PWA) – designed to automate the watering process for plants and gardens.',
		href: 'https://irrigo.pages.dev',
		github: 'https://github.com/akryptic/irrigo'
	}
];
