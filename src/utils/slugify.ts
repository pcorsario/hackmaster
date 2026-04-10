export const slugify = (value: string) => value.toLowerCase().replace(/\s+/g, '-');

const base = import.meta.env.BASE_URL?.replace(/\/$/, '') ?? '';
export const withBase = (path: string) => {
	if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('//') || path.startsWith('mailto:')) {
		return path;
	}
	const normalized = path.startsWith('/') ? path : `/${path}`;
	return `${base}${normalized}`;
};
