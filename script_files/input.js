function initInput(){
    window.addEventListener("keydown", e => keys[e.code]=true);
    window.addEventListener("keyup", e => keys[e.code]=false);

    canvas.addEventListener("click", () => canvas.requestPointerLock());
}

window.addEventListener("mousedown", e=>{
    if(e.button===0) fire();
});
