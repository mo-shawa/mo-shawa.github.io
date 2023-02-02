import { getRandomInt, setBackgroundColor } from './main'

const isSafari = !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/)

const cardEls = gsap.utils.toArray('.card')

gsap.registerPlugin(Flip, ScrollTrigger, ScrollToPlugin)

const navLinks = document.querySelectorAll('.nav-link')

navLinks.forEach((link) => {
	link.addEventListener('click', (evt) => {
		evt.preventDefault()
		const href = link.getAttribute('href')

		gsap.to(window, {
			duration: 1,
			scrollTo: href,
			ease: 'expo.inOut',
		})
	})
})

const heroTl = gsap.timeline()

heroTl
	.from('#hero>*:not(br)', {
		opacity: 0,
		duration: 1.5,
		x: -50,
		stagger: 1,
		ease: 'expo.inOut',
	})
	.from('#pointer-container>*', {
		opacity: 0,
		y: 40,
		stagger: 0.4,
		duration: 1.5,
	})

gsap.to('.point', {
	duration: 1.5,
	y: 15,
	repeat: -1,
	yoyo: true,
	ease: 'sine.inOut',
	scrollTrigger: {
		trigger: '.point',
		start: 'top bottom',
		toggleActions: 'play pause play pause',
	},
})

cardEls.forEach((card) => {
	card.addEventListener('click', (evt) => {
		const state = Flip.getState('#projects, .card')

		const isCardActive = card.classList.contains('active')

		cardEls.forEach((innerCard) => {
			innerCard.classList.remove('active')
			innerCard.classList.add('inactive')

			if (isCardActive) innerCard.classList.remove('inactive')
		})

		if (!isCardActive) {
			card.classList.remove('inactive')
			card.classList.add('active')
		}

		Flip.from(state, {
			duration: 0.4,
			ease: 'expo.out',
			simple: true,
			absolute: isSafari ? false : true,
		})

		const fromOptions = {
			opacity: 0,
			stagger: 0.1,
			x: -20,
		}
		const toOptions = {
			opacity: 1,
			x: 0,
			stagger: 0.1,
		}

		const [titleEl, descriptionEl, technologiesEl, linksEl] =
			card.children[1].children

		const activeCardTimeline = gsap.timeline({
			paused: true,
		})

		if (!isCardActive) {
			activeCardTimeline
				.clear()
				.fromTo([titleEl, descriptionEl], fromOptions, toOptions)
				.fromTo(
					technologiesEl.children,
					{ ...fromOptions, stagger: 0.05 },
					toOptions
				)
				.fromTo(linksEl.children, fromOptions, toOptions)
				.play(0)
		} else {
			activeCardTimeline
				.clear()
				.fromTo(
					technologiesEl.children,
					{ ...fromOptions, stagger: 0.05 },
					toOptions
				)
				.play(0)
		}
		const [r, g, b, a] = [
			getRandomInt(0, 255),
			getRandomInt(0, 255),
			getRandomInt(0, 255),
			0.5,
		]

		setBackgroundColor(r, g, b, a)

		if (window.matchMedia('only screen and (max-width: 940px )').matches) {
			document.getElementById('projects-section').scrollIntoView(true)
		}
	})
})

const contactEl = document.getElementById('contact-section')

const contactTimeline = gsap.timeline({
	scrollTrigger: {
		trigger: contactEl,
		start: 'top 50%',
	},
})

contactTimeline
	.from(contactEl.children[1], {
		opacity: 0,
		duration: 0.5,
		stagger: 0.1,
		y: -20,
		ease: 'expo.inOut',
	})
	.from(contactEl.children[2].children, {
		opacity: 0,
		duration: 0.3,
		stagger: 0.1,
		y: 15,
		ease: 'expo.inOut',
	})
