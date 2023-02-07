const projects = [
	{
		name: "Ask GPT-3",
		description:
			"Ask an advanced AI a question and get a response! Your questions and answers are saved locally in your browser, so you can come back to them later.",
		technologies: ["GPT-3", "React.js", "React Spring", "Node.js"],
		github: "https://github.com/mo-shawa/openAI-AMA",
		deployment: "http://openai-ama.herokuapp.com/",
		image: "project-img/OpenAI.webp",
		tags: [],
	},
	{
		name: "sahba.space",
		description:
			"Custom portfolio website for Sahba El-Shawa, an interdisciplinary researcher and social entrepreneur.",
		technologies: ["TypeScript", "Three.js", "GSAP", "GLSL"],
		github: "https://github.com/mo-shawa/sahba.space",
		deployment: "http://sahba.space",
		image: "project-img/sahba_space.webp",
	},
	{
		name: "SaveQuest",
		description:
			"SaveQuest gamifies the budgeting process, and encourages users to consistently track their expenses with EXP, levelling up, and a retro NES-style interface.",
		technologies: ["React.js", "Express.js", "MongoDB", "Node.js"],
		github: "https://github.com/mo-shawa/SaveQuest",
		deployment: "http://savequest.herokuapp.com/",
		image: "project-img/SaveQuest_scaled.webp",
	},
	{
		name: "HelloFren",
		description:
			"HelloFren is a social media platform that is designed to put your furry friends in the spotlight. Add your pet(s) to your profile and share with the world what they're up to!",
		technologies: ["Python", "Django", "Bootstrap", "PostgreSQL"],
		github: "https://github.com/mo-shawa/spot",
		deployment: "http://hellofren.herokuapp.com/",
		image: "project-img/hellofren_scaled.webp",
	},
	{
		name: "Physics Simulation",
		description:
			"A simple earth physics simulation using Three.js and Cannon.js ",
		technologies: ["JavaScript", "Three.js", "Cannon.js"],
		github: "https://github.com/mo-shawa/physics-sim",
		deployment: "http://shawa.dev/physics-sim",
		image: "project-img/physics-sim.webp",
	},
	{
		name: "Hall of Game",
		description:
			"Collect, curate, share, and discuss with others your favorite characters, the most memorable items, and iconic maps from the games we all loved playing.",
		technologies: ["EJS", "Express.js", "MongoDB", "Bootstrap"],
		github: "https://github.com/mo-shawa/hall-of-game",
		deployment: "http://hallofgame.herokuapp.com/",
		image: "project-img/HoG_scaled.webp",
	},
	{
		name: "BlackJack",
		description:
			"A then-beginner developers take on the classic card game using vanilla JavaScript, DOM-manipulation, and animations with GSAP",
		technologies: ["JavaScript", "HTML", "CSS", "GSAP"],
		github: "https://github.com/mo-shawa/BlackJack",
		deployment: "https://shawa.dev/Blackjack",
		image: "project-img/blackjack.webp",
	},
]

for (let i = 0; i < 4; i++) {
	const project = projects[i]

	const card = document.createElement("div")
	card.classList = "card shadow"

	const h2 = document.createElement("h2")
	h2.textContent = project.name

	const img = document.createElement("img")
	img.src = project.image
	img.alt = project.name

	img.addEventListener("click", () => {
		if (!card.classList.contains("active")) return
		window.open(project.deployment, "_blank")
	})

	const pEl = document.createElement("p")
	pEl.textContent = project.description

	const pillsContainer = document.createElement("div")
	pillsContainer.classList = "pills-container"

	for (let technology of project.technologies) {
		const pillEl = document.createElement("small")
		pillEl.classList.add("pill")
		pillEl.textContent = technology
		pillsContainer.append(pillEl)
	}

	const githubImg = document.createElement("img")
	githubImg.src = "/svg/github.svg"

	const githubLink = document.createElement("a")
	githubLink.target = "_blank"
	githubLink.href = project.github
	githubLink.append(githubImg)

	const linkImg = document.createElement("img")
	linkImg.src = "/svg/link.svg"

	const deployLink = document.createElement("a")
	deployLink.target = "_blank"
	deployLink.href = project.deployment
	deployLink.append(linkImg)

	const linksDiv = document.createElement("div")
	linksDiv.classList.add("links-container")
	linksDiv.append(githubLink, deployLink)

	const innerDiv = document.createElement("div")
	innerDiv.append(h2, pEl, pillsContainer, linksDiv)

	card.append(img, innerDiv)
	document.getElementById("projects").appendChild(card)
}
