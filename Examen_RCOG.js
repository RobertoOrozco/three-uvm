import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setAnimationLoop(animate);
document.body.appendChild(renderer.domElement);

// Crear un cubo
const geometryCube = new THREE.BoxGeometry(1, 1, 1);
const materialCube = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometryCube, materialCube);

// Crear un toro
const geometryTorus = new THREE.TorusGeometry(0.5, 0.2, 16, 100);
const materialTorus = new THREE.MeshStandardMaterial({ color: 0xff0000 });
const torus = new THREE.Mesh(geometryTorus, materialTorus);
torus.position.set(2, 0, 0); // Posicionarlo a la derecha del cubo

// Crear un plano
const geometryPlane = new THREE.PlaneGeometry(10, 10);
const materialPlane = new THREE.MeshStandardMaterial({ color: 0xcccccc, side: THREE.DoubleSide });
const plane = new THREE.Mesh(geometryPlane, materialPlane);
plane.rotation.x = -Math.PI / 2; // Rotar el plano para que esté horizontal
plane.position.y = -1; // Posicionar el plano un poco más abajo

// Agregar luz ambiental y luz direccional
const light = new THREE.AmbientLight(0x404040);
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);

scene.add(cube);
scene.add(torus);
scene.add(plane);
scene.add(light);
scene.add(directionalLight);

// Ajustar posición de la cámara y la luz
camera.position.set(3, 3, 5);
directionalLight.position.set(10, 10, 5);
camera.lookAt(cube.position);

function animate() {
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  torus.rotation.x += 0.01;
  torus.rotation.y += 0.01;
  
  renderer.render(scene, camera);
}

// Ajustar el tamaño del renderizador al cambiar el tamaño de la ventana
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});


