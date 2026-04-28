function initWorld() {
    const ground = BABYLON.MeshBuilder.CreateGround("g", {
        width: 200,
        height: 200,
        subdivisions: 50
    }, scene);

    const mat = new BABYLON.StandardMaterial("m", scene);
    mat.diffuseColor = new BABYLON.Color3(0.2,0.35,0.15);
    ground.material = mat;

    spawnTargets();
}

function getGroundHeight(x,z){
    return Math.sin(x*0.1)*2 + Math.cos(z*0.1)*2;
}

function spawnTargets(){
    for(let i=0;i<15;i++){
        const t = BABYLON.MeshBuilder.CreateBox("t",{size:1.5},scene);
        t.position = new BABYLON.Vector3(
            Math.random()*50-25,
            5,
            Math.random()*50-25
        );
        t.health = 100;
        targets.push(t);
    }
}
