import { gsap } from 'gsap';

export function cardEnterAnimation({
		element,
		index,
	}: {
		element: HTMLElement;
		index: number;
}) {
		gsap.from(element, {
			scrollTrigger: {
				trigger: element,
				start: 'top 80%',
				end: 'bottom 80%',
			},
			opacity: 0,
			delay: index * 0.5, // Stagger the animations by 0.5 seconds
			ease: 'power1.in',
			x: 200,
		});
}