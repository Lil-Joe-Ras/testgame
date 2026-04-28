function impact(pos){
    const p = new BABYLON.ParticleSystem("p", 20, scene);
    p.emitter = pos;
    p.start();
    setTimeout(()=>p.dispose(),100);
}
