export const projects = [
	{
		name: "Ask GPT-3",
		description:
			"Ask an advanced AI a question and get a response! Your questions and answers are saved locally in your browser, so you can come back to them later.",
		technologies: ["GPT-3", "React.js", "React Spring", "Node.js"],
		github: "https://github.com/mo-shawa/openAI-AMA",
		deployment: "http://openai-ama.herokuapp.com/",
		image: "/OpenAI.webp",
	},
	{
		name: "Ask GPT-3",
		description:
			"Ask an advanced AI a question and get a response! Your questions and answers are saved locally in your browser, so you can come back to them later.",
		technologies: ["GPT-3", "React.js", "React Spring", "Node.js"],
		github: "https://github.com/mo-shawa/openAI-AMA",
		deployment: "http://openai-ama.herokuapp.com/",
		image: "/OpenAI.webp",
	},
	{
		name: "Ask GPT-3",
		description:
			"Ask an advanced AI a question and get a response! Your questions and answers are saved locally in your browser, so you can come back to them later.",
		technologies: ["GPT-3", "React.js", "React Spring", "Node.js"],
		github: "https://github.com/mo-shawa/openAI-AMA",
		deployment: "http://openai-ama.herokuapp.com/",
		image: "/OpenAI.webp",
	},
	{
		name: "Ask GPT-3",
		description:
			"Ask an advanced AI a question and get a response! Your questions and answers are saved locally in your browser, so you can come back to them later.",
		technologies: ["GPT-3", "React.js", "React Spring", "Node.js"],
		github: "https://github.com/mo-shawa/openAI-AMA",
		deployment: "http://openai-ama.herokuapp.com/",
		image: "/OpenAI.webp",
	},
]

for (let project of projects) {
	const card = document.createElement("div")
	card.classList.add("card")

	const img = document.createElement("img")
	img.src = project.image

	const pEl = document.createElement("p")
	pEl.textContent = project.description

	card.append(img, pEl)
	document.getElementById("projects").appendChild(card)
}
