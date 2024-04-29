//för att visa nåt på skärmen behövs 3 saker
//1. scen
//2. kamera
//3. renderare

import * as tre from 'three';

const scene = new tre.Scene();
const camera = new tre.PerspectiveCamera(80,window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new tre.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//skapa kuben:
var cubex = 1;
var cubey = 1;
var cubez = 1;
const geometry = new tre.BoxGeometry(1, 1, 1);
const material = new tre.MeshPhongMaterial({color : 'grey'});
const cube = new tre.Mesh(geometry, material);

scene.background = new tre.Color('skyblue');

const floorGeo = new tre.PlaneGeometry(5,5);
const floorMat = new tre.MeshLambertMaterial({color: 0xffff00, side: tre.DoubleSide});
const floor = new tre.Mesh(floorGeo, floorMat);

const light = new tre.DirectionalLight({color : 'white'}, 3);

scene.add(floor);
scene.add(light);
scene.add(cube);

camera.position.z = -5;
camera.lookAt(0,0,0);
floor.rotateX(10);


var x = 0;

function animate(){
    requestAnimationFrame(animate);

    cube.rotation.x += 0.05;
    cube.rotation.y += 0.03;
    cube.rotation.z += 0.02;



    //camera.position.z = 5*Math.sin(x);
    //camera.position.x = 5*Math.cos(x);

    //camera.lookAt(0,0,0);


    cube.position.setX(cubex);
    cube.position.setY(cubey);
    cube.position.setZ(cubez);

    cubex = 2*Math.sin(x);
    cubey = 2*Math.cos(x);
    cubez = 2*Math.sin(x);


    x+=0.04;
    renderer.render(scene, camera);
}
animate();