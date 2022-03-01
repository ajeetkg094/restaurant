import "./style.css";
import * as THREE from "three";
import {
	OrbitControls
} from "three/examples/jsm/controls/OrbitControls";
import {
	OBJLoader
} from "three/examples/jsm/loaders/OBJLoader";
import {
	GLTFLoader
} from "three/examples/jsm/loaders/GLTFLoader.js";
import {
	TransformControls
} from "three/examples/jsm/controls/TransformControls";
import {
	FontLoader
} from "three/examples/jsm/loaders/FontLoader.js";
import {
	MTLLoader
} from "three/examples/jsm/loaders/MTLLoader";
import axios, {
	Axios
} from "axios";
import {
	DRACOLoader
} from "three/examples/jsm/loaders/DRACOLoader";
const renderer = new THREE.WebGLRenderer({
	antialias: !0
});
renderer.shadowMap.enabled = !0, document.body.appendChild(renderer.domElement);
const sizes = {
	width: window.innerWidth,
	height: window.innerHeight
};
renderer.setPixelRatio(window.devicePixelRatio), renderer.setSize(window.innerWidth, window.innerHeight), renderer.gammaOutput = !0, renderer.gammaFactor = 2, window.addEventListener("resize", () => {
	sizes.width = window.innerWidth, sizes.height = window.innerHeight, camera.aspect = sizes.width / sizes.height, camera.updateProjectionMatrix(), renderer.setSize(sizes.width, sizes.height), renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
});
const scene = new THREE.Scene;
scene.background = new THREE.Color(12571109);
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, .1, 800);
camera.position.x = 1.5318878277125556, camera.position.y = 176.6360349713553, camera.position.z = 314.6898841221014, camera.rotation.x = -.5114788773387836, camera.rotation.y = .004244913221482186, camera.rotation.z = .0023826662608120623, scene.add(camera);
const controls = new OrbitControls(camera, renderer.domElement);
export function animate() {
	renderer.render(scene, camera), requestAnimationFrame(animate)
}
const transformControls = new TransformControls(camera, renderer.domElement);
transformControls.showY = !1, scene.add(transformControls), transformControls.addEventListener("mouseDown", (function() {
	controls.enabled = !1
})), transformControls.addEventListener("mouseUp", (function() {
	controls.enabled = !0
}));
const pointLight = new THREE.AmbientLight(16777215, 3);

function twoseats(x, z, r, tablenum) {
	mtlLoader.setResourcePath(""), mtlLoader.setPath(""), mtlLoader.load("twoseats.mtl", (function(materials) {
		materials.preload();
		const objLoader = new OBJLoader;
		objLoader.setMaterials(materials), objLoader.loadAsync("./twoseats.obj").then(group => {
			const castle = group.children[0];
			if (group.children[0].material.metalness = 0, castle.position.x = x, castle.position.z = z, castle.rotation.y = r, castle.scale.x = 25, castle.scale.y = 25, castle.scale.z = 25, castle.castShadow = !0, castle.receiveShadow = !0, castle.frustumCulled = !1, castle.geometry.computeVertexNormals(), castle.userData.draggable = !0, castle.userData.name = "two seats", castle.userData.tablenum = tablenum, scene.add(castle), tablenum) {
				const loader = new FontLoader;
				loader.load("/helvetiker_bold.typeface.json", (function(font) {
					const color = 16766720,
						matDark = new THREE.LineBasicMaterial({
							color: color,
							side: THREE.DoubleSide
						}),
						matLite = new THREE.MeshBasicMaterial({
							color: color,
							transparent: !0,
							opacity: 1,
							side: THREE.DoubleSide
						}),
						message = document.getElementById("text").value,
						shapes = font.generateShapes(tablenum, 10),
						geometry = new THREE.ShapeGeometry(shapes);
					geometry.computeBoundingBox();
					const xMid = -.5 * (geometry.boundingBox.max.x - geometry.boundingBox.min.x);
					geometry.translate(xMid, 0, 0);
					const text = new THREE.Mesh(geometry, matLite);
					text.position.x = castle.position.x + .2, text.position.y = castle.position.y + 22.5, text.position.z = castle.position.z + 2, text.rotation.x = 4.7, scene.add(text);
					const holeShapes = [];
					for (let i = 0; i < shapes.length; i++) {
						const shape = shapes[i];
						if (shape.holes && shape.holes.length > 0)
							for (let j = 0; j < shape.holes.length; j++) {
								const hole = shape.holes[j];
								holeShapes.push(hole)
							}
					}
					shapes.push.apply(shapes, holeShapes), castle.attach(text)
				}))
			}
		})
	}))
}

