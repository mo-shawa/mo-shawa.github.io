import "./style.css"
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import GUI from "lil-gui"

// debug
// const gui = new GUI()

const parameters = {
	count: 500,
}

// gui.add(parameters, "count").min(0).max(10000).step(50).onFinishChange()

// Scene

const scene = new THREE.Scene()

// Objects

const geometry = new THREE.SphereGeometry(2, 24, 24)
const material = new THREE.MeshNormalMaterial({ flatShading: true })
const mesh = new THREE.Mesh(geometry, material)

// scene.add(mesh)

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

document.addEventListener("resize", () => {
	sizes.width = window.innerWidth
	sizes.height = window.innerHeight
	camera.aspect = sizes.width / sizes.height
	camera.updateProjectionMatrix()
})

const cursorMinChange = (prev, curr, diff) => {
	return curr > prev + diff || curr < prev - diff
}

document.addEventListener("mousemove", (evt) => {
	const currentX = Math.round((evt.clientX / sizes.width) * 255)
	const currentY = Math.round((evt.clientY / sizes.height) * 255)

	if (
		cursorMinChange(currentX, cursor.x, 25) ||
		cursorMinChange(currentY, cursor.y, 25)
	) {
		cursor.x = currentX
		cursor.y = currentY

		document.body.style.backgroundColor = `rgba(${Math.abs(
			currentX - 155
		)}, 0, ${Math.max(currentY, 100)}, 0.7)`
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
document.body.appendChild(renderer.domElement)
renderer.render(scene, camera)

const orbitControls = new OrbitControls(camera, renderer.domElement)
orbitControls.listenToKeyEvents(window)
orbitControls.autoRotate = true
orbitControls.enableDamping = true
orbitControls.update()

const clock = new THREE.Clock()

const tick = () => {
	requestAnimationFrame(tick)

	/* mesh.position.y = Math.sin(clock.getElapsedTime())

	orbitControls.update() */
	renderer.render(scene, camera)
}

tick()
