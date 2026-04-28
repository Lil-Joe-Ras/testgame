function initPlayer() {
    player = {
        pos: new BABYLON.Vector3(0, 10, 0),
        vel: new BABYLON.Vector3(0, 0, 0),
        size: new BABYLON.Vector3(0.4, 0.9, 0.4),
        onGround: false,
        health: 100
    };

    camera = new BABYLON.UniversalCamera("cam", player.pos, scene);
    camera.inertia = 0;
    camera.inputs.clear();
}

function updatePlayer() {
    const forward = new BABYLON.Vector3(Math.sin(camera.rotation.y), 0, Math.cos(camera.rotation.y));
    const right = new BABYLON.Vector3(Math.cos(camera.rotation.y), 0, -Math.sin(camera.rotation.y));

    let move = new BABYLON.Vector3(0,0,0);

    if (keys["KeyW"]) move.addInPlace(forward);
    if (keys["KeyS"]) move.subtractInPlace(forward);
    if (keys["KeyA"]) move.subtractInPlace(right);
    if (keys["KeyD"]) move.addInPlace(right);

    if (move.lengthSquared() > 0) {
        move.normalize();
        player.vel.x = move.x * 10 * dt;
        player.vel.z = move.z * 10 * dt;
    }

    player.vel.y -= 1.6 * dt;

    moveAxis("x");
    moveAxis("z");
    moveAxis("y");

    const groundY = getGroundHeight(player.pos.x, player.pos.z);
    if (player.pos.y <= groundY + player.size.y) {
        player.pos.y = groundY + player.size.y;
        player.vel.y = 0;
        player.onGround = true;
    }

    camera.position.copyFrom(player.pos);
}
