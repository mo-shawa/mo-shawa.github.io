import "./style.css"
import * as THREE from "three"

const htmlEl = document.querySelector("html")

/*
// Scene
*/

const scene = new THREE.Scene()

/*
// Objects
*/

const geometry = new THREE.SphereGeometry(3, 32, 32)

const material = new THREE.MeshNormalMaterial()

const mesh = new THREE.Mesh(geometry, material)

scene.add(mesh)

const parameters = {
	count: 500,
}

const sizes = {
	width: window.innerWidth,
	height: window.innerHeight,
}

const cursor = {
	x: 0,
	y: 0,
}

/*
// Camera
*/

const camera = new THREE.PerspectiveCamera(
	75,
	sizes.width / sizes.height,
	1,
	100
)

camera.position.z = 5

document.addEventListener("resize", (evt) => {
	sizes.width = window.innerWidth
	sizes.height = window.innerHeight
})

const cursorMinChange = (prev, curr, diff) => {
	return curr > prev + diff || curr < prev - diff
}

document.addEventListener("mousemove", (evt) => {
	const currentX = Math.round((evt.clientX / sizes.width) * 255)
	const currentY = Math.round((evt.clientY / sizes.height) * 255)

	if (
		cursorMinChange(currentX, cursor.x, 15) ||
		cursorMinChange(currentY, cursor.y, 15)
	) {
		cursor.x = currentX
		cursor.y = currentY

		document.body.style.backgroundColor = `rgba(${Math.abs(
			currentX - 155
		)}, ${currentY}, ${currentX}, 0.5)`
		console.log(document.body.style.backgroundColor)
	}
})

/*
// Renderer
*/
const renderer = new THREE.WebGLRenderer({
	alpha: true,
})

renderer.setSize(sizes.width, sizes.height)
renderer.domElement.style.position = "fixed"
renderer.domElement.style.zIndex = -1
document.body.appendChild(renderer.domElement)
renderer.render(scene, camera)

const clock = new THREE.Clock()

const tick = () => {
	mesh.position.y = Math.sin(clock.getElapsedTime())
	window.requestAnimationFrame(tick)
}
