const scripts = [
  "script_files/player.js",
  "script_files/world.js",
  "script_files/weapons.js",
  "script_files/input.js",
  "script_files/effects.js",
  "script_files/ui.js",
  "script_files/render/render.js",
  "script.js"
];

let loaded = 0;

function loadNext() {
  if (loaded >= scripts.length) return;

  const s = document.createElement("script");
  s.src = scripts[loaded];
  s.onload = () => {
    loaded++;
    loadNext();
  };

  document.body.appendChild(s);
}

loadNext();