function fourseats(x, z, r, tablenum) {
	mtlLoader.setResourcePath(""), mtlLoader.setPath(""), mtlLoader.load("fourseats.mtl", (function(materials) {
		materials.preload();
		const objLoader = new OBJLoader;
		objLoader.setMaterials(materials), objLoader.loadAsync("./fourseats.obj").then(group => {
			const castle = group.children[0];
			if (group.children[0].material.metalness = 0, castle.position.x = x, castle.position.z = z, castle.rotation.y = r, castle.scale.x = 25, castle.scale.y = 25, castle.scale.z = 25, castle.castShadow = !0, castle.receiveShadow = !0, castle.frustumCulled = !1, castle.geometry.computeVertexNormals(), castle.userData.tablenum = tablenum, castle.userData.draggable = !0, castle.userData.name = "four seats", scene.add(castle), tablenum) {
				const loader = new FontLoader;
				loader.load("/helvetiker_bold.typeface.json", (function(font) {
					const color = 16766720,
						matDark = new THREE.LineBasicMaterial({
							color: color,
							side: THREE.DoubleSide
						}),
						matLite = new THREE.MeshBasicMaterial({
							color: color,
							transparent: !0,
							opacity: 1,
							side: THREE.DoubleSide
						}),
						message = document.getElementById("text").value,
						shapes = font.generateShapes(tablenum, 10),
						geometry = new THREE.ShapeGeometry(shapes);
					geometry.computeBoundingBox();
					const xMid = -.5 * (geometry.boundingBox.max.x - geometry.boundingBox.min.x);
					geometry.translate(xMid, 0, 0);
					const text = new THREE.Mesh(geometry, matLite);
					text.position.x = castle.position.x + .2, text.position.y = castle.position.y + 22.5, text.position.z = castle.position.z + 2, text.rotation.x = 4.7, scene.add(text);
					const holeShapes = [];
					for (let i = 0; i < shapes.length; i++) {
						const shape = shapes[i];
						if (shape.holes && shape.holes.length > 0)
							for (let j = 0; j < shape.holes.length; j++) {
								const hole = shape.holes[j];
								holeShapes.push(hole)
							}
					}
					shapes.push.apply(shapes, holeShapes), castle.attach(text)
				}))
			}
		})
	}))
}

function sixseats(x, z, r, tablenum) {
	mtlLoader.setResourcePath(""), mtlLoader.setPath(""), mtlLoader.load("sixseats.mtl", (function(materials) {
		materials.preload();
		const objLoader = new OBJLoader;
		objLoader.setMaterials(materials), objLoader.loadAsync("./sixseats.obj").then(group => {
			const castle = group.children[0];
			if (group.children[0].material.metalness = 0, castle.position.x = x, castle.position.z = z, castle.rotation.y = r, castle.scale.x = 25, castle.scale.y = 25, castle.scale.z = 25, castle.userData.tablenum = tablenum, castle.castShadow = !0, castle.receiveShadow = !0, castle.frustumCulled = !1, castle.geometry.computeVertexNormals(), castle.userData.draggable = !0, castle.userData.name = "six seats", scene.add(castle), tablenum) {
				const loader = new FontLoader;
				loader.load("/helvetiker_bold.typeface.json", (function(font) {
					const color = 16766720,
						matDark = new THREE.LineBasicMaterial({
							color: color,
							side: THREE.DoubleSide
						}),
						matLite = new THREE.MeshBasicMaterial({
							color: color,
							transparent: !0,
							opacity: 1,
							side: THREE.DoubleSide
						}),
						message = document.getElementById("text").value,
						shapes = font.generateShapes(tablenum, 10),
						geometry = new THREE.ShapeGeometry(shapes);
					geometry.computeBoundingBox();
					const xMid = -.5 * (geometry.boundingBox.max.x - geometry.boundingBox.min.x);
					geometry.translate(xMid, 0, 0);
					const text = new THREE.Mesh(geometry, matLite);
					text.position.x = castle.position.x + .2, text.position.y = castle.position.y + 22.5, text.position.z = castle.position.z + 2, text.rotation.x = 4.7, scene.add(text);
					const holeShapes = [];
					for (let i = 0; i < shapes.length; i++) {
						const shape = shapes[i];
						if (shape.holes && shape.holes.length > 0)
							for (let j = 0; j < shape.holes.length; j++) {
								const hole = shape.holes[j];
								holeShapes.push(hole)
							}
					}
					shapes.push.apply(shapes, holeShapes), castle.attach(text)
				}))
			}
		})
	}))
}

