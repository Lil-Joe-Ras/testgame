let player, camera;

function initPlayer(scene) {
    player = {
        pos: new BABYLON.Vector3(0, 10, 0),
        vel: new BABYLON.Vector3(0, 0, 0),
        onGround: false
    };

    camera = new BABYLON.UniversalCamera("cam", player.pos, scene);
    camera.inertia = 0;
}

function updatePlayer() {
    player.pos.addInPlace(player.vel);
    camera.position.copyFrom(player.pos);
}
