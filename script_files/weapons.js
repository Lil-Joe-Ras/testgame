const weapons = {
    rifle: {damage:25, fireRate:100, ammo:30, spread:0.02},
    shotgun: {damage:10, fireRate:800, ammo:8, spread:0.2, pellets:6}
};

function initWeapons(){
    currentWeapon = weapons.rifle;
}

let lastShot = 0;

function fire(){
    if(performance.now()-lastShot < currentWeapon.fireRate) return;
    lastShot = performance.now();

    currentWeapon.ammo--;

    const origin = camera.position;
    const dir = camera.getDirection(BABYLON.Vector3.Forward());

    const ray = new BABYLON.Ray(origin, dir, 200);
    const hit = scene.pickWithRay(ray);

    if(hit.pickedMesh && targets.includes(hit.pickedMesh)){
        hit.pickedMesh.health -= currentWeapon.damage;
        if(hit.pickedMesh.health <= 0){
            hit.pickedMesh.dispose();
        }
    }
}
