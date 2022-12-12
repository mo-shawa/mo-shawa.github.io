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

// particles
const points = new Float32Array(parameters.count * 3)
for (let i = 0; i < parameters.count; i++) {
	points[i + 0] = (Math.random() - 0.5) * 10
	points[i + 1] = (Math.random() - 0.5) * 10
	points[i + 2] = (Math.random() - 0.5) * 10
}

const pointsGeometry = new THREE.BufferGeometry()
pointsGeometry.setAttribute("position", new THREE.BufferAttribute(points, 3))

const pointsMesh = new THREE.Points(
	pointsGeometry,
	new THREE.PointsMaterial({
		size: 2.5,
		sizeAttenuation: false,
		// color: new THREE.Color("red"),
	})
)
scene.add(pointsMesh)

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

// On mouse move

const cursorMinChange = (prev, curr, diff) => {
	return curr > prev + diff || curr < prev - diff
}

let initialMove = false

document.addEventListener("mousemove", (evt) => {
	if (!initialMove) {
		document.body.style.color = "var(--light-text-color)"
		console.log("color changed")
		initialMove = true
	}
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
	}
})

/*
// Renderer
*/
const renderer = new THREE.WebGLRenderer({
	alpha: true,
})

renderer.setSize(sizes.width, sizes.height)
// renderer.domElement.style.position = "fixed"
renderer.domElement.style.cssText = `position: fixed; left: 0; top: 0 `
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

	mesh.position.y = Math.sin(clock.getElapsedTime())

	orbitControls.update()
	renderer.render(scene, camera)
}

tick()
