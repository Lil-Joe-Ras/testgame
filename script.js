const canvas = document.getElementById("c");

const engine = new BABYLON.Engine(canvas, true);
const scene = new BABYLON.Scene(engine);

initPlayer(scene);
initWorld(scene);
initWeapons(scene);
initInput(canvas);
initUI();

engine.runRenderLoop(() => {
    updatePlayer();
    updateWeapons();
    updateUI();
    scene.render();
});

window.addEventListener("resize", () => engine.resize());
