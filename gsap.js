const sectionEls = document.querySelectorAll("section")
const cardEls = gsap.utils.toArray(".card")

gsap.registerPlugin(Flip, ScrollTrigger)

gsap.from("#hero", {
	opacity: 0,
	duration: 1.5,
	x: -100,
	ease: "sine.inOut",
	scrollTrigger: {
		trigger: "section",
		start: "top bottom",
		toggleActions: "play pause play pause",
	},
})

cardEls.forEach((card, idx) => {
	card.addEventListener("click", () => {
		const state = Flip.getState(".card")

		const isCardActive = card.classList.contains("active")

		cardEls.forEach((innerCard) => {
			innerCard.classList.remove("active")
			innerCard.classList.add("inactive")

			if (isCardActive) innerCard.classList.remove("inactive")
		})

		if (!isCardActive) {
			card.classList.remove("inactive")
			card.classList.add("active")
		}

		Flip.from(state, {
			duration: 0.5,
			ease: "back.inOut",
			absolute: true,
			stagger: 0.1,
			simple: true,
			onComplete: () => {
				// document.querySelector(".card.active").classList.remove("active")
			},
		})

		if (!isCardActive) {
			gsap.from(card.childNodes[1].childNodes, {
				delay: 0.5,
				opacity: 0,
			})
		}
	})
})

gsap.from("#hero ~ div", {
	delay: 1.5,
	opacity: 0,
	y: 40,
	duration: 1,
})

gsap.to(".point", {
	duration: 1.5,
	y: 20,
	repeat: -1,
	yoyo: true,
	ease: "sine.inOut",
	scrollTrigger: {
		trigger: ".point",
		start: "top bottom",
		toggleActions: "play pause play pause",
	},
})
