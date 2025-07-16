export const prerender = true;

export function load({ url }) {
	const path = url.pathname;

	return {
		path
	};
}
