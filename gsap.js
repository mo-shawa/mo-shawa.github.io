import { getRandomInt, setBackgroundColor } from './main'

const cardEls = gsap.utils.toArray('.card')

gsap.registerPlugin(Flip, ScrollTrigger)

const heroEl = document.getElementById('hero')
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

const projectsSection = document.getElementById('projects-section')

const observer = new IntersectionObserver(
	() => {
		projectsSection.style.height = `${projectsSection.offsetHeight}px`
	},
	{
		root: projectsSection,
	}
)

observer.observe(projectsSection)

window.addEventListener('resize', () => {
	projectsSection.style.height = '100%'
	projectsSection.style.height = `${projectsSection.offsetHeight}px`
})

const activeCardTimeline = gsap.timeline()

cardEls.forEach((card) => {
	card.addEventListener('click', () => {
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
			duration: 0.5,
			ease: 'expo.inOut',
			stagger: 0.1,
			simple: true,
			absolute: true,
		})

		if (!isCardActive) {
			const standardOptions = {
				opacity: 0,
				stagger: 0.3,
				x: -20,
			}

			const children = card.childNodes[1].childNodes
			activeCardTimeline.clear(true)
			activeCardTimeline
				.from(children[0], standardOptions)
				.from(children[1], standardOptions)
				.from(children[2].children, {
					...standardOptions,
					stagger: 0.1,
				})
				.from(children[3].children, {
					...standardOptions,
					stagger: 0.5,
					x: 0,
				})
		}

		const [r, g, b, a] = [
			getRandomInt(0, 255),
			getRandomInt(0, 255),
			getRandomInt(0, 255),
			0.5,
		]

		setBackgroundColor(r, g, b, a)
		document.getElementById('projects-section').scrollIntoView(true)
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
