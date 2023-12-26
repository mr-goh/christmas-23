// import * as THREE from 'three';
import * as THREE from 'node_modules/three'
import { GLTFLoader } from 'node_modules/three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'node_modules/three/addons/controls/OrbitControls.js';


const scene = new THREE.Scene();
scene.background = new THREE.Color(0xFAD5A5);
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / (window.innerHeight), 0.1, 1000 );

const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize( window.innerWidth, window.innerHeight );
// document.body.appendChild( renderer.domElement );
document.getElementById('model-container').appendChild(renderer.domElement);


const loader = new GLTFLoader();
let model;

loader.load( 'cactus.glb', function ( gltf ) {
    
    model = gltf.scene;
    model.scale.set(1, 1, 1);
	scene.add( model );
    model.position.y -= 2

}, undefined, function ( error ) {

	console.error( error );

} );

camera.position.z = 10;


const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
directionalLight.position.set(0, 1, 1);
scene.add(directionalLight);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
controls.dampingFactor = 0.25; // non-inertia
controls.screenSpacePanning = false;
controls.maxPolarAngle = Math.PI / 2;

controls.minDistance = 5;
controls.maxDistance = 12;

function animate() {
	requestAnimationFrame( animate );
    if (model) {
        // Rotate the model around the y-axis
        model.rotation.y += 0.005;
    }
    controls.update();
    directionalLight.position.copy(camera.position);
	renderer.render( scene, camera );
}

function onWindowResize() {
    camera.aspect = window.innerWidth / (window.innerHeight);
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', onWindowResize, false);

onWindowResize();


animate();

document.addEventListener("DOMContentLoaded", function () {
    const scrollButton = document.getElementById("scroll-button");
   
    scrollButton.addEventListener("click", function () {
        window.scrollTo({
          top: window.innerHeight, // 100vh
          behavior: "smooth" // Smooth scrolling animation
        });
      });
    });