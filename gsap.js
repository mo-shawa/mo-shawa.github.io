const sectionEls = document.querySelectorAll("section")

gsap.from("section", {
	opacity: 0,
	duration: 0.5,
	x: -200,
	ease: "back",
	stagger: 0.5,
})
