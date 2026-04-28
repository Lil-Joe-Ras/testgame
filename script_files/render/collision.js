function moveAxis(axis){
    player.pos[axis] += player.vel[axis];

    for(let t of targets){
        if(BABYLON.Vector3.Distance(player.pos,t.position)<2){
            player.pos[axis] -= player.vel[axis];
            player.vel[axis]=0;
        }
    }
}