function eightseats(x, z, r, tablenum) {
	mtlLoader.setResourcePath(""), mtlLoader.setPath(""), mtlLoader.load("eightseats.mtl", (function(materials) {
		materials.preload();
		const objLoader = new OBJLoader;
		objLoader.setMaterials(materials), objLoader.loadAsync("./eightseats.obj").then(group => {
			const castle = group.children[0];
			if (group.children[0].material.metalness = 0, castle.position.x = x, castle.position.z = z, castle.rotation.y = r, castle.scale.x = 25, castle.scale.y = 25, castle.scale.z = 25, castle.userData.tablenum = tablenum, castle.castShadow = !0, castle.receiveShadow = !0, castle.frustumCulled = !1, castle.geometry.computeVertexNormals(), castle.userData.draggable = !0, castle.userData.name = "eight seats", scene.add(castle), tablenum) {
				const loader = new FontLoader;
				loader.load("/helvetiker_bold.typeface.json", (function(font) {
					const color = 16766720,
						matDark = new THREE.LineBasicMaterial({
							color: color,
							side: THREE.DoubleSide
						}),
						matLite = new THREE.MeshBasicMaterial({
							color: color,
							transparent: !0,
							opacity: 1,
							side: THREE.DoubleSide
						}),
						message = document.getElementById("text").value,
						shapes = font.generateShapes(tablenum, 10),
						geometry = new THREE.ShapeGeometry(shapes);
					geometry.computeBoundingBox();
					const xMid = -.5 * (geometry.boundingBox.max.x - geometry.boundingBox.min.x);
					geometry.translate(xMid, 0, 0);
					const text = new THREE.Mesh(geometry, matLite);
					text.position.x = castle.position.x + .2, text.position.y = castle.position.y + 22.5, text.position.z = castle.position.z + 2, text.rotation.x = 4.7, scene.add(text);
					const holeShapes = [];
					for (let i = 0; i < shapes.length; i++) {
						const shape = shapes[i];
						if (shape.holes && shape.holes.length > 0)
							for (let j = 0; j < shape.holes.length; j++) {
								const hole = shape.holes[j];
								holeShapes.push(hole)
							}
					}
					shapes.push.apply(shapes, holeShapes), castle.attach(text)
				}))
			}
		})
	}))
}

function getTable() {
	const urlParams = new URLSearchParams(window.location.search)
	const searchget = urlParams.get('search')

	if (!!searchget) {
		axios.get(`http://34.236.249.40:5000/get/${searchget}`).then(({
			data: data
		}) => {
			for (let i = 0; i < data.length; i++) 

				"two seats" === data[i].name && twoseats(data[i].positionX, data[i].positionZ, data[i].rotation, data[i].tablenum), 
				"four seats" === data[i].name && fourseats(data[i].positionX, data[i].positionZ, data[i].rotation, data[i].tablenum), 
				"six seats" === data[i].name && sixseats(data[i].positionX, data[i].positionZ, data[i].rotation, data[i].tablenum), 
				"eight seats" === data[i].name && eightseats(data[i].positionX, data[i].positionZ, data[i].rotation, data[i].tablenum)
		});
	}
}

function createFloor() {
	let pos_x = -4,
		pos_y = -1,
		pos_z = 3,
		scale_x = 200,
		scale_y = 2,
		scale_z = 200,
		blockPlane = new THREE.Mesh(new THREE.BoxBufferGeometry, new THREE.MeshPhongMaterial({
			color: 16369716
		}));
	blockPlane.position.set(pos_x, pos_y, pos_z), blockPlane.scale.set(scale_x, scale_y, scale_z), blockPlane.visible = !1, blockPlane.castShadow = !0, blockPlane.receiveShadow = !0, scene.add(blockPlane), blockPlane.userData.ground = !0
}
pointLight.position.x = 2, pointLight.position.y = 3, pointLight.position.z = 4, scene.add(pointLight),  getTable()



const gltfloader = new GLTFLoader;

