const canvas = document.getElementById("c");
const engine = new BABYLON.Engine(canvas, true);
const scene = new BABYLON.Scene(engine);

scene.clearColor = new BABYLON.Color3(0.05,0.05,0.1);

let player, camera;
let targets = [];
let keys = {};
let currentWeapon;
