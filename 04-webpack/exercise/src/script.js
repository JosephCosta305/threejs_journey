import * as THREE from 'three';
import { SphereGeometry } from 'three';
console.log(THREE);

// Scene
const scene = new THREE.Scene();

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('canvas.webgl')
})
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);

// Object 2
const sphere = new THREE.SphereGeometry(1,1,1);
const sphereMaterial = new THREE.MeshBasicMaterial({color: 0xff0000});
const mesh2 = new THREE.Mesh(sphere, sphereMaterial);
scene.add(mesh2);

// Object 2 Size
const size2 = {
    width2: 800,
    height2: 600
}

//Camera Object 2
const camera2 = new THREE.PerspectiveCamera(75, size2.width2 / size2.height2);
camera2.postion.x = 3
scene.add(camera2);

// Renderer
const renderer2 = new THREE.WebGLRenderer({
    canvas: document.querySelector('canvas.webgl')
})
renderer2.setSize(size2.sphereWidth, size2.sphereHeight);
renderer2.render(scene, camera2);