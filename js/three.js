/*var scene = new THREE.Scene();
var camera = new THREE.OrthographicCamera( window.innerWidth / - 2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / - 2, 1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


var geometry = new THREE.BoxGeometry( 200, 200, 200);
var loader = new THREE.CubeTextureLoader();

var textureCube = loader.load( [
	'https://i.imgur.com/wLNDvZV.png', 'https://i.imgur.com/wLNDvZV.png',
	'https://i.imgur.com/wLNDvZV.png', 'https://i.imgur.com/wLNDvZV.png',
	'https://i.imgur.com/wLNDvZV.png', 'https://i.imgur.com/wLNDvZV.png'
] );
var material = new THREE.MeshBasicMaterial( { color: 0xffffff, envMap: textureCube } ); 
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.lookAt(new THREE.Vector3(0, 0, 0));

camera.position.z = 500;
camera.position.z = 500;
camera.position.z = -500;

camera.lookAt(new THREE.Vector3(0, 0, 0))

var light = new THREE.PointLight( 0xffffff, 2 );
light.position.set( 80, 80, 300 );
scene.add( light );

cube.rotation.x = 0.4;
cube.rotation.y = 4;

renderer.render(scene, camera);

var animat = function () {
    z = requestAnimationFrame( animat ); 
    cube.rotation.y += 0.1;
    camera.updateProjectionMatrix();
    renderer.render(scene, camera);
    if(cube.rotation.y = 5.57) {
       cancelAnimationFrame(z);
    }
};*/

let textureUrls = [
  "texture2.gif",
  "texture2.gif",
  "texture3.gif",
  "texture2.gif",
  "texture2.gif",
  "texture2.gif"
];

let renderer = null;
let camera = null;
let scene = null;

scene = new THREE.Scene();
camera = new THREE.PerspectiveCamera(
  50,
  window.innerWidth / window.innerHeight,
  1,
  100000
);

camera.position.x = 250;
camera.position.y = 250;
camera.position.z = -250;

camera.lookAt(new THREE.Vector3(0, -40, 0));

let textureLoader = new THREE.TextureLoader();

let materials = textureUrls
  .map(url => {
    return textureLoader.load(url);
  })
  .map(texture => {
    return new THREE.MeshBasicMaterial({ map: texture });
  });

let geometry = new THREE.BoxGeometry(200, 200, 200);

let mesh = new THREE.Mesh(geometry, materials);
scene.add(mesh);

var floorGeometry = new THREE.PlaneBufferGeometry(350, 350);
const shadowTexture = textureLoader.load("t.gif");
floorMat = new THREE.MeshBasicMaterial({ map: shadowTexture});
var floorMesh = new THREE.Mesh(floorGeometry, floorMat);
floorMesh.position.set(0, -100, 0);
floorMesh.rotation.x = -Math.PI / 2.0;
scene.add(floorMesh);

var side = Math.PI / 2;

function first() {
  if (mesh.rotation.y > 0) {
    requestAnimationFrame(first);
    mesh.rotation.y -= 0.05;
    floorMesh.rotation.z -= 0.05;
  }
}

function second() {
  if (mesh.rotation.y < side) {
    requestAnimationFrame(second);
    mesh.rotation.y += 0.05;
    floorMesh.rotation.z += 0.05;
  }
  if (mesh.rotation.y > side + 0.05) {
    requestAnimationFrame(second);
    mesh.rotation.y -= 0.05;
    floorMesh.rotation.z -= 0.05;
  }
}

function third() {
  if (mesh.rotation.y < side * 2) {
    requestAnimationFrame(third);
    mesh.rotation.y += 0.05;
    floorMesh.rotation.z += 0.05;
  }
  if (mesh.rotation.y > side * 2 + 0.05) {
    requestAnimationFrame(third);
    mesh.rotation.y -= 0.05;
    floorMesh.rotation.z -= 0.05;
  }
}

function fourth() {
  if (mesh.rotation.y < side * 3) {
    requestAnimationFrame(fourth);
    mesh.rotation.y += 0.05;
    floorMesh.rotation.z += 0.05;
  }
}

function init() {
  renderer = new THREE.WebGLRenderer();
  scene.background = new THREE.Color(0xffffff);
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
  render();
}

function render() {
  requestAnimationFrame(render);
  renderer.render(scene, camera);
}

init();
