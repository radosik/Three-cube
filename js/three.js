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

let cont = document.getElementById("container");
let renderer = null;
let camera = null;
let scene = null;

let diumX = 20;
let diumY = 20;
let diumZ = 20;

let cubeX = diumX * 10;
let cubeY = diumY * 10;
let cubeZ = diumZ * 10;

scene = new THREE.Scene();
camera = new THREE.PerspectiveCamera(50, 1, 1, 100000);

camera.position.x = cubeX * 1.7;
camera.position.y = cubeY;
camera.position.z = -cubeZ;

camera.lookAt(new THREE.Vector3(0, -40, 0));

let textureLoader = new THREE.TextureLoader();

let materials = textureUrls
  .map(url => {
    return textureLoader.load(url);
  })
  .map(texture => {
    return new THREE.MeshBasicMaterial({ map: texture });
  });

let geometry = new THREE.BoxGeometry(cubeZ, cubeX, cubeY);

let mesh = new THREE.Mesh(geometry, materials);
scene.add(mesh);

var floorGeometry = new THREE.PlaneBufferGeometry(cubeZ * 1.7, cubeY * 1.7);
const shadowTexture = textureLoader.load("t.gif");
floorMat = new THREE.MeshBasicMaterial({ map: shadowTexture });
var floorMesh = new THREE.Mesh(floorGeometry, floorMat);
floorMesh.position.set(0, -cubeX / 2, 0);
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

let arr = [];

function f() {
  if (mesh.rotation.y < side * 3) {
    requestAnimationFrame(f);
    mesh.rotation.y += 0.2;
    floorMesh.rotation.z += 0.2;
  }
  dataURL = ctx.toDataURL("image/png");
  arr.push(dataURL);
}

function record() {
  f();
  function gf() {
    gifshot.createGIF(
      {
        gifWidth: 800,
        gifHeight: 800,
        images: arr,
        numFrames: 10,
        frameDuration: 1,
        sampleInterval: 10,
        numWorkers: 10
      },
      function(obj) {
        if (!obj.error) {
          var image = obj.image,
            animatedImage = document.getElementById("imgSample");
          animatedImage.src = image;
          document.body.appendChild(animatedImage);
        }
      }
    );
  }
  setTimeout(gf, 1000);
}
function init() {
  renderer = new THREE.WebGLRenderer({ preserveDrawingBuffer: true });
  scene.background = new THREE.Color(0xffffff);
  renderer.setSize(cont.clientWidth, cont.clientHeight);
  renderer.domElement.id = "canvas";
  cont.appendChild(renderer.domElement);
  render();
}

function render() {
  requestAnimationFrame(render);
  renderer.render(scene, camera);
}

init();

let ctx = document.getElementById("canvas");
