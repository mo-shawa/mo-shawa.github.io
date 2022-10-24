import "./style.css"

const htmlEl = document.querySelector("html")

const parameters = {}

const sizes = {
	width: window.innerWidth,
	height: window.innerHeight,
}

const cursor = {
	x: 0,
	y: 0,
}

document.addEventListener("resize", (evt) => {
	sizes.width = window.innerWidth
	sizes.height = window.innerHeight
})

const cursorMinMove = (prev, curr, diff) => {
	return curr > prev + diff || curr < prev - diff
}

document.addEventListener("mousemove", (evt) => {
	const currentX = Math.round((evt.clientX / sizes.width) * 255)
	const currentY = Math.round((evt.clientY / sizes.height) * 255)

	if (
		cursorMinMove(currentX, cursor.x, 15) ||
		cursorMinMove(currentY, cursor.y, 15)
	) {
		cursor.x = currentX
		cursor.y = currentY

		document.body.style.backgroundColor = `rgba(${Math.abs(
			currentX - 155
		)}, ${currentY}, ${currentX}, 0.5)`
		console.log(document.body.style.backgroundColor)
	}
})
