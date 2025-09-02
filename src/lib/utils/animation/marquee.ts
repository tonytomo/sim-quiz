export function animateMarquee() {
	const marquees = document.querySelectorAll<HTMLElement>('.marquee');
	if (marquees.length === 0) return;
	for (const marquee of marquees) {
		let scrollAmount = 0;
		const speed = 2;

		const animate = () => {
			scrollAmount += speed;
			if (scrollAmount >= marquee.scrollWidth / 2) {
				scrollAmount = 0;
			}
			marquee.scrollTo(scrollAmount, 0);
			requestAnimationFrame(animate);
		};

		animate();
	}
}
