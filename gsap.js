const sectionEls = document.querySelectorAll('section')

gsap.from('#hero', {
	opacity: 0,
	duration: 1.5,
	x: -100,
	ease: 'sine.inOut',
	scrollTrigger: {
		trigger: 'section',
		start: 'top bottom',
		toggleActions: 'play pause play pause',
	},
})

gsap.from('#projects', {
	opacity: 0,
	duration: 1.5,
	x: -100,
	ease: 'sine.inOut',
	scrollTrigger: {
		trigger: 'section',
		start: 'top top',
		toggleActions: 'play pause play pause',
	},
})

gsap.from('#hero ~ div', {
	delay: 1.5,
	opacity: 0,
	y: 40,
	duration: 1,
})

gsap.to('.point', {
	duration: 1.5,
	y: 20,
	repeat: -1,
	yoyo: true,
	ease: 'sine.inOut',
	scrollTrigger: {
		trigger: '.point',
		start: 'top bottom',
		toggleActions: 'play pause play pause',
	},
})
