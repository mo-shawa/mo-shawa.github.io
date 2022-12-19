import './style.css'
import * as THREE from 'three'
import GUI from 'lil-gui'

// debug
// const gui = new GUI()

const textureLoader = new THREE.TextureLoader()
const pointTexture = textureLoader.load('1.png')

const parameters = {
	count: 1000,
}

// gui.add(parameters, "count").min(0).max(10000).step(50).onFinishChange()
// Scene

const scene = new THREE.Scene()

// Objects

// particles
const points = new Float32Array(parameters.count * 3)
for (let i = 0; i < parameters.count; i++) {
	points[i * 3 + 0] = (Math.random() - 0.5) * 50 + 3
	points[i * 3 + 1] = (Math.random() - 0.5) * 50 + 3
	points[i * 3 + 2] = (Math.random() - 0.5) * 50 + 3
}

const pointsGeometry = new THREE.BufferGeometry()
pointsGeometry.setAttribute('position', new THREE.BufferAttribute(points, 3))

const pointsMesh = new THREE.Points(
	pointsGeometry,
	new THREE.PointsMaterial({
		size: 4,
		sizeAttenuation: false,
		depthWrite: false,
		alphaMap: pointTexture,
		transparent: true,
		color: new THREE.Color('white'),
	})
)
scene.add(pointsMesh)

console.log(pointsMesh.rotation.y)

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
	30,
	sizes.width / sizes.height,
	1,
	100
)

camera.position.z = 40

window.addEventListener('resize', () => {
	sizes.width = window.innerWidth
	sizes.height = window.innerHeight
	camera.aspect = sizes.width / sizes.height
	camera.updateProjectionMatrix()
	renderer.setSize(sizes.width, sizes.height)
})

// On mouse move

const cursorMinChange = (prev, curr, diff) => {
	return curr > prev + diff || curr < prev - diff
}

let initialMove = false

document.addEventListener('mousemove', (evt) => {
	if (!initialMove) {
		document.body.style.color = 'var(--light-text-color)'
		console.log('color changed')
		initialMove = true
	}

	const normalizedX = evt.clientX / sizes.width
	const normalizedY = evt.clientX / sizes.height

	const currentX = Math.round(normalizedX * 255)
	const currentY = Math.round(normalizedY * 255)

	if (
		cursorMinChange(currentX, cursor.x, 25) ||
		cursorMinChange(currentY, cursor.y, 25)
	) {
		cursor.x = currentX
		cursor.y = currentY

		document.body.style.backgroundColor = `rgba(${Math.abs(
			currentX - 155
		)}, 50, ${Math.max(currentY, 100)}, 0.7)`
	}
})

/*
// Renderer
*/
const renderer = new THREE.WebGLRenderer({
	alpha: true,
})

renderer.setSize(sizes.width, sizes.height)
renderer.domElement.style.cssText = `position: fixed; left: 0; top: 0 `
document.body.appendChild(renderer.domElement)
renderer.render(scene, camera)

const clock = new THREE.Clock()

const tick = () => {
	requestAnimationFrame(tick)
	const elapsedTime = clock.getElapsedTime()

	const parallaxX = cursor.x

	pointsMesh.rotation.x += parallaxX
	pointsMesh.rotation.x = -elapsedTime * 0.01

	renderer.render(scene, camera)
}

tick()