function createRestaurant() {
	let pos_x = 12,
		pos_y = 0,
		pos_z = 3,
		scale_x = 30,
		scale_y = 24,
		scale_z = 30;
	const dracoLoader = new DRACOLoader;
	dracoLoader.setDecoderPath("/js/libs/draco/"), gltfloader.setDRACOLoader(dracoLoader), gltfloader.load("./restaurants.glb", (function(gltf) {
		gltf.scene.rotation.y = 3.1, gltf.scene.position.set(pos_x, pos_y, pos_z), gltf.scene.scale.set(scale_x, scale_y, scale_z), gltf.scene.castShadow = !0, gltf.scene.receiveShadow = !0, scene.add(gltf.scene), gltf.scene.userData.ground = !0
	}))
}
const objLoader = new OBJLoader;
var selected;
document.getElementById("two").onclick = function createBox() {
	mtlLoader.setResourcePath(""), mtlLoader.setPath(""), mtlLoader.load("twoseats.mtl", (function(materials) {
		materials.preload();
		const objLoader = new OBJLoader;
		objLoader.setMaterials(materials), objLoader.loadAsync("./twoseats.obj").then(group => {
			const castle = group.children[0];
			group.children[0].material.metalness = 0, castle.position.x = -16, castle.position.z = -15, castle.scale.x = 25, castle.scale.y = 25, castle.scale.z = 25, transformControls.attach(castle), transformControls.setMode("translate"), castle.castShadow = !0, castle.receiveShadow = !0, castle.frustumCulled = !1, castle.geometry.computeVertexNormals(), castle.userData.draggable = !0, castle.userData.tablenum = "", castle.userData.name = "two seats", scene.add(castle), selected = castle
		})
	}))
}, document.getElementById("four").onclick = function createBox() {
	mtlLoader.setResourcePath(""), mtlLoader.setPath(""), mtlLoader.load("fourseats.mtl", (function(materials) {
		materials.preload();
		const objLoader = new OBJLoader;
		objLoader.setMaterials(materials), objLoader.loadAsync("./fourseats.obj").then(group => {
			const castle = group.children[0];
			group.children[0].material.metalness = 0, castle.position.x = -16, castle.position.z = -15, castle.scale.x = 25, castle.scale.y = 25, castle.scale.z = 25, transformControls.attach(castle), transformControls.setMode("translate"), castle.castShadow = !0, castle.receiveShadow = !0, castle.frustumCulled = !1, castle.geometry.computeVertexNormals(), castle.userData.draggable = !0, castle.userData.tablenum = "", castle.userData.name = "four seats", scene.add(castle), selected = castle
		})
	}))
}, document.getElementById("six").onclick = function createBox() {
	mtlLoader.setResourcePath(""), mtlLoader.setPath(""), mtlLoader.load("sixseats.mtl", (function(materials) {
		materials.preload();
		const objLoader = new OBJLoader;
		objLoader.setMaterials(materials), objLoader.loadAsync("./sixseats.obj").then(group => {
			const castle = group.children[0];
			group.children[0].material.metalness = 0, castle.position.x = -16, castle.position.z = -15, castle.scale.x = 25, castle.scale.y = 25, castle.scale.z = 25, transformControls.attach(castle), transformControls.setMode("translate"), castle.castShadow = !0, castle.receiveShadow = !0, castle.frustumCulled = !1, castle.geometry.computeVertexNormals(), castle.userData.draggable = !0, castle.userData.name = "six seats", scene.add(castle), selected = castle
		})
	}))
};
const mtlLoader = new MTLLoader;
document.getElementById("eight").onclick = function createBox() {
	mtlLoader.setResourcePath(""), mtlLoader.setPath(""), mtlLoader.load("eightseats.mtl", (function(materials) {
		materials.preload();
		const objLoader = new OBJLoader;
		objLoader.setMaterials(materials), objLoader.loadAsync("./eightseats.obj").then(group => {
			const castle = group.children[0];
			group.children[0].material.metalness = 0, castle.position.x = -16, castle.position.z = -15, castle.scale.x = 25, castle.scale.y = 25, castle.scale.z = 25, transformControls.attach(castle), transformControls.setMode("translate"), castle.castShadow = !0, castle.receiveShadow = !0, castle.frustumCulled = !1, castle.geometry.computeVertexNormals(), castle.userData.draggable = !0, castle.userData.name = "eight seats", scene.add(castle), selected = castle
		})
	}))
}, renderer.physicallyCorrectLights = !0;
const raycaster = new THREE.Raycaster,
	clickMouse = new THREE.Vector2,
	moveMouse = new THREE.Vector2;
var draggable;

