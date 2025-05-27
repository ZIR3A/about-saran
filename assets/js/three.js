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
    // const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
    const cubeGeometry = new THREE.PlaneGeometry(0.9, 1.5, 1);
    const cubeMaterial = new THREE.MeshBasicMaterial({
        color: 0x597DA2,
        transparent: true,
        opacity: 0.1 // Make the cube semi-transparent
    });

    // main matrial is mesh
    var cubeMesh = new THREE.Mesh(
        cubeGeometry,
        cubeMaterial
    )

    scene.add(cubeMesh);
    // scene.background = null;
    const tempVector = new THREE.Vector3(0, 0, 0);

    cubeMesh.position.copy(tempVector)
    // cubeMesh.scale.set(window.innerWidth / 350, 1, 3); // X: 2, Y: 0.5, Z: 3
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

   function responsiveThreeD() {
    // Create animation timeline
    const threeTLFirstSection = gsap.timeline({
       scrollTrigger: {
           trigger: "#section-one",
           start: "top top",
           endTrigger: "#section-two",
           end: "center 60%",
           scrub: 1,
           // markers: true
       },
   });
       // Check viewport width and add appropriate animation
   if (window.innerWidth >= 1024) {
    cubeMesh.scale.set(window.innerWidth / 350, 1, 3);
       threeTLFirstSection
       .to(cubeMesh.scale, {
           x: 7.2,
           y: 2.1,
           // z: 2.9
       }, 0)
       .to("#three", { y: "104vh" }, 0);
   } else if (window.innerWidth >= 768) {
    cubeMesh.scale.set(window.innerWidth / 300, 0.6, 3);
       threeTLFirstSection
       .to(cubeMesh.scale, {
           x: 4,
           y: 2.2,
       }, 0)
       .to("#three", { y: "103vh" }, 0);
   } else if (window.innerWidth >= 560) {
    cubeMesh.scale.set(window.innerWidth / 250, 0.6, 3);
    threeTLFirstSection
    .to(cubeMesh.scale, {
        x: 3.4,
        y: 1.7,
    }, 0)
    .to("#three", { y: "96vh" }, 0);
    } else {
    cubeMesh.scale.set(window.innerWidth, 0.6);
       threeTLFirstSection
       .to(cubeMesh.scale, {
           x: 4,
           y: 2,
           // z: 2.9
       },0)
       .to("#three", { y: "95vh" },0);
   }
  }
  responsiveThreeD()
    window.addEventListener("resize", () => {
        //update canmera size position after any window resize or value changes
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
        // cubeMesh.scale.set(window.innerWidth / 350, 1, 3); // X: 2, Y: 0.5, Z: 3
        responsiveThreeD()
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
