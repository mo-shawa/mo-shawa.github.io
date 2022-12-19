const sectionEls = document.querySelectorAll('section')

gsap.from('section', {
	opacity: 0,
	duration: 0.5,
	x: -200,
	ease: 'back',
	stagger: 0.5,
})

gsap.to('.point', {
	duration: 1.5,
	y: 20,
	repeat: -1,
	yoyo: true,
	ease: 'sine.inOut',
})
