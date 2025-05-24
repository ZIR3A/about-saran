// Import Three.js from CDN (ES module version)
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@latest/build/three.module.js';
import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@latest/examples/jsm/controls/OrbitControls.js';
gsap.registerPlugin(ScrollTrigger);
const sceneSize = [
    window.innerWidth,
    window.innerHeight,
]
function runThreeAnim() {
    var scene = new THREE.Scene();
    const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
    const cubeMaterial = new THREE.MeshBasicMaterial({
        color: 0x597DA2,
        transparent: true,
        opacity: 0.3 // Make the cube semi-transparent
    });

    // main matrial is mesh
    var cubeMesh = new THREE.Mesh(
        cubeGeometry,
        cubeMaterial
    )


    console.log(window.innerWidth / window.innerHeight);

    // Create animation timeline
    const threeTL = gsap.timeline({
        scrollTrigger: {
            trigger: "#section-one",
            start: "top top",
            endTrigger: "#section-two",
            end: "center 60%",
            scrub: 1,
            // markers: true
        },
    });

    // Add multiple animations to the timeline
    threeTL
        .to(cubeMesh.scale, {
            // x: 1.8,
            // y: 1,
            // z: 2.9
        }, 0)
        .to(cubeMesh.rotation, { x: 1.5}, 0)
        .to("#three", { y: "104vh" }, 0);

    scene.add(cubeMesh);
    scene.background = null;
    const tempVector = new THREE.Vector3(0, 0, 0);

    cubeMesh.position.copy(tempVector)
    cubeMesh.scale.set(window.innerWidth / 350, 1, 3); // X: 2, Y: 0.5, Z: 3
    // console x y z lines
    // const axesHelper = new THREE.AxesHelper(2);
    // scene.add(axesHelper);

    const camera = new THREE.PerspectiveCamera(
        45,
        window.innerWidth / window.innerHeight,
        0.1,
        200
    );

    camera.position.z = 5;
    //initialize renders

    const canvas1 = document.getElementById("three");
    const renderer = new THREE.WebGLRenderer({
        alpha: true,
        canvas: canvas1,
        antialias: true // anti alias remove
    });
    renderer.setSize(window.innerWidth, window.innerHeight)

    //anti aliasing remove
    // const maxPixelRatio = Math.min(window.devicePixelRatio, 2);
    // renderer.setPixelRatio(maxPixelRatio);

    // initialize orbit controlls
    const controls = new OrbitControls(camera, canvas1);
    // controls.enableDamping = true;
    // controls.autoRotate = true;

    window.addEventListener("resize", () => {
        //update canmera size position after any window resize or value changes
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
        cubeMesh.scale.set(window.innerWidth / 350, 1, 3); // X: 2, Y: 0.5, Z: 3
    })

    const renderLoop = () => {
        // controls.update();
        renderer.render(scene, camera);
        window.requestAnimationFrame(renderLoop)
    }
    renderLoop()
}

document.addEventListener("DOMContentLoaded", () => {
    runThreeAnim();
});
