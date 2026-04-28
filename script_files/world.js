let ground;

function initWorld(scene) {
    ground = BABYLON.MeshBuilder.CreateGround("g", {
        width: 200,
        height: 200
    }, scene);
}
