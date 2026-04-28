function initUI(){}

function updateUI(){
    document.getElementById("ammo").textContent =
        currentWeapon.ammo ?? 0;
}
