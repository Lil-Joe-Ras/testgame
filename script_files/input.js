const keys = {};

function initInput(canvas) {
    window.addEventListener("keydown", e => keys[e.code] = true);
    window.addEventListener("keyup", e => keys[e.code] = false);

    canvas.addEventListener("click", () => canvas.requestPointerLock());
}
