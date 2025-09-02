<script lang="ts">
	import { browser } from '$app/environment';

	export let pos: 'tl' | 'tr' | 'bl' | 'br' = 'tr';
	export let size: 16 | 20 | 24 | 28 | 32 | 36 = 24;
	export let color: string = 'currentColor';
	export let opacity: number = 0.1;
	export let rotate: number = 0;
	export let rounded: string = 'rounded-lg';
	export let parallaxSpeed: number = 0.1;

	window.addEventListener('scroll', () => {
		if (browser) {
			const ornaments = document.querySelectorAll('.ornament');
			ornaments.forEach((ornament) => {
				const scrollPosition = window.pageYOffset;
				(ornament as HTMLElement).style.transform =
					`translateY(-${scrollPosition * parallaxSpeed}px)`;
			});
		}
	});
</script>

<div
	class="ornament fixed {pos === 'tl' ? 'top-0 left-0' : ''} {pos === 'tr'
		? 'top-0 right-0'
		: ''} {pos === 'bl' ? 'bottom-0 left-0' : ''} {pos === 'br'
		? 'right-0 bottom-0'
		: ''} overflow-hidden {rounded}"
	style="width: {size * 4}px; height: {size * 4}px; opacity: {opacity};"
>
	<svg
		class="absolute {pos === 'tl' ? 'top-0 left-0' : ''} {pos === 'tr'
			? 'top-0 right-0'
			: ''} {pos === 'bl' ? 'bottom-0 left-0' : ''} {pos === 'br' ? 'right-0 bottom-0' : ''}"
		style="width: {size * 4}px; height: {size * 4}px; transform: rotate({rotate}deg);"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 100 100"
		fill="none"
		stroke={color}
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
	>
		<circle cx="50" cy="50" r="48" />
		<circle cx="50" cy="50" r="40" />
		<circle cx="50" cy="50" r="32" />
		<circle cx="50" cy="50" r="24" />
		<circle cx="50" cy="50" r="16" />
		<circle cx="50" cy="50" r="8" />
	</svg>
</div>