function intersect(pos) {
	return raycaster.setFromCamera(pos, camera), raycaster.intersectObjects(scene.children)
}
window.addEventListener("dblclick", event => {
	transformControls.detach(draggable), transformControls.detach(selected)
}), window.addEventListener("click", event => {
	clickMouse.x = event.clientX / window.innerWidth * 2 - 1, clickMouse.y = -event.clientY / window.innerHeight * 2 + 1;
	const found = intersect(clickMouse);
	found.length > 0 && found[0].object.userData.draggable && (draggable = found[0].object, transformControls.attach(draggable))
}), window.addEventListener("keydown", (function(event) {
	switch (event.key) {
		case "Enter":
			if (selected) {
				const loader = new FontLoader;
				loader.load("/helvetiker_bold.typeface.json", (function(font) {
					const color = 16766720,
						matDark = new THREE.LineBasicMaterial({
							color: color,
							side: THREE.DoubleSide
						}),
						matLite = new THREE.MeshBasicMaterial({
							color: color,
							transparent: !0,
							opacity: 1,
							side: THREE.DoubleSide
						}),
						message = document.getElementById("text").value;
					selected.userData.tablenum = message;
					const shapes = font.generateShapes(message, 10),
						geometry = new THREE.ShapeGeometry(shapes);
					geometry.computeBoundingBox();
					const xMid = -.5 * (geometry.boundingBox.max.x - geometry.boundingBox.min.x);
					geometry.translate(xMid, 0, 0);
					const text = new THREE.Mesh(geometry, matLite);
					text.position.x = selected.position.x + .2, text.position.y = selected.position.y + 22.5, text.position.z = selected.position.z + 2, text.rotation.x = 4.7, scene.add(text);
					const holeShapes = [];
					for (let i = 0; i < shapes.length; i++) {
						const shape = shapes[i];
						if (shape.holes && shape.holes.length > 0)
							for (let j = 0; j < shape.holes.length; j++) {
								const hole = shape.holes[j];
								holeShapes.push(hole)
							}
					}
					shapes.push.apply(shapes, holeShapes), selected.attach(text), selected = null
				}))
			} else if (draggable) {
				const loader = new FontLoader;
				loader.load("/helvetiker_bold.typeface.json", (function(font) {
					const color = 16766720,
						matDark = new THREE.LineBasicMaterial({
							color: color,
							side: THREE.DoubleSide
						}),
						matLite = new THREE.MeshBasicMaterial({
							color: color,
							transparent: !0,
							opacity: 1,
							side: THREE.DoubleSide
						}),
						message = document.getElementById("text").value;
					draggable.userData.tablenum = message;
					const shapes = font.generateShapes(message, 10),
						geometry = new THREE.ShapeGeometry(shapes);
					geometry.computeBoundingBox();
					const xMid = -.5 * (geometry.boundingBox.max.x - geometry.boundingBox.min.x);
					geometry.translate(xMid, 0, 0);
					const text = new THREE.Mesh(geometry, matLite);
					text.position.x = draggable.position.x + .2, text.position.y = draggable.position.y + 22.5, text.position.z = draggable.position.z + 2, text.rotation.x = 4.7, scene.add(text);
					const holeShapes = [];
					for (let i = 0; i < shapes.length; i++) {
						const shape = shapes[i];
						if (shape.holes && shape.holes.length > 0)
							for (let j = 0; j < shape.holes.length; j++) {
								const hole = shape.holes[j];
								holeShapes.push(hole)
							}
					}
					shapes.push.apply(shapes, holeShapes), draggable.attach(text)
				}))
			}
			break;
		case "d":
			transformControls.detach(draggable), scene.remove(draggable);
			break;
		case "r":
			transformControls.showY = !0, transformControls.showX = !1, transformControls.showZ = !1, transformControls.setMode("rotate");
			break;
		case "m":
			transformControls.showX = !0, transformControls.showZ = !0, transformControls.showY = !1, transformControls.setMode("translate")
	}
})), window.addEventListener("mousemove", event => {
	moveMouse.x = event.clientX / window.innerWidth * 2 - 1, moveMouse.y = -event.clientY / window.innerHeight * 2 + 1
});
var array = [];

function tick() {
	window.requestAnimationFrame(tick)
}

function postTables(array) {
	const urlParams = new URLSearchParams(window.location.search)
  	const search = urlParams.get('search')
  	console.log("search" , search);
  	if (!!search) {
		axios.post(`http://34.236.249.40:5000/post/${search}`, {
			table: array
		}).then(({
			data: data
		}) => {
			document.getElementById('success').style.display='block';
			setTimeout(function () {
		        document.getElementById('success').style.display='none';
		    }, 5000);

		}) 
	}
}

document.getElementById("save").onclick = function save() {
	array = [];
	for (var i = 4; i < scene.children.length; i++) array.push({
		uuid: scene.children[i].uuid,
		name: scene.children[i].userData.name,
		position: scene.children[i].position,
		rotation: scene.children[i].rotation.y,
		tablenum: scene.children[i].userData.tablenum
	});

	// alert("saved"), 
	postTables(array)

	// axios.post(`http://34.236.249.40:5000/post/${45545454}`, {
	// 	table: array
	// }).then(({
	// 	data: data
	// }) => {}) 

}, createFloor(), createRestaurant(), animate(), tick();