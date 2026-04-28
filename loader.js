const scripts = [
  "script_files/constant.js",
  "script_files/player.js",
  "script_files/world.js",
  "script_files/weapons.js",
  "script_files/input.js",
  "script_files/effects.js",
  "script_files/ui.js",
  "script_files/render/collision.js",
  "script_files/render/render.js",
  "script.js"
];

let i = 0;
function load() {
  if (i >= scripts.length) return;
  const s = document.createElement("script");
  s.src = scripts[i++];
  s.onload = load;
  document.body.appendChild(s);
}
load();
