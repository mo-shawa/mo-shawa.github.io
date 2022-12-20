const projects = [
	{
		name: "Ask GPT-3",
		description:
			"Ask an advanced AI a question and get a response! Your questions and answers are saved locally in your browser, so you can come back to them later.",
		technologies: ["GPT-3", "React.js", "React Spring", "Node.js"],
		github: "https://github.com/mo-shawa/openAI-AMA",
		deployment: "http://openai-ama.herokuapp.com/",
		image: "project-img/OpenAI.webp",
	},
	{
		name: "SaveQuest",
		description:
			"SaveQuest gamifies the budgeting process, and encourages users to consistently track their expenses with EXP, levelling up, and a retro NES-style interface.",
		technologies: ["React.js", "Express", "MongoDB", "Node.js"],
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
		name: "Hall of Game",
		description:
			"Collect, curate, share, and discuss with others your favorite characters, the most memorable items, and iconic maps from the games we all loved playing.",
		technologies: ["EJS", "Express.js", "MongoDB", "Bootstrap"],
		github: "https://github.com/mo-shawa/hall-of-game",
		deployment: "http://hallofgame.herokuapp.com/",
		image: "project-img/HoG_scaled.webp",
	},
]

for (let project of projects) {
	const card = document.createElement("div")
	card.classList = "card shadow"

	const h2 = document.createElement("h2")
	h2.textContent = project.name

	const img = document.createElement("img")
	img.src = project.image
	img.alt = project.name

	const pEl = document.createElement("p")
	pEl.textContent = project.description

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
	innerDiv.append(h2, pEl, linksDiv)

	card.append(img, innerDiv)
	document.getElementById("projects").appendChild(card)
}
