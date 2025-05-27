// Import Three.js from CDN (ES module version)
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@latest/build/three.module.js';
import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@latest/examples/jsm/controls/OrbitControls.js';
gsap.registerPlugin(ScrollTrigger);
var scrollPercentage = 0;
function runThreeAnim() {
    var scene = new THREE.Scene();
    // Create a partial torus
    const radius = 5;
    const tube = 1;
    const radialSegments = 30;
    const tubularSegments = 200;
    const arc = THREE.MathUtils.degToRad(scrollPercentage); // 270 degree arc

    let cubeGeometry = new THREE.TorusGeometry(
        radius,
        tube,
        radialSegments,
        tubularSegments,
        arc
    );

    const cubeMaterial = new THREE.MeshBasicMaterial({
        color: 0x597DA2,
        side: THREE.DoubleSide // Important for partial arcs
    });

    let cubeMesh = new THREE.Mesh(cubeGeometry, cubeMaterial);
    scene.add(cubeMesh);
    // const axesHelper = new THREE.AxesHelper(2);
    // cubeMesh.add(axesHelper);

    const camera = new THREE.PerspectiveCamera(
        100,
        window.innerWidth / window.innerHeight,
        0.1,
        100
    );

    camera.position.z = 15;
    //initialize renders

    const canvas1 = document.getElementById("three");
    const renderer = new THREE.WebGLRenderer({
        alpha: true,
        canvas: canvas1,
        antialias: true // anti alias remove
    });
    renderer.setSize(100, 100)

    // initialize orbit controlls
    const controls = new OrbitControls(camera, canvas1);
    controls.enableDamping = true;
    controls.autoRotate = true;

    window.addEventListener("resize", () => {
        //update canmera size position after any window resize or value changes
        camera.aspect = (window.innerWidth / window.innerHeight);
        camera.updateProjectionMatrix();
    })

    const renderLoop = () => {
        controls.update();
        renderer.render(scene, camera);
        window.requestAnimationFrame(renderLoop)
    }
    renderLoop()
    const _bodyHeight = document.querySelector(".main-wrapper").scrollHeight - window.innerHeight;

    // Create scroll trigger without animation, just to track scroll
    ScrollTrigger.create({
        trigger: ".main-wrapper",
        start: "top top",
        end: () => `+=${_bodyHeight}`,
        scrub: 1,
        onUpdate: (self) => {
            cubeGeometry.dispose();

            // Create new geometry with updated arc
            const arcRadians = THREE.MathUtils.degToRad(self.progress * 360);
            cubeGeometry = new THREE.TorusGeometry(radius,
                tube,
                radialSegments,
                tubularSegments, arcRadians);

            // Assign new geometry to mesh
            cubeMesh.geometry = cubeGeometry;
        },

        // markers: true
    });

}

document.addEventListener("DOMContentLoaded", () => {
    runThreeAnim();
});
