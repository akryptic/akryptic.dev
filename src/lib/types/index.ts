export interface Experience {
	organization: string;
	role: string;
	period: string;
	description: string;
	href?: string;
}

export interface Project {
	name: string;
	description: string;
	href?: string;
	github: string;
}
