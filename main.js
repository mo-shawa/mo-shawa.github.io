import "./style.css"

const sizes = {
	width: window.innerWidth,
	height: window.innerHeight,
}

const cursor = {
	x: 0,
	y: 0,
}

window.addEventListener("resize", () => {
	sizes.width = window.innerWidth
	sizes.height = window.innerHeight
})

// On mouse move

let initialMove = false

document.addEventListener(
	"scroll",
	(evt) => {
		if (initialMove) return
		handleInitialMove()
		document.body.style.backgroundColor = "rgba(119, 53, 33, 0.7)"
	},
	{ once: true }
)

document.addEventListener("pointermove", (evt) => {
	handleColorChange(evt)
	if (initialMove) return
	handleInitialMove()
})

function handleColorChange(evt) {
	const normalizedX = evt.clientX / sizes.width
	const normalizedY = evt.clientY / sizes.height

	const currentX = Math.round(normalizedX * 255)
	const currentY = Math.round(normalizedY * 255)

	if (
		cursorMinChange(currentX, cursor.x, 25) ||
		cursorMinChange(currentY, cursor.y, 25)
	) {
		cursor.x = currentX
		cursor.y = currentY

		document.body.style.backgroundColor = `rgba(${Math.abs(currentX - 155)}, ${
			50 + currentY / 10
		}, ${currentY}, 0.7)`
	}
}

function handleInitialMove() {
	document.body.style.color = "var(--light-text-color)"
	console.log("color changed")

	document.querySelector("nav").style.visibility = "visible"
	document.body.style.overflow = "auto"

	document.documentElement.style.setProperty("--main-color", "#53f2b5")

	initialMove = true
}

function cursorMinChange(prev, curr, diff) {
	return curr > prev + diff || curr < prev - diff
}
