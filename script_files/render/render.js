let dt = 0;
let last = performance.now();

initPlayer();
initWorld();
initWeapons();
initInput();

engine.runRenderLoop(()=>{

    const now = performance.now();
    dt = Math.min((now-last)/1000,0.1);
    last = now;

    updatePlayer();
    updateUI();

    scene.render();
});

window.addEventListener("resize",()=>engine.resize());
