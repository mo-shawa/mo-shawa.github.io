import './style.css'

const sizes = {
	width: window.innerWidth,
	height: window.innerHeight,
}

const cursor = {
	x: 0,
	y: 0,
}

window.addEventListener('resize', () => {
	sizes.width = window.innerWidth
	sizes.height = window.innerHeight
})

// On mouse move

let initialMove = false
let projectsHovered = false

const projectsEl = document.getElementById('projects')

projectsEl.addEventListener('pointerover', () => (projectsHovered = true))
projectsEl.addEventListener('pointerleave', () => (projectsHovered = false))

document.addEventListener(
	'scroll',
	() => {
		if (initialMove) return
		handleInitialMove()
		document.body.style.backgroundColor = 'rgba(119, 53, 33, 0.7)'
	},
	{ once: true }
)

document.addEventListener('pointermove', (evt) => {
	if (projectsHovered) return
	handleColorChange(evt)
	if (initialMove) return
	handleInitialMove()
})

document.querySelectorAll('a').forEach((link) => {
	link.addEventListener('pointerover', () => {
		const [r, g, b, a] = [
			getRandomInt(0, 255),
			getRandomInt(0, 255),
			getRandomInt(0, 100),
			0.5,
		]

		setBackgroundColor(r, g, b, a)
	})
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

		const [r, g, b, a] = [
			Math.abs(currentX - 155),
			50 + currentY / 10,
			currentY,
			0.7,
		]

		setBackgroundColor(r, g, b, a)
	}
}

function handleInitialMove() {
	document.body.style.color = 'var(--light-text-color)'
	document.querySelector('nav').style.visibility = 'visible'
	document.documentElement.style.setProperty('--main-color', '#53f2b5')
	initialMove = true
}

function cursorMinChange(prev, curr, diff) {
	return curr > prev + diff || curr < prev - diff
}

export function getRandomInt(min, max) {
	return Math.round((Math.random() + min) * max)
}

export function setBackgroundColor(r, g, b, a) {
	document.body.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${a})`
}
